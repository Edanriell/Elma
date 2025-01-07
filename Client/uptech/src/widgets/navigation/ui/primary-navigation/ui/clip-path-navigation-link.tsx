import { type FC, type ReactNode } from "react";
import Link from "next/link";

import { usePrimaryNavigationStore } from "../lib";

type ClipPathNavigationLinkProps = {
	name: string;
	href: string;
	icon?: ReactNode;
	id: string;
};

export const ClipPathNavigationLink: FC<ClipPathNavigationLinkProps> = ({
	name,
	href,
	icon,
	id
}) => {
	const { activeLink, setActiveLink } = usePrimaryNavigationStore();

	return (
		<li key={id + "-" + name.toLowerCase()}>
			<Link
				href={href}
				scroll={false}
				data-tab={name}
				onClick={() => {
					setActiveLink!(name);
				}}
				className={`flex items-center gap-[8rem] rounded-full text-[14rem] font-medium leading-[100%] uppercase text-white-50 px-[16rem] py-[10rem] ${
					activeLink === name ? "bg-alizarin-crimson-600" : ""
				}`}
				tabIndex={-1}
			>
				{icon}
				{name}
			</Link>
		</li>
	);
};
