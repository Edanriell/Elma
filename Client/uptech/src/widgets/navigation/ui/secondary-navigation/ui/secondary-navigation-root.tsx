import React, { FC, ReactNode, useEffect } from "react";

import { useSecondaryNavigationStore } from "../lib";

type SecondaryNavigationRootProps = {
	orientation: "horizontal" | "vertical";
	children: ReactNode;
};

export const SecondaryNavigationRoot: FC<SecondaryNavigationRootProps> = ({
	orientation,
	children
}) => {
	const { orientationRef } = useSecondaryNavigationStore();

	useEffect(() => {
		orientationRef.current = orientation;
	}, []);

	return <nav className="hidden tablet:flex h-[100%]">{children}</nav>;
};
