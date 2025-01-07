import { type ReactNode, useRef } from "react";

import { SecondaryNavigationContext } from "./secondary-navigation-context";

export const SecondaryNavigationProvider = ({ children }: { children: ReactNode }) => {
	const orientationRef = useRef<"horizontal" | "vertical">(null);

	return (
		<SecondaryNavigationContext.Provider
			value={{
				orientationRef
			}}
		>
			{children}
		</SecondaryNavigationContext.Provider>
	);
};
