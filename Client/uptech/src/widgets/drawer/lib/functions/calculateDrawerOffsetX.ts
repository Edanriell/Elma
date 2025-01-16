type calculateDrawerOffsetXParameters = {
	reversedIndex: number;
	drawerPosition: string;
};

export const calculateDrawerOffsetX = ({
	reversedIndex,
	drawerPosition
}: calculateDrawerOffsetXParameters) => {
	switch (drawerPosition) {
		case "right":
			return -70 * reversedIndex;
		case "left":
			return 70 * reversedIndex;
	}
};
