import React, { type FC, type ReactNode, useEffect } from "react";
import clsx from "clsx";

import { useSecondaryNavigationStore } from "../lib";

type SecondaryNavigationRootProps = {
	className: string;
	orientation: "horizontal" | "vertical";
	children: ReactNode;
};

export const SecondaryNavigationRoot: FC<SecondaryNavigationRootProps> = ({
	className,
	orientation,
	children
}) => {
	const { orientationRef } = useSecondaryNavigationStore();

	useEffect(() => {
		orientationRef.current = orientation;
	}, []);

	const secondaryNavigationRootClasses = clsx("h-[100%] " + className);

	return <nav className={secondaryNavigationRootClasses}>{children}</nav>;
};
