import { type FC, type ReactNode } from "react";

type FooterNavigationRootProps = {
	children: ReactNode;
};

export const FooterNavigationRoot: FC<FooterNavigationRootProps> = ({ children }) => {
	return (
		<nav className="relative flex flex-row gap-x-[40rem] gap-y-[40rem] flex-wrap mb-[40rem] tablet:basis-[auto] tablet:mb-[unset] desktop:gap-x-[80rem] desktop:gap-y-[80rem]">
			{children}
		</nav>
	);
};
