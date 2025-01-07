import { type ReactNode, useRef, useState } from "react";

import { PrimaryNavigationContext } from "./primary-navigation-context";

export const PrimaryNavigationProvider = ({ children }: { children: ReactNode }) => {
	const [activeLink, setActiveLinkState] = useState<string>("");

	const globalClassesRef = useRef<string>(null);
	const orientationRef = useRef<"horizontal" | "vertical">(null);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const activeLinkElementRef = useRef<HTMLAnchorElement | null>(null);

	const routeToLinkMap: Record<string, string> = {
		"/": "Home",
		"/catalogue": "Catalogue",
		"/collections": "Collections",
		"/popular": "Popular",
		"/contacts": "Contacts"
	};

	const setActiveLink = (link: string) => {
		setActiveLinkState(link);
	};

	const initializeActiveLink = (pathname: string) => {
		const activeLink = routeToLinkMap[pathname] || "Home";
		setActiveLinkState(activeLink);
	};

	return (
		<PrimaryNavigationContext.Provider
			value={{
				globalClassesRef,
				orientationRef,
				containerRef,
				activeLinkElementRef,
				activeLink,
				setActiveLink,
				initializeActiveLink
			}}
		>
			{children}
		</PrimaryNavigationContext.Provider>
	);
};
