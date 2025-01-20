import { type FC, useLayoutEffect } from "react";
import { AnimatePresence } from "motion/react";

import { useDrawerStore } from "../lib/hooks";

import { DrawerInstance } from "./drawer-instance";

export const DrawerRoot: FC = () => {
	const { drawers } = useDrawerStore();

	useLayoutEffect(() => {
		const drawerRoot = document.getElementById("drawer-root");

		if (!drawerRoot) {
			const rootElement = document.createElement("div");
			rootElement.id = "drawer-root";
			document.body.appendChild(rootElement);
		}
	}, []);

	return (
		<AnimatePresence mode="popLayout">
			{drawers.length > 0 &&
				drawers.map(({ id, content }, index) => {
					return (
						<DrawerInstance
							key={id}
							id={id}
							index={index}
							reversedIndex={drawers.length - 1 - index}
						>
							{content}
						</DrawerInstance>
					);
				})}
		</AnimatePresence>
	);
};
