import { FC, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";

import { useDrawerStore } from "../lib";

type InteractiveDrawerProps = {
	id: string;
	index: number;
	children: ReactNode;
};

// take width from store 380

export const InteractiveDrawer: FC<InteractiveDrawerProps> = ({ id, index, children }) => {
	const { drawers, config, closeDrawer, reorderDrawer } = useDrawerStore();

	useEffect(() => {
		const handleEscapeKeyDown = (event) => {
			if (event.key === "Escape") {
				closeDrawer(id);
			}
		};

		window.addEventListener("keydown", handleEscapeKeyDown);

		return () => window.removeEventListener("keydown", handleEscapeKeyDown);
	}, [closeDrawer]);

	const TOTAL_DRAWERS_COUNT = drawers.length;

	// Calculate reverse index, where 0 is the latest sidebar
	const REVERSE_INDEX = TOTAL_DRAWERS_COUNT - 1 - index;
	const IS_DRAWER_FIRST_IN_STACK = REVERSE_INDEX === 0;
	const IS_DRAWER_LAST_IN_STACK = REVERSE_INDEX > config.maxDrawers - 1;

	const DRAWER_SCALE = 1.0 - REVERSE_INDEX / 10;
	const DRAWER_OFFSET_X = -90 * REVERSE_INDEX;
	const DRAWER_OFFSET_Y = 30 * REVERSE_INDEX;

	const LAST_DRAWER_SCALE = 1.0 - config.maxDrawers / 10;
	const LAST_DRAWER_OFFSET_X = -90 * config.maxDrawers;
	const LAST_DRAWER_OFFSET_Y = 30 * config.maxDrawers;

	const drawerAnimationVariants = {
		initial: { opacity: 0, x: 320, y: 0, scale: 1, filter: "blur(5rem)" },
		default: {
			opacity: 1,
			x: DRAWER_OFFSET_X,
			y: DRAWER_OFFSET_Y,
			scale: DRAWER_SCALE,
			filter: "blur(0rem)"
		},
		last: {
			opacity: 0,
			x: LAST_DRAWER_OFFSET_X,
			y: LAST_DRAWER_OFFSET_Y,
			scale: LAST_DRAWER_SCALE,
			filter: "blur(5rem)"
		},
		exit: { opacity: 0, x: 320, y: DRAWER_OFFSET_Y, DRAWER_SCALE, filter: "blur(5rem)" }
	};

	const drawerTransitionOptions = { type: "spring", duration: 5, bounce: 0 };

	const handleDrawerDragEnd = (_, info) => {
		const { offset, velocity } = info;

		// Close drawer if dragged significantly
		if (offset.x > 100 || velocity.x > 0.4) {
			closeDrawer(id);
		}
	};

	const handleDrawerClick = () => {
		reorderDrawer(id);
	};

	const handleDrawerClose = () => {
		closeDrawer(id);
	};

	const renderInteractiveDrawer = () => (
		<motion.div
			key={id}
			drag={IS_DRAWER_FIRST_IN_STACK ? "x" : false}
			dragConstraints={{ left: 0, right: 320 }}
			variants={drawerAnimationVariants}
			dragElastic={0.15}
			onDragEnd={handleDrawerDragEnd}
			initial={"initial"}
			dragSnapToOrigin
			animate={IS_DRAWER_LAST_IN_STACK ? "last" : "default"}
			exit={"exit"}
			transition={drawerTransitionOptions}
			style={{
				position: "fixed",
				top: "19vh",
				right: 0,
				width: config.drawerWidth,
				height: config.drawerHeight,
				backdropFilter: "blur(40px)",
				background: "rgba(255, 255, 255, 0.1)",
				zIndex: Number(1000) + index, // Stack each sidebar dynamically
				boxShadow:
					"rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
				padding: "20px",
				transformOrigin: "top right",
				borderRadius: "8px",
				marginRight: "24px"
			}}
			onClick={!IS_DRAWER_LAST_IN_STACK ? handleDrawerClick : undefined}
		>
			{children}
			<button onClickCapture={handleDrawerClose}>Close</button>
		</motion.div>
	);

	return createPortal(renderInteractiveDrawer(), document.getElementById("drawer-root")!);
};
