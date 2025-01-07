import React, { type FC, type JSX, type ReactElement } from "react";

import { SecondaryNavigationProvider } from "../model";

import { SecondaryNavigationRoot } from "./secondary-navigation-root";
import { NavigationLinksList } from "./navigation-links-list";
import { NavigationLink } from "./navigation-link";

export type SecondaryNavigationLink = {
	name: string;
	Icon: () => JSX.Element;
	contentId?: string;
};

type SecondaryNavigationComponents = {
	NavigationLinksList: typeof NavigationLinksList;
	NavigationLink: typeof NavigationLink;
};

type SecondaryNavigationProps = {
	className?: string;
	orientation?: "horizontal" | "vertical";
	children: ReactElement<typeof NavigationLinksList>;
};

type SecondaryNavigation = FC<SecondaryNavigationProps> & SecondaryNavigationComponents;

export const SecondaryNavigation: SecondaryNavigation = ({
	className = "",
	orientation = "horizontal",
	children
}) => {
	React.Children.forEach(children, (child) => {
		if (!(React.isValidElement(child) && child.type === NavigationLinksList)) {
			throw new Error(
				`Invalid child component: ${child.type}. Expected NavigationLinksList.`
			);
		}
	});

	return (
		<SecondaryNavigationProvider>
			<SecondaryNavigationRoot className={className} orientation={orientation}>
				{children}
			</SecondaryNavigationRoot>
		</SecondaryNavigationProvider>
	);
};

SecondaryNavigation.NavigationLinksList = NavigationLinksList;
SecondaryNavigation.NavigationLink = NavigationLink;
