type getDragConstraintsParameters = {
	drawerPosition: "left" | "right" | "top" | "bottom";
	drawerWidth: string;
	drawerHeight: string;
};

export const getDragConstraints = ({
	drawerPosition,
	drawerWidth,
	drawerHeight
}: getDragConstraintsParameters) => {
	switch (drawerPosition) {
		case "left": {
			return {
				left: drawerWidth,
				right: 10
			};
		}
		case "right": {
			return {
				left: 10,
				right: drawerWidth
			};
		}
		case "bottom": {
			return {
				top: 10,
				bottom: drawerHeight
			};
		}
		case "top": {
			return {
				top: drawerHeight,
				bottom: 10
			};
		}
	}
};
