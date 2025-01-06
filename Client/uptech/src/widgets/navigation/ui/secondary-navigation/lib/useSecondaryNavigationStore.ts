import { useContext } from "react";

import { SecondaryNavigationContext, type SecondaryNavigationStore } from "../model";

export const useSecondaryNavigationStore = (): SecondaryNavigationStore => {
	const context = useContext(SecondaryNavigationContext);

	if (!context) {
		throw new Error("useDrawerStore must be used within a SecondaryNavigationProvider");
	}

	return context;
};
