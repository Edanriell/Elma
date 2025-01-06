import { type ReactNode, useRef, useState } from "react";

import { DrawerContext } from "./drawer-context";

export const DrawerProvider = ({ children }: { children: ReactNode }) => {
	const [drawers, setDrawers] = useState<Array<{ id: string; content: ReactNode }> | []>([]);
	const drawersContent = useRef<Array<ReactNode> | []>([]); // Use useRef for static content
	const [config, setConfig] = useState({
		maxDrawers: 3,
		drawerWidth: "320px",
		drawerHeight: "75%"
	});

	const openDrawer = (contentId: string) => {
		if (drawers.some((drawer) => drawer.id === contentId)) {
			console.log("Drawer already exists, skipping addition.");
			return;
		}

		const targetContent = drawersContent.current.find(
			(content) => content?.props["data-content-id"] === contentId
		);

		if (!targetContent) {
			console.error("No content found for contentId:", contentId);
			return;
		}

		console.log("Adding new drawer with contentId:", contentId);
		setDrawers((prev) => [...prev, { id: contentId, content: targetContent }]);
	};

	const closeDrawer = (id: string) => {
		setDrawers((prev) => prev.filter((drawer) => drawer.id !== id));
	};

	const reorderDrawer = (id: string) => {
		setDrawers((prev) => {
			const drawerToReorder = prev.find((drawer) => drawer.id === id);
			if (!drawerToReorder) return prev;

			const otherDrawers = prev.filter((drawer) => drawer.id !== id);
			return [...otherDrawers, drawerToReorder];
		});
	};

	const setDrawersContent = (content: ReactNode[]) => {
		drawersContent.current = content;
	};

	return (
		<DrawerContext.Provider
			value={{
				drawers,
				config,
				openDrawer,
				closeDrawer,
				reorderDrawer,
				setConfig,
				setDrawersContent
			}}
		>
			{children}
		</DrawerContext.Provider>
	);
};
