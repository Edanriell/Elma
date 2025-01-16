type calculateLastDrawerOffsetXParameters = {
	maxDrawers: number;
	drawerPosition: string;
};

export const calculateLastDrawerOffsetX = ({
	maxDrawers,
	drawerPosition
}: calculateLastDrawerOffsetXParameters) => {
	switch (drawerPosition) {
		case "right":
			return -70 * maxDrawers;
		case "left":
			return 70 * maxDrawers;
	}
};
