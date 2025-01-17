type getDragAxisParameters = {
	drawerPosition: "left" | "right" | "bottom" | "top";
	isFirstInStack: boolean;
};

export const getDragAxis = ({ drawerPosition, isFirstInStack }: getDragAxisParameters) => {
	if (!isFirstInStack) return "";

	switch (drawerPosition) {
		case "left":
		case "right": {
			return "x";
		}
		case "top":
		case "bottom": {
			return "y";
		}
	}
};
