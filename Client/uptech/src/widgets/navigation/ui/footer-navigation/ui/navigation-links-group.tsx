import { type FC, isValidElement, type ReactElement } from "react";

import { NavigationLinksList } from "./navigation-links-list";

type NavigationLinksGroupProps = {
	name: string;
	children: ReactElement;
};

export const NavigationLinksGroup: FC<NavigationLinksGroupProps> = ({ name, children }) => {
	if (isValidElement(children) || children.type !== NavigationLinksList) {
		throw new Error(`NavigationLinksGroup must have exactly one child: NavigationLinksList.`);
	}

	return (
		<div className="flex flex-col gap-y-[24rem] flex-grow-0 flex-shrink-0">
			<header className="relative">
				<h3 className="font-medium text-[20rem] leading-[125%] text-[#FFFFFFE5]">{name}</h3>
			</header>
			{children}
		</div>
	);
};
