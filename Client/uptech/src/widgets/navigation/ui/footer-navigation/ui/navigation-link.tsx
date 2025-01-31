import { type FC } from "react";
import Link from "next/link";

type NavigationLinkProps = {
	name: string;
	href: string;
	index: number;
};

export const NavigationLink: FC<NavigationLinkProps> = ({ name, href, index }) => {
	return (
		<li key={index + "-" + name.split(" ").join(" ").toLowerCase()} className="relative">
			<Link
				className="font-medium text-[16rem] leading-[125%] text-white-50 pl-[16rem] pr-[16rem] pt-[8rem] pb-[8rem] inline-block opacity-[0.6]"
				href={href}
			>
				{name}
			</Link>
		</li>
	);
};
