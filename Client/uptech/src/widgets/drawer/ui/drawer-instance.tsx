import { type FC, type ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, type PanInfo } from "motion/react";
import clsx from "clsx";

import { removeLettersFromString } from "@shared/lib/functions";

import { getDragAxis, getDragConstraints } from "../lib/functions";
import { useDrawerStore } from "../lib/hooks";

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
	const IS_DRAWER_LAST_IN_STACK = reversedIndex > config.maxDrawers! - 1;

	const initialAnimationVariants = {
		right: {
			opacity: 0,
			x: Number(removeLettersFromString(config.drawerWidth!)),
			y: 0,
			scale: 1,
			filter: "blur(5rem)"
		},
		left: {
			opacity: 0,
			x: -Number(removeLettersFromString(config.drawerWidth!)),
			y: 0,
			scale: 1,
			filter: "blur(5rem)"
		},
		bottom: {
			opacity: 0,
			x: 0,
			y: `${config.drawerHeight}`,
			scale: 1,
			filter: "blur(5rem)"
		},
		top: {
			opacity: 0,
			x: 0,
			y: `-${config.drawerHeight}`,
			scale: 1,
			filter: "blur(5rem)"
		}
	};

	const defaultAnimationVariants = {
		right: {
			opacity: 1,
			x: -70 * reversedIndex,
			y: 30 * reversedIndex,
			scale: 1.0 - reversedIndex / 10,
			filter: "blur(0rem)"
		},
		left: {
			opacity: 1,
			x: 70 * reversedIndex,
			y: 30 * reversedIndex,
			scale: 1.0 - reversedIndex / 10,
			filter: "blur(0rem)"
		},
		bottom: {
			opacity: 1,
			x: 0,
			y: -70 * reversedIndex,
			scale: 1.0 - reversedIndex / 10,
			filter: "blur(0rem)"
		},
		top: {
			opacity: 1,
			x: 0,
			y: 70 * reversedIndex,
			scale: 1.0 - reversedIndex / 10,
			filter: "blur(0rem)"
		}
	};

	const lastAnimationVariants = {
		right: {
			opacity: 0,
			x: -70 * config.maxDrawers!,
			y: 30 * config.maxDrawers!,
			scale: 1.0 - config.maxDrawers! / 13,
			filter: "blur(5rem)"
		},
		left: {
			opacity: 0,
			x: 70 * config.maxDrawers!,
			y: 30 * config.maxDrawers!,
			scale: 1.0 - config.maxDrawers! / 13,
			filter: "blur(5rem)"
		},
		bottom: {
			opacity: 0,
			x: 0,
			y: -70 * config.maxDrawers!,
			scale: 1.0 - config.maxDrawers! / 13,
			filter: "blur(5rem)"
		},
		top: {
			opacity: 0,
			x: 0,
			y: 70 * config.maxDrawers!,
			scale: 1.0 - config.maxDrawers! / 13,
			filter: "blur(5rem)"
		}
	};

	const exitAnimationVariants = {
		right: {
			opacity: 0,
			// x: config.drawerPosition === "left" ? config.drawerWidth : config.drawerWidth,
			x: 380,
			y: 30 * reversedIndex,
			scale: 1.0 - reversedIndex / 10,
			filter: "blur(5rem)"
		},
		left: {
			opacity: 0,
			// x: config.drawerPosition === "left" ? config.drawerWidth : config.drawerWidth,
			x: -380,
			y: 30 * reversedIndex,
			scale: 1.0 - reversedIndex / 10,
			filter: "blur(5rem)"
		},
		bottom: {
			opacity: 0,
			x: 0,
			y: `${config.drawerHeight}`,
			scale: 1.0 - reversedIndex / 10,
			filter: "blur(5rem)"
		},
		top: {
			opacity: 0,
			x: 0,
			y: `-${config.drawerHeight}`,
			scale: 1.0 - reversedIndex / 10,
			filter: "blur(5rem)"
		}
	};

	const hoverAnimationVariants = {
		right: {
			x: -70 * reversedIndex - 20 * reversedIndex
		},
		left: {
			x: 70 * reversedIndex + 20 * reversedIndex
		},
		bottom: {
			y: -70 * reversedIndex - 20 * reversedIndex
		},
		top: {
			y: 70 * reversedIndex + 20 * reversedIndex
		}
	};

	const drawerAnimationVariants = {
		initial: initialAnimationVariants[config.drawerPosition!],
		default: defaultAnimationVariants[config.drawerPosition!],
		last: lastAnimationVariants[config.drawerPosition!],
		exit: exitAnimationVariants[config.drawerPosition!],
		hover: hoverAnimationVariants[config.drawerPosition!]
	};

	const handleDrawerDragEnd = (event: Event, info: PanInfo) => {
		const { offset, velocity } = info;

		switch (config.drawerPosition) {
			case "left": {
				if (offset.x < 100 || velocity.x < 0.4) {
					closeDrawer(id);
				}
			}
			case "right": {
				if (offset.x > 100 || velocity.x > 0.4) {
					closeDrawer(id);
				}
			}
			case "bottom": {
				if (offset.y > 150 || velocity.y > 400) {
					closeDrawer(id);
				}
			}
			case "top": {
				if (offset.y < -150 || velocity.y < -400) {
					closeDrawer(id);
				}
			}
		}
	};

	const handleDrawerClick = () => {
		reorderDrawer(id);
	};

	const handleDrawerClose = () => {
		closeDrawer(id);
	};

	const interactiveDrawerClasses = clsx(
		"fixed rounded-[8rem] bg-[var(--white-transparent-10)] backdrop-blur-[40rem] p-[20rem] shadow-soft",
		{
			"top-[14%] right-[0] origin-top-right mr-[24rem]": config.drawerPosition === "right",
			"top-[14%] left-[0] origin-top-left ml-[24rem]": config.drawerPosition === "left",
			"bottom-[0] left-[0] origin-bottom m-[16rem]": config.drawerPosition === "bottom",
			"top-[0] left-[0] origin-top m-[16rem]": config.drawerPosition === "top"
		}
	);

	const renderInteractiveDrawer = () => (
		<motion.aside
			key={id}
			drag={getDragAxis({
				drawerPosition: config.drawerPosition!,
				isFirstInStack: IS_DRAWER_FIRST_IN_STACK
			})}
			dragConstraints={
				getDragConstraints({
					drawerPosition: config.drawerPosition!,
					drawerWidth: config.drawerWidth!,
					drawerHeight: config.drawerHeight!
				}) as never
			}
			dragElastic={0.15}
			dragSnapToOrigin
			onDragEnd={handleDrawerDragEnd}
			variants={drawerAnimationVariants}
			initial={"initial"}
			whileHover={IS_DRAWER_FIRST_IN_STACK ? "" : "hover"}
			exit={"exit"}
			animate={IS_DRAWER_LAST_IN_STACK ? "last" : "default"}
			transition={{ type: "spring", duration: 0.6, bounce: 0 }}
			className={interactiveDrawerClasses}
			style={{
				width: config.drawerWidth!,
				height: config.drawerHeight!,
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
