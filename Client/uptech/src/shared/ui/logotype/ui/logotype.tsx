import { FC, Fragment } from "react";
import Image from "next/image";

const logotypeVariants = {
	dark: {
		small: () => (
			<Image
				src="/images/vector/logotype-dark.svg"
				width={115}
				height={28}
				alt="Uptech company logotype"
				className="w-auto h-auto"
				priority={true}
			/>
		),
		medium: () => (
			<Image
				src="/images/vector/logotype-dark.svg"
				width={132}
				height={32}
				alt="Uptech company logotype"
				className="w-auto h-auto"
				priority={true}
			/>
		)
	},
	light: {
		small: () => (
			<Image
				src="/images/vector/logotype-light.svg"
				width={115}
				height={28}
				alt="Uptech company logotype"
				className="w-auto h-auto"
				priority={true}
			/>
		),
		medium: () => (
			<Image
				src="/images/vector/logotype-light.svg"
				width={132}
				height={32}
				alt="Uptech company logotype"
				className="w-auto h-auto"
				priority={true}
			/>
		)
	}
};

type LogotypeColors = keyof typeof logotypeVariants;

type LogotypeSizes = keyof (typeof logotypeVariants)[LogotypeColors];

type LogotypeProps = {
	size: LogotypeSizes;
	color: LogotypeColors;
};

export const Logotype: FC<LogotypeProps> = ({ size, color }) => {
	const Logotype = logotypeVariants[color][size];
	return <Fragment>{Logotype()}</Fragment>;
};
