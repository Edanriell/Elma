import { FC, type ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { usePrimaryNavigationStore } from "../lib";

type PrimaryNavigationStoreProps = {
	orientation: "horizontal" | "vertical";
	children: ReactNode;
};

export const PrimaryNavigationRoot: FC<PrimaryNavigationStoreProps> = ({
	orientation,
	children
}) => {
	const { initializeActiveLink, orientationRef } = usePrimaryNavigationStore();

	const pathName = usePathname();

	const primaryNavigationRootClasses = clsx("relative flex-col items-center w-fit", {
		hidden: orientation === "horizontal",
		"tablet:flex": orientation === "horizontal",
		flex: orientation === "vertical"
	});

	useEffect(() => {
		orientationRef.current = orientation;
	}, []);

	useEffect(() => {
		initializeActiveLink(pathName);
	}, [pathName]);

	return <nav className={primaryNavigationRootClasses}>{children}</nav>;
};
