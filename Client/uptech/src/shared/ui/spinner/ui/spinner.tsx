import { type FC } from "react";

type SpinnerProps = {
	primaryColor?: string;
	secondaryColor?: string;
};

export const Spinner: FC<SpinnerProps> = ({
	primaryColor = "rgba(255,255,255, 0.15)",
	secondaryColor = "rgba(255,255,255, 1)"
}) => {
	return (
		<div className="relative">
			<svg
				className="absolute top-0 left-0 z-[1]"
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 24 24"
			>
				<g>
					<circle cx="3" cy="12" r="1.8" fill={primaryColor} />
					<circle cx="21" cy="12" r="1.8" fill={primaryColor} />
					<circle cx="12" cy="21" r="1.8" fill={primaryColor} />
					<circle cx="12" cy="3" r="1.8" fill={primaryColor} />
					<circle cx="5.64" cy="5.64" r="1.8" fill={primaryColor} />
					<circle cx="18.36" cy="18.36" r="1.8" fill={primaryColor} />
					<circle cx="5.64" cy="18.36" r="1.8" fill={primaryColor} />
					<circle cx="18.36" cy="5.64" r="1.8" fill={primaryColor} />
					<animateTransform
						attributeName="transform"
						dur="10s"
						repeatCount="indefinite"
						type="rotate"
						values="360 12 12;0 12 12"
					/>
				</g>
			</svg>
			<svg
				className="absolute top-0 left-0 z-[2]"
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 24 24"
			>
				<path
					fill={secondaryColor}
					d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
				>
					<animateTransform
						attributeName="transform"
						dur="1s"
						repeatCount="indefinite"
						type="rotate"
						values="0 12 12;360 12 12"
					/>
				</path>
			</svg>
		</div>
	);
};
