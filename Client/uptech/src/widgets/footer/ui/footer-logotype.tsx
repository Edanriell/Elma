"use client";

import React, { type FC, useState } from "react";
import { motion, MotionConfig } from "motion/react";
import Link from "next/link";

import { Logotype } from "@shared/ui/logotype/ui";

export const FooterLogotype: FC = () => {
	const [isLinkActive, setIsLinkActive] = useState<boolean>(false);

	return (
		<MotionConfig transition={{ duration: 0.25, type: "spring", bounce: 0 }}>
			<Link
				className="tablet:mx-[auto] tablet:flex tablet:flex-row tablet:justify-center"
				href="/"
				onMouseEnter={() => setIsLinkActive(true)}
				onMouseLeave={() => setIsLinkActive(false)}
				onFocus={() => setIsLinkActive(true)}
				onBlur={() => setIsLinkActive(false)}
				onTouchStart={() => setIsLinkActive(true)}
				onTouchEnd={() => setIsLinkActive(false)}
			>
				<motion.span
					animate={{ color: isLinkActive ? "#ffffff" : "#3d3d3d" }}
					className="text-white-900 w-[368rem] h-[89rem] tablet:w-[1281rem] tablet:h-[312rem]"
				>
					<Logotype color="universal" size="large" />
				</motion.span>
			</Link>
		</MotionConfig>
	);
};
