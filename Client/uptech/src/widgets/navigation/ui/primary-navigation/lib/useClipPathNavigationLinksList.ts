import { MutableRefObject, useEffect } from "react";
import { useAnimationControls } from "motion/react";

import { calculateClipPath } from "./calculateClipPath";

export const useClipPathNavigationLinksList = (
	containerRef: MutableRefObject<HTMLDivElement | null>,
	activeLink: string,
	activeLinkElementRef: MutableRefObject<HTMLAnchorElement | null>,
	orientation: "horizontal" | "vertical"
) => {
	const animationControls = useAnimationControls();

	useEffect(() => {
		const container = containerRef?.current;
		if (activeLink && container) {
			const activeLinkElement = activeLinkElementRef.current;

			const animationConfig = calculateClipPath({
				animationDuration: 0.5,
				container,
				activeLinkElement,
				orientation
			});
			animationControls.start(animationConfig);
		}
	}, [activeLink, containerRef, activeLinkElementRef, orientation]);

	return { animationControls };
};
