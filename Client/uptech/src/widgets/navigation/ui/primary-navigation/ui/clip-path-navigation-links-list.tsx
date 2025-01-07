import React, { type FC, type ReactElement, useRef } from "react";
import { motion } from "motion/react";
import clsx from "clsx";

import { useClipPathNavigationLinksList, usePrimaryNavigationStore } from "../lib";

import { ClipPathNavigationLink } from "./clip-path-navigation-link";

type ClipPathNavigationLinksListProps = {
	children: ReactElement<typeof ClipPathNavigationLink>[];
};

export const ClipPathNavigationLinksList: FC<ClipPathNavigationLinksListProps> = ({ children }) => {
	const { orientationRef, globalClassesRef, activeLink, activeLinkElementRef } =
		usePrimaryNavigationStore();

	const containerRef = useRef(null);

	const { animationControls } = useClipPathNavigationLinksList(
		containerRef,
		activeLink,
		activeLinkElementRef,
		orientationRef.current!
	);

	React.Children.forEach(children, (child) => {
		if (!(React.isValidElement(child) && child.type === ClipPathNavigationLink)) {
			throw new Error(
				`Invalid child component: ${child.type}. Expected ClipPathNavigationLink.`
			);
		}
	});

	const clipPathNavigationLinksListClasses = clsx(
		"relative flex w-full justify-center bg-alizarin-crimson-600" + globalClassesRef!.current,
		{
			"flex-col": orientationRef!.current === "vertical",
			"flex-row": orientationRef!.current === "horizontal"
		}
	);

	return (
		<motion.div
			animate={animationControls}
			aria-hidden
			ref={containerRef}
			className="absolute z-[10] w-full overflow-hidden"
			style={{
				clipPath: "inset(0% 100%)"
			}}
		>
			<ul className={clipPathNavigationLinksListClasses}>{children}</ul>
		</motion.div>
	);
};
