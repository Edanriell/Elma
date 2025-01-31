import { type FC, isValidElement, type ReactElement } from "react";

import { FooterNavigationRoot } from "./footer-navigation-root";
import { NavigationLinksGroup } from "./navigation-links-group";
import { NavigationLinksList } from "./navigation-links-list";
import { NavigationLink } from "./navigation-link";

export type FooterNavigationLink = {
	name: string;
	href: string;
	index: number;
};

type FooterNavigationComponents = {
	NavigationLinksGroup: typeof NavigationLinksGroup;
	NavigationLinksList: typeof NavigationLinksList;
	NavigationLink: typeof NavigationLink;
};

type FooterNavigationProps = {
	children: ReactElement<
		typeof NavigationLinksGroup & {
			children: ReactElement<
				typeof NavigationLinksList & { children: ReactElement<typeof NavigationLink>[] }
			>;
		}
	>;
};

type FooterNavigation = FC<FooterNavigationProps> & FooterNavigationComponents;

export const FooterNavigation: FooterNavigation = ({ children }) => {
	if (
		!(
			Array.isArray(children) &&
			children.every((child) => isValidElement(child) && child.type === NavigationLinksGroup)
		)
	) {
		throw new Error(
			`FooterNavigation must have one or more children of type NavigationLinksGroup.`
		);
	}

	return <FooterNavigationRoot>{children}</FooterNavigationRoot>;
};

FooterNavigation.NavigationLinksGroup = NavigationLinksGroup;
FooterNavigation.NavigationLinksList = NavigationLinksList;
FooterNavigation.NavigationLink = NavigationLink;

// TODO
// TEST FooterNavigation Checks
// ALSO CHECK REST COMPONENTS WHERE LinksList
// WE SHOULD CHECK FOR ARRAY OF ELEMS
