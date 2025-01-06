import { useEffect, useRef, useState } from "react";
import { useAnimationControls, useMotionValueEvent, useScroll } from "motion/react";

import { useWindowSize } from "@shared/lib/hooks";

import { useHeaderStore } from "../model";

export const useStickyHeader = () => {
	const { width } = useWindowSize();
	const { scrollY } = useScroll();

	const [stickyHeaderState, setStickyHeaderState] = useState<"hidden" | "visible">(
		width >= 990 ? "hidden" : "visible"
	);

	const animationControls = useAnimationControls();

	const lastScrollY = useRef(0);
	const delta = useRef(0);

	const mobileNavigationState = useHeaderStore(
		({ mobileNavigationState }) => mobileNavigationState
	);
	const toggleMobileNavigation = useHeaderStore(
		({ toggleMobileNavigation }) => toggleMobileNavigation
	);

	// When component is mounted first time, and it is hidden
	// We need to apply hidden animation end values directly
	// Otherwise we will see on first render how hidden animation is played
	// Which is not what we want
	useEffect(() => {
		if (stickyHeaderState === "hidden")
			(async () => {
				await animationControls.set("hidden");
			})();
	}, []);

	const handleScroll = (currentY: number) => {
		if (width >= 990 && currentY <= 300) {
			if (mobileNavigationState === "opened") {
				(async () => {
					await animationControls.start("hidden");
				})();
				toggleMobileNavigation();
			} else {
				setStickyHeaderState("hidden");

				if (stickyHeaderState === "hidden")
					(async () => {
						await animationControls.start("hidden");
					})();
			}

			return;
		}

		if (mobileNavigationState === "opened") return;

		// Calculate scroll delta
		const scrollDiff = currentY - lastScrollY.current;
		delta.current = Math.min(Math.max(delta.current + scrollDiff, -10), 10);

		// If delta.current value is positive we are scrolling down if negative up
		// console.log(delta.current);
		// console.log(currentY);

		// Trigger animations based on scroll direction and delta
		if (delta.current >= 10 && currentY > 200) {
			setStickyHeaderState("hidden");

			if (stickyHeaderState === "hidden") {
				(async () => {
					await animationControls.start("hidden");
				})();
			}
		} else if (delta.current <= -10 || currentY < 200) {
			setStickyHeaderState("visible");

			if (stickyHeaderState === "visible") {
				(async () => {
					await animationControls.start("visible");
				})();
			}
		}
		lastScrollY.current = currentY;
	};

	useMotionValueEvent(scrollY, "change", handleScroll);

	return { animationControls };
};
