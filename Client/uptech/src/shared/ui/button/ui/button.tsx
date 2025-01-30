"use client";

import { type FC, type ReactNode, useState } from "react";
import clsx from "clsx";
import { motion, MotionConfig, type Transition } from "motion/react";

import { generateClipPath } from "../lib/functions";

export type Orientation =
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
	primaryComponentClasses?: string;
	secondaryComponentClasses?: string;
	type?: "submit" | "button" | "reset";
	className?: string;
	orientation?: Orientation;
	transitionOptions?: Transition;
};

export const Button: FC<ButtonProps> = ({
	children,
	type = "button",
	primaryColor,
	secondaryColor,
	primaryComponentClasses,
	secondaryComponentClasses,
	className,
	orientation = "top-left-to-bottom-right",
	transitionOptions = { type: "spring", duration: 1, bounce: 0 }
}) => {
	const [isButtonHovered, setIsButtonHovered] = useState<boolean>(false);

	const buttonClasses = clsx(
		"max-h-[50rem] w-full h-[50rem] tablet:basis-[149rem] rounded-[44rem] font-medium text-[18rem] leading-[100%] capitalize cursor-pointer relative overflow-hidden",
		className
	);

	const primaryButtonComponentClasses = clsx(
		"rounded-[44rem] px-[32rem] py-[16rem] absolute inset-0 top-0 left-0 w-full max-h-[50rem] tablet:basis-[149rem] block",
		primaryComponentClasses,
		primaryColor
	);

	const secondaryButtonComponentClasses = clsx(
		"rounded-[44rem] px-[32rem] py-[16rem] absolute inset-0 top-0 left-0 w-full max-h-[50rem] tablet:basis-[149rem] block",
		secondaryComponentClasses,
		secondaryColor
	);

	const handleButtonHover = () => setIsButtonHovered((prev) => !prev);

	return (
		<MotionConfig transition={transitionOptions}>
			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				onMouseEnter={handleButtonHover}
				onMouseLeave={handleButtonHover}
				className={buttonClasses}
				type={type}
			>
				<span className={primaryButtonComponentClasses}>{children}</span>
				<motion.span
					initial={{
						clipPath: generateClipPath({ orientation, isButtonHovered: false })
					}}
					animate={{
						clipPath: generateClipPath({ orientation, isButtonHovered })
					}}
					className={secondaryButtonComponentClasses}
				>
					{children}
				</motion.span>
			</motion.button>
		</MotionConfig>
	);
};
