import { useContext } from "react";

import { PrimaryNavigationContext, type PrimaryNavigationStore } from "../../model";

export const usePrimaryNavigationStore = (): PrimaryNavigationStore => {
	const context = useContext(PrimaryNavigationContext);

	if (!context) {
		throw new Error("useDrawerStore must be used within a SecondaryNavigationProvider");
	}

	return context;
};
