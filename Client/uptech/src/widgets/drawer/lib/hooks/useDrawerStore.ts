import { useContext } from "react";

import { DrawerContext, type DrawerStore } from "../../model";

export const useDrawerStore = (): DrawerStore => {
	const context = useContext(DrawerContext);

	if (!context) {
		throw new Error("useDrawerStore must be used within a SecondaryNavigationProvider");
	}

	return context;
};
