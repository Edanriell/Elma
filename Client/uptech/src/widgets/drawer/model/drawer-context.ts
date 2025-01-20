import { createContext, type ReactNode } from "react";

export type Drawer = {
	id: string;
	content: ReactNode;
};

export type DrawerConfig = {
	maxDrawers: number | null;
	drawerWidth: string | null;
	drawerHeight: string | null;
	drawerPosition: "top" | "bottom" | "left" | "right" | null;
};

export type DrawerStore = {
	drawers: Array<Drawer> | [];
	config: DrawerConfig;
	openDrawer: (contentId: string) => void;
	closeDrawer: (id: string) => void;
	reorderDrawer: (id: string) => void;
	setDrawersContent: (content: Array<ReactNode>) => void;
	setConfig: (config: DrawerConfig) => void;
};

export const DrawerContext = createContext<DrawerStore | null>(null);
