import { createContext, type MutableRefObject } from "react";

export type SecondaryNavigationStore = {
	orientationRef: MutableRefObject<"horizontal" | "vertical" | null>;
};

export const SecondaryNavigationContext = createContext<SecondaryNavigationStore | undefined>(
	undefined
);
