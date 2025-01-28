import React, { type FC, type ReactElement } from "react";
import clsx from "clsx";

import { NavigationLink } from "./navigation-link";

import { useSecondaryNavigationStore } from "../lib/hooks";

type NavigationLinksListProps = {
	children: ReactElement<typeof NavigationLink>[];
};

export const NavigationLinksList: FC<NavigationLinksListProps> = ({ children }) => {
	const { orientationRef } = useSecondaryNavigationStore();

	React.Children.forEach(children, (child) => {
		if (!(React.isValidElement(child) && child.type === NavigationLink)) {
			throw new Error(`Invalid child component: ${child.type}. Expected NavigationLink.`);
		}
	});

	const navigationLinksListClasses = clsx(
		"flex items-center justify-center gap-x-[16rem] gap-y-[8rem]",
		{
			"flex-row": orientationRef.current === "horizontal",
			"flex-col": orientationRef.current === "vertical"
		}
	);

	return <ul className={navigationLinksListClasses}>{children}</ul>;
};
