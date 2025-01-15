import { type FC, type ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, type PanInfo } from "motion/react";

import { useDrawerStore } from "../lib";

type DrawerInstanceProps = {
	id: string;
	index: number;
	reversedIndex: number;
	children: ReactNode;
};

export const DrawerInstance: FC<DrawerInstanceProps> = ({ id, index, reversedIndex, children }) => {
	const { config, closeDrawer, reorderDrawer } = useDrawerStore();

	useEffect(() => {
		const handleEscapeKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				closeDrawer(id);
			}
		};

		window.addEventListener("keydown", handleEscapeKeyDown);

		return () => window.removeEventListener("keydown", handleEscapeKeyDown);
	}, [closeDrawer]);

	const IS_DRAWER_FIRST_IN_STACK = reversedIndex === 0;
	const IS_DRAWER_LAST_IN_STACK = reversedIndex > config.maxDrawers - 1;

	const DRAWER_SCALE = 1.0 - reversedIndex / 10;
	const DRAWER_OFFSET_X = -70 * reversedIndex;
	const DRAWER_OFFSET_Y = 30 * reversedIndex;

	const LAST_DRAWER_SCALE = 1.0 - config.maxDrawers / 13;
	const LAST_DRAWER_OFFSET_X = -70 * config.maxDrawers;
	const LAST_DRAWER_OFFSET_Y = 30 * config.maxDrawers;

	const drawerAnimationVariants = {
		initial: {
			opacity: 0,
			x: Number(config.drawerWidth.replace(/[a-zA-Z]/g, "")),
			y: 0,
			scale: 1,
			filter: "blur(5rem)"
		},
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
		exit: {
			opacity: 0,
			x: config.drawerWidth,
			y: DRAWER_OFFSET_Y,
			DRAWER_SCALE,
			filter: "blur(5rem)"
		},
		hover: {
			x: DRAWER_OFFSET_X - 20 * reversedIndex
		}
	};

	const handleDrawerDragEnd = (event: Event, info: PanInfo) => {
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
		<motion.aside
			key={id}
			drag={IS_DRAWER_FIRST_IN_STACK ? "x" : ""}
			dragConstraints={{ left: 10, right: config.drawerWidth }}
			dragElastic={0.15}
			dragSnapToOrigin
			onDragEnd={handleDrawerDragEnd}
			variants={drawerAnimationVariants}
			initial={"initial"}
			whileHover={IS_DRAWER_FIRST_IN_STACK ? "" : "hover"}
			exit={"exit"}
			animate={IS_DRAWER_LAST_IN_STACK ? "last" : "default"}
			transition={{ type: "spring", duration: 0.6, bounce: 0 }}
			className="fixed top-[19%] right-[0] rounded-[8rem] bg-[var(--white-transparent-10)] backdrop-blur-[40rem] p-[20rem] mr-[24rem] shadow-soft origin-top-right"
			style={{
				width: config.drawerWidth,
				height: config.drawerHeight,
				zIndex: index, // Stack each sidebar dynamically
				cursor: IS_DRAWER_FIRST_IN_STACK ? "default" : "pointer"
			}}
			onClick={!IS_DRAWER_LAST_IN_STACK ? handleDrawerClick : undefined}
		>
			{children}
			<button onClick={handleDrawerClose}>Close</button>
		</motion.aside>
	);

	return createPortal(renderInteractiveDrawer(), document.getElementById("drawer-root")!);
};
