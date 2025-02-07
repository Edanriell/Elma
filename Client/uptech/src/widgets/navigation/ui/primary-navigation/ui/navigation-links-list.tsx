import { Children, type FC, isValidElement, type ReactElement } from "react";
import clsx from "clsx";

import { usePrimaryNavigationStore } from "../lib/hooks";

import { NavigationLink } from "./navigation-link";

type NavigationLinksListProps = {
	children: ReactElement<typeof NavigationLink>[];
};

export const NavigationLinksList: FC<NavigationLinksListProps> = ({ children }) => {
	const { orientationRef, globalClassesRef } = usePrimaryNavigationStore();

	Children.forEach(children, (child) => {
		if (!(isValidElement(child) && child.type === NavigationLink)) {
			const childType =
				isValidElement(child) && child.type ? child.type.toString() : typeof child;

			throw new Error(
				`<NavigationLinksList> only accepts children of type <NavigationLink>. ` +
					`Received an invalid child of type "${childType}". Please ensure that all children are valid <NavigationLink> components.`
			);
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
