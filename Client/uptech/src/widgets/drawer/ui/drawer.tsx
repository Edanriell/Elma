import React, { type FC, Fragment, type ReactElement, useLayoutEffect } from "react";

import { DrawerProvider } from "../model";
import { useDrawerStore } from "../lib/hooks";

import { DrawerRoot } from "./drawer-root";
import { DrawerTrigger } from "./drawer-trigger";
import { DrawerContent } from "./drawer-content";

type DrawerComponents = {
	Provider: typeof DrawerProvider;
	Trigger: typeof DrawerTrigger;
	Content: typeof DrawerContent;
};

type DrawerProps = {
	max?: number;
	width?: string;
	height?: string;
	position?: "top" | "bottom" | "left" | "right";
	children: ReactElement<typeof DrawerContent>;
};

type Drawer = FC<DrawerProps> & DrawerComponents;

export const Drawer: Drawer = ({
	max = 3,
	width = "380rem",
	height = "75%",
	position = "right",
	children
}) => {
	const { setConfig } = useDrawerStore();

	useLayoutEffect(() => {
		setConfig({
			maxDrawers: max,
			drawerWidth: width,
			drawerHeight: height,
			drawerPosition: position
		});
	}, [max, width, height, position]);

	React.Children.forEach(children, (child) => {
		if (!(React.isValidElement(child) && child.type === DrawerContent)) {
			throw new Error(
				`Invalid child component: ${child.type}. Expected child component Drawer.Content`
			);
		}
	});

	return (
		<Fragment>
			{children}
			<DrawerRoot />
		</Fragment>
	);
};

Drawer.Provider = DrawerProvider;
Drawer.Trigger = DrawerTrigger;
Drawer.Content = DrawerContent;
