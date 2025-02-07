import { type FC, isValidElement, type ReactElement } from "react";

import { NavigationLink } from "./navigation-link";

type NavigationLinksListProps = {
	children: ReactElement<typeof NavigationLink> | ReactElement<typeof NavigationLink>[];
};

export const NavigationLinksList: FC<NavigationLinksListProps> = ({ children }) => {
	if (
		!(
			(isValidElement(children) && children.type === NavigationLink) || // Single child case
			(Array.isArray(children) && // Multiple children case
				children.every((child) => isValidElement(child) && child.type === NavigationLink))
		)
	) {
		throw new Error(
			`<NavigationLinksList> expects one or more children of type <NavigationLink>. ` +
				`You might have passed an invalid child, no children, or mixed children. ` +
				`Ensure that all children are <NavigationLink> components.`
		);
	}

	return <ul className="flex flex-col ml-[-16rem]">{children}</ul>;
};
