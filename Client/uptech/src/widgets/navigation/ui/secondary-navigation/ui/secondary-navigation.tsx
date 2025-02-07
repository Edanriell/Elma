import { Children, type FC, isValidElement, type JSX, type ReactElement } from "react";

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
	Children.forEach(children, (child) => {
		if (!(isValidElement(child) && child.type === NavigationLinksList)) {
			const childType =
				isValidElement(child) && child.type ? child.type.toString() : typeof child;

			throw new Error(
				`<SecondaryNavigation> requires its child to be of type <NavigationLinksList>. ` +
					`Received an invalid child of type "${childType}". ` +
					`Please ensure that the direct child of <SecondaryNavigation> is a valid <NavigationLinksList> component.`
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
