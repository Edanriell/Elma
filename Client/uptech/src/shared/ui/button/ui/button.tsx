"use client";

import { type FC, type ReactNode, useState } from "react";
import clsx from "clsx";
import { motion, MotionConfig } from "motion/react";

type Orientation =
	| "top-to-bottom"
	| "bottom-to-top"
	| "left-to-right"
	| "right-to-left"
	| "top-left-to-bottom-right"
	| "bottom-right-to-top-left"
	| "top-right-to-bottom-left"
	| "bottom-left-to-top-right";

type ButtonProps = {
	children: ReactNode;
	primaryColor: string;
	secondaryColor: string;
	type?: "submit" | "button" | "reset";
	className?: string;
	orientation?: Orientation;
};

const generateClipPath = (orientation: Orientation, isActive: boolean) => {
	const map = {
		"top-to-bottom": {
			initial: "inset(0 0 100% 0)",
			final: "inset(0 0 0 0%)"
		},
		"bottom-to-top": {
			initial: "inset(100% 0 0 0)",
			final: "inset(0% 0 0 0)"
		},
		"left-to-right": {
			initial: "inset(0 100% 0 0)",
			final: "inset(0 0% 0 0)"
		},
		"right-to-left": {
			initial: "inset(0 0 0 100%)",
			final: "inset(0 0 0 0%)"
		},
		"top-left-to-bottom-right": {
			initial: "polygon(0% 0%, 0% 0%, 0% 100%, -50% 100%)",
			final: "polygon(125% 0%, 0% 0%, 0% 100%, 100% 100%)"
		},
		"bottom-right-to-top-left": {
			initial: "polygon(100% 100%, 100% 100%, 100% 0%, 150% 0%)",
			final: "polygon(-25% 100%, 100% 100%, 100% 0%, 0% 0%)"
		},
		"top-right-to-bottom-left": {
			initial: "polygon(100% 0%, 100% 0%, 100% 100%, 150% 100%)",
			final: "polygon(-100% 0%, 100% 0%, 100% 100%, -25% 100%)"
		},
		"bottom-left-to-top-right": {
			initial: "polygon(0% 100%, 0% 100%, 0% 0%, -50% 0%)",
			final: "polygon(125% 100%, 0% 100%, 0% 0%, 100% 0%)"
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
	orientation = "top-left-to-bottom-right"
}) => {
	const [isButtonHovered, setIsButtonHovered] = useState<boolean>(false);

	const primaryButtonSpanClasses = clsx(
		"text-white-50 rounded-[44rem] px-[32rem] py-[16rem] absolute inset-0 top-0 left-0 max-h-[50rem] w-full tablet:basis-[149rem] block",
		className,
		primaryColor
	);

	const secondaryButtonSpanClasses = clsx(
		"text-shark-950 rounded-[44rem] px-[32rem] py-[16rem] absolute inset-0 left-0 w-full max-h-[50rem] tablet:basis-[149rem] block",
		className,
		secondaryColor
	);

	const handleButtonHover = () => setIsButtonHovered((prev) => !prev);

	return (
		<MotionConfig transition={{ type: "spring", duration: 1, bounce: 0 }}>
			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				type={type}
				onMouseEnter={handleButtonHover}
				onMouseLeave={handleButtonHover}
				className="max-h-[50rem] w-full h-[50rem] tablet:basis-[149rem] rounded-[44rem] font-medium text-[18rem] leading-[100%] capitalize cursor-pointer relative overflow-hidden"
			>
				<span className={primaryButtonSpanClasses}>{children}</span>
				<motion.span
					initial={{
						clipPath: generateClipPath(orientation, false)
					}}
					animate={{
						clipPath: generateClipPath(orientation, isButtonHovered)
					}}
					className={secondaryButtonSpanClasses}
				>
					{children}
				</motion.span>
			</motion.button>
		</MotionConfig>
	);
};
