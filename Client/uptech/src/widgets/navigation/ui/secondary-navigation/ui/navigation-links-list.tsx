import { Children, type FC, isValidElement, type ReactElement } from "react";
import clsx from "clsx";

import { NavigationLink } from "./navigation-link";

import { useSecondaryNavigationStore } from "../lib/hooks";

type NavigationLinksListProps = {
	children: ReactElement<typeof NavigationLink>[];
};

export const NavigationLinksList: FC<NavigationLinksListProps> = ({ children }) => {
	const { orientationRef } = useSecondaryNavigationStore();

	Children.forEach(children, (child) => {
		if (!(isValidElement(child) && child.type === NavigationLink)) {
			const childType =
				isValidElement(child) && child.type ? child.type.toString() : typeof child;

			throw new Error(
				`<NavigationLinksList> only accepts children of type <NavigationLink>. ` +
					`Received an invalid child of type "${childType}". ` +
					`Please ensure that all children passed to <NavigationLinksList> are valid <NavigationLink> components.`
			);
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
