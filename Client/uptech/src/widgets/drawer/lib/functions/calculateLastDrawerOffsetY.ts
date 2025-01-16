type calculateLastDrawerOffsetYParameters = {
	maxDrawers: number;
	drawerPosition: string;
};

export const calculateLastDrawerOffsetY = ({
	maxDrawers,
	drawerPosition
}: calculateLastDrawerOffsetYParameters) => {
	switch (drawerPosition) {
		case "right":
		case "left":
			return 30 * maxDrawers;
	}
};
