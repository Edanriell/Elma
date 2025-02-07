"use client";

import { type FC, type ReactNode, useState } from "react";
import Link from "next/link";
import { motion, MotionConfig } from "motion/react";

type NavigationLinkProps = {
	href: string;
	children: ReactNode;
};

const variants1 = {
	initial: {
		rotateX: 0,
		y: 0,
		translateZ: 0,
		opacity: 1,
		filter: "blur(0rem)"
	},
	hoverIn: {
		rotateX: [0, 60],
		y: [0, -14],
		translateZ: [0, -300],
		opacity: 0,
		filter: "blur(4rem)"
	},
	hoverOut: {
		rotateX: [-60, 0],
		y: [14, 0],
		translateZ: [-300, 0],
		opacity: 1,
		filter: "blur(0rem)"
	}
};

const variants2 = {
	initial: {
		rotateX: 0,
		y: 0,
		translateZ: 0,
		opacity: 0,
		filter: "blur(4rem)"
	},
	hoverIn: {
		y: [0, -28],
		rotateX: [-60, 0],
		translateZ: [-300, 0],
		opacity: 1,
		filter: "blur(0rem)"
	},
	hoverOut: {
		rotateX: [0, -60],
		y: [-28, -56],
		translateZ: [0, -300],
		opacity: 0,
		filter: "blur(4rem)"
	}
};

export const NavigationLink: FC<NavigationLinkProps> = ({ href, children }) => {
	const [isHovered, setIsHovered] = useState<"initial" | "hovered" | "unhovered">("initial");

	return (
		<MotionConfig transition={{ duration: 1, type: "spring", bounce: 0 }}>
			<motion.li
				whileHover={{ opacity: 1 }}
				className="relative opacity-[0.6]"
				onMouseEnter={() => setIsHovered("hovered")}
				onMouseLeave={() => setIsHovered("unhovered")}
			>
				<Link
					className="h-[36rem] grid grid-rows-[repeat(2, auto)] gap-y-[8rem] overflow-hidden font-medium text-[16rem] leading-[125%] pl-[16rem] pr-[16rem] pt-[8rem] pb-[8rem]"
					href={href}
					style={{ perspective: "1200rem", transformStyle: "preserve-3d" }}
				>
					<motion.span
						variants={variants1}
						initial={"initial"}
						animate={
							isHovered === "hovered"
								? "hoverIn"
								: isHovered === "unhovered"
									? "hoverOut"
									: "initial"
						}
						className="text-white-50"
					>
						{children}
					</motion.span>
					<motion.span
						variants={variants2}
						initial={"initial"}
						animate={
							isHovered === "hovered"
								? "hoverIn"
								: isHovered === "unhovered"
									? "hoverOut"
									: "initial"
						}
						className="text-alizarin-crimson-600"
					>
						{children}
					</motion.span>
				</Link>
			</motion.li>
		</MotionConfig>
	);
};
