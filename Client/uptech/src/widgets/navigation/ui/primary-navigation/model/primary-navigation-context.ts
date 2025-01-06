import { createContext, type MutableRefObject } from "react";

export type PrimaryNavigationStore = {
	orientationRef: MutableRefObject<"horizontal" | "vertical" | null>;
	containerRef: MutableRefObject<HTMLDivElement | null>;
	activeLinkElementRef: MutableRefObject<HTMLAnchorElement | null>;
	activeLink: string;
	setActiveLink: (link: string) => void;
	initializeActiveLink: (pathname: string) => void;
};

export const PrimaryNavigationContext = createContext<PrimaryNavigationStore | undefined>(
	undefined
);
