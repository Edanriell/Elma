import { type FC, isValidElement, type ReactElement } from "react";

import { FooterNavigationRoot } from "./footer-navigation-root";
import { NavigationLinksGroup } from "./navigation-links-group";
import { NavigationLinksList } from "./navigation-links-list";
import { NavigationLink } from "./navigation-link";

export type FooterNavigationLink = {
	name: string;
	href: string;
};

type FooterNavigationComponents = {
	NavigationLinksGroup: typeof NavigationLinksGroup;
	NavigationLinksList: typeof NavigationLinksList;
	NavigationLink: typeof NavigationLink;
};

type FooterNavigationProps = {
	children:
		| ReactElement<typeof NavigationLinksGroup>
		| ReactElement<typeof NavigationLinksGroup>[];
};

type FooterNavigation = FC<FooterNavigationProps> & FooterNavigationComponents;

export const FooterNavigation: FooterNavigation = ({ children }) => {
	if (
		!(
			(isValidElement(children) && children.type === NavigationLinksGroup) || // Single child case
			(Array.isArray(children) && // Multiple children case
				children.every(
					(child) => isValidElement(child) && child.type === NavigationLinksGroup
				))
		)
	) {
		throw new Error(
			`<FooterNavigation> expects one or more children of type <NavigationLinksGroup>. ` +
				`You might have passed an invalid child or no children at all. ` +
				`Make sure to use <NavigationLinksGroup> components as direct children.`
		);
	}

	return <FooterNavigationRoot>{children}</FooterNavigationRoot>;
};

FooterNavigation.NavigationLinksGroup = NavigationLinksGroup;
FooterNavigation.NavigationLinksList = NavigationLinksList;
FooterNavigation.NavigationLink = NavigationLink;
