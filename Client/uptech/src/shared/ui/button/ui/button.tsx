"use client";

import { type FC, type ReactNode, useEffect, useState } from "react";
import clsx from "clsx";
import { motion } from "motion/react";

type Orientation = "top-to-bottom" | "bottom-to-top" | "left-to-right" | "right-to-left";

type ButtonProps = {
	children: ReactNode;
	primaryColor: string;
	secondaryColor: string;
	type?: "submit" | "button" | "reset";
	className?: string;
	orientation?: Orientation;
};

// Grab the correct initial/final clip-paths for color2 based on orientation
const getClipPaths = (orientation: Orientation, isActive: boolean) => {
	// Each orientation’s “initial” clip path is fully hidden from one side,
	// while “final” reveals the entire element.
	const map = {
		"top-to-bottom": {
			initial: "inset(100% 0 0 0)", // hidden from top
			final: "inset(0% 0 0 0)" // fully visible
		},
		"bottom-to-top": {
			initial: "inset(0 0 100% 0)", // hidden from bottom
			final: "inset(0 0 0% 0)"
		},
		"left-to-right": {
			initial: "inset(0 100% 0 0)", // hidden from left
			final: "inset(0 0% 0 0)"
		},
		"right-to-left": {
			initial: "inset(0 0 0 100%)", // hidden from right
			final: "inset(0 0 0 0%)"
		}
	};

	const { initial, final } = map[orientation];
	return isActive ? final : initial;
};

export const Button: FC<ButtonProps> = ({
	children,
	type = "button",
	primaryColor,
	secondaryColor,
	className,
	orientation = "top-to-bottom" // default orientation
}) => {
	const [buttonState, setButtonState] = useState<boolean>(false);
	const [animationKey, setAnimationKey] = useState(0);

	// Styles for the first (primary) color
	const color1 = clsx(
		"rounded-[44rem] px-[32rem] py-[16rem] absolute inset-0 top-0 left-0 max-h-[50rem] w-full tablet:basis-[149rem] block",
		className,
		primaryColor
	);

	// Styles for the second (secondary) color (red in your example)
	const color2 = clsx(
		"rounded-[44rem] px-[32rem] py-[16rem] absolute inset-0 left-0 w-full max-h-[50rem] tablet:basis-[149rem] block",
		className,
		secondaryColor
	);

	const handleHover = () => {
		setButtonState((prev) => !prev);
		setAnimationKey((prev) => prev + 1);
	};

	useEffect(() => {
		console.log(buttonState);
	}, [buttonState]);

	return (
		<button
			type={type}
			onMouseEnter={handleHover}
			onMouseLeave={handleHover}
			className="max-h-[50rem] w-full h-[50rem] tablet:basis-[149rem] rounded-[44rem] font-medium text-[18rem] leading-[100%] capitalize text-white-50 pointer-cursor relative"
		>
			{/* COLOR 1 (primary) */}
			<motion.span
				initial={{ clipPath: "inset(0 0 100% 0)" }}
				animate={{ clipPath: buttonState ? "inset(0 0 -100% 0)" : "inset(0 0 0% 0)" }}
				transition={{ duration: 5 }}
				className={color1}
			>
				{children}
			</motion.span>

			{/* COLOR 2 (secondary) with orientation-based clip-path */}
			<motion.span
				initial={{ clipPath: getClipPaths(orientation, false) }}
				animate={{ clipPath: getClipPaths(orientation, buttonState) }}
				transition={{ duration: 5 }}
				className={color2}
			>
				{children}
			</motion.span>
		</button>
	);
};
