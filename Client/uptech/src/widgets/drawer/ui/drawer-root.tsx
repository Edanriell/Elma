import { type FC, useLayoutEffect } from "react";
import { AnimatePresence } from "motion/react";

import { useDrawerStore } from "../lib";

import { DrawerInstance } from "./drawer-instance";

export const DrawerRoot: FC = () => {
	const { drawers } = useDrawerStore();

	useLayoutEffect(() => {
		const drawerRoot = document.getElementById("drawer-root");

		// TODO
		// Needs more testing
		// Create drawer root only if it doesn't exist
		if (!drawerRoot) {
			const rootElement = document.createElement("div");
			rootElement.id = "drawer-root";
			rootElement.className = "relative";
			document.body.appendChild(rootElement);
		}
	}, []);

	return (
		<AnimatePresence>
			{drawers.length > 0 &&
				drawers.map(({ id, content }, index) => (
					<DrawerInstance key={id} id={id} index={index}>
						{content}
					</DrawerInstance>
				))}
		</AnimatePresence>
	);
};
