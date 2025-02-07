import { type FC, type ReactNode } from "react";
import Link from "next/link";

type NavigationLinkProps = {
	href: string;
	children: ReactNode;
};

export const NavigationLink: FC<NavigationLinkProps> = ({ href, children }) => {
	return (
		<li className="relative">
			<Link
				className="font-medium text-[16rem] leading-[125%] text-white-50 pl-[16rem] pr-[16rem] pt-[8rem] pb-[8rem] inline-block opacity-[0.6]"
				href={href}
			>
				{children}
			</Link>
		</li>
	);
};
