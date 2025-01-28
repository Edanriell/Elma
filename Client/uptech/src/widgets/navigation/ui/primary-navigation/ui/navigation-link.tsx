import { type FC, type ReactNode } from "react";
import Link from "next/link";

import { usePrimaryNavigationStore } from "../lib/hooks";

export type NavigationLinkProps = {
	name: string;
	href: string;
	icon?: ReactNode;
	id: string;
};

export const NavigationLink: FC<NavigationLinkProps> = ({ name, href, icon, id }) => {
	const { activeLink, setActiveLink, activeLinkElementRef } = usePrimaryNavigationStore();

	return (
		<li key={id + "-" + name.toLowerCase()}>
			<Link
				ref={activeLink === name ? activeLinkElementRef : null}
				data-link={name}
				onClick={() => {
					setActiveLink!(name);
				}}
				className="flex items-center gap-[8rem] rounded-full text-[14rem] font-medium leading-[100%] uppercase text-shark-950 px-[16rem] py-[10rem]"
				href={href}
				scroll={false}
			>
				{icon}
				{name}
			</Link>
		</li>
	);
};
