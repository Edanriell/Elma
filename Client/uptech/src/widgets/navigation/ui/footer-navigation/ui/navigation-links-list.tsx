import { type FC, isValidElement, type ReactElement } from "react";

import { NavigationLink } from "./navigation-link";

type NavigationLinksListProps = {
	children: ReactElement;
};

export const NavigationLinksList: FC<NavigationLinksListProps> = ({ children }) => {
	if (
		!(
			Array.isArray(children) &&
			children.every((child) => isValidElement(child) && child.type === NavigationLink)
		)
	) {
		throw new Error(
			`NavigationLinksList must have one or more children of type NavigationLink.`
		);
	}

	return <ul className="flex flex-col ml-[-16rem]">{children}</ul>;
};
