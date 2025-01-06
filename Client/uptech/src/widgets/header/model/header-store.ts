import { create } from "zustand";

type HeaderState = {
	mobileNavigationState: "opened" | "closed";
	toggleMobileNavigation: () => void;
};

const toggleState = (currentState: "opened" | "closed") =>
	currentState === "closed" ? "opened" : "closed";

export const useHeaderStore = create<HeaderState>((set) => ({
	mobileNavigationState: "closed",
	toggleMobileNavigation: () =>
		set((state) => ({ mobileNavigationState: toggleState(state.mobileNavigationState) }))
}));
