import React, { FC, Fragment, ReactElement, useLayoutEffect } from "react";

import { DrawerProvider } from "../model";
import { useDrawerStore } from "../lib";

import { Root } from "./root";
import { Trigger } from "./trigger";
import { Content } from "./content";

// TODO
// Also fix issue with z-index when sorting !
// Implement orientation vertical - horizontal
// Implement position left - right - top - bottom

type DrawerComponents = {
	Provider: typeof DrawerProvider;
	Trigger: typeof Trigger;
	Content: typeof Content;
};

type DrawerProps = {
	max?: number;
	width?: string;
	height?: string;
	children: ReactElement<typeof Content>;
};

type Drawer = FC<DrawerProps> & DrawerComponents;

export const Drawer: Drawer = ({ max, width, height, children }) => {
	const { setConfig } = useDrawerStore();

	useLayoutEffect(() => {
		setConfig({
			maxDrawers: max ?? 3,
			drawerWidth: width ?? "380rem",
			drawerHeight: height ?? "75%"
		});
	}, []);

	React.Children.forEach(children, (child) => {
		if (!(React.isValidElement(child) && child.type === Content)) {
			throw new Error(
				`Invalid child component: ${child.type}. Expected child component Drawer.Content`
			);
		}
	});

	return (
		<Fragment>
			{children}
			<Root />
		</Fragment>
	);
};

Drawer.Provider = DrawerProvider;
Drawer.Trigger = Trigger;
Drawer.Content = Content;
