import React, { type FC, type ReactElement } from "react";
import clsx from "clsx";

import { usePrimaryNavigationStore } from "../lib";

import { NavigationLink } from "./navigation-link";

type NavigationLinksListProps = {
	children: ReactElement<typeof NavigationLink>[];
};

export const NavigationLinksList: FC<NavigationLinksListProps> = ({ children }) => {
	const { orientationRef, globalClassesRef } = usePrimaryNavigationStore();

	React.Children.forEach(children, (child) => {
		if (!(React.isValidElement(child) && child.type === NavigationLink)) {
			throw new Error(`Invalid child component: ${child.type}. Expected NavigationLink.`);
		}
	});

	const navigationLinksListClasses = clsx(
		"relative flex w-full justify-center" + globalClassesRef!.current,
		{
			"flex-col": orientationRef!.current === "vertical",
			"flex-row": orientationRef!.current === "horizontal"
		}
	);

	return <ul className={navigationLinksListClasses}>{children}</ul>;
};
