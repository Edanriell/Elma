type calculateDrawerOffsetYParameters = {
	reversedIndex: number;
	drawerPosition: string;
};

export const calculateDrawerOffsetY = ({
	reversedIndex,
	drawerPosition
}: calculateDrawerOffsetYParameters) => {
	switch (drawerPosition) {
		case "right":
		case "left":
			return 30 * reversedIndex;
	}
};
