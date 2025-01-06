type ClipPathOptions = {
	animationDuration: number;
	container: HTMLDivElement;
	activeLinkElement: HTMLAnchorElement | null;
	orientation: "horizontal" | "vertical";
};

export const calculateClipPath = ({
	animationDuration,
	container,
	activeLinkElement,
	orientation
}: ClipPathOptions) => {
	if (activeLinkElement) {
		const { offsetLeft, offsetWidth, offsetTop, offsetHeight } = activeLinkElement;

		const clipLeft = offsetLeft;
		const clipRight = offsetLeft + offsetWidth;

		const clipTop = offsetTop;
		const clipBottom = offsetTop + offsetHeight;

		return {
			transition: {
				duration: animationDuration,
				type: "spring",
				bounce: 0
			},
			clipPath:
				orientation === "horizontal"
					? `inset(0% ${Number(100 - (clipRight / container.offsetWidth) * 100).toFixed()}% 0% ${Number((clipLeft / container.offsetWidth) * 100).toFixed()}% round 17px)`
					: `inset(${clipTop}px ${Number(100 - (clipRight / container.offsetWidth) * 100).toFixed()}% ${
							container.offsetHeight - clipBottom
						}px ${Number((clipLeft / container.offsetWidth) * 100).toFixed()}% round 17px)`
		};
	}
	return {};
};
