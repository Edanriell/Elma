import { FC, useLayoutEffect } from "react";
import { AnimatePresence } from "motion/react";

import { useDrawerStore } from "../lib";
import { InteractiveDrawer } from "@widgets/drawer/ui/interactive";

export const Root: FC = () => {
	const { drawers } = useDrawerStore();

	useLayoutEffect(() => {
		const drawerRoot = document.getElementById("drawer-root");

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
					<InteractiveDrawer key={id} id={id} index={index}>
						{content}
					</InteractiveDrawer>
				))}
		</AnimatePresence>
	);
};
