"use client";

import { type FC } from "react";

import { Drawer } from "@widgets/drawer/ui";
import { MobileNavigation } from "@widgets/mobile-navigation/ui";

import { StickyHeader } from "./sticky-header";
import { StaticHeader } from "./static-header";

// width="380rem" height="75%"

export const Header: FC = () => {
	return (
		<Drawer.Provider>
			<StaticHeader />
			<StickyHeader />
			<MobileNavigation className="fixed top-[80rem] left-0" />
			<Drawer max={3} width="96.5%" height="60%" position="bottom">
				<Drawer.Content>
					<div data-content-id="1x">Content 1</div>
					<div data-content-id="2x">Content 2</div>
					<div data-content-id="3x">Content 3</div>
				</Drawer.Content>
			</Drawer>
		</Drawer.Provider>
	);
};
