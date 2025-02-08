"use client";

import { type FC, useEffect, useState } from "react";

import "./styles.css";

export const Loader: FC = () => {
	const [isDark, setIsDark] = useState(false);
	const [animationKey, setAnimationKey] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsDark((prev) => !prev);
			setAnimationKey((prev) => prev + 1);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative w-[353rem] h-[312rem]">
			<div
				key={`dark-${animationKey}`}
				style={{ zIndex: 2 }}
				className={`absolute inset-0 ${isDark ? "dark-in" : "dark-out"}`}
			>
				<svg
					className="text-shark-950 block"
					viewBox="0 0 353 312"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M262.905 36.3016C272.195 38.7889 279.453 46.0435 281.944 55.3326L317.205 186.825C319.772 196.399 316.87 206.61 309.651 213.403L233.079 285.449L277.177 77.6934H218.627L191.4 205.951C189.353 215.224 185.872 223.338 180.959 230.293C176.182 237.112 170.177 242.43 162.944 246.249C155.847 250.067 147.863 251.976 138.992 251.976C126.981 251.976 117.906 249.113 111.764 243.385C105.622 237.521 102.552 228.998 102.552 217.815C102.552 215.497 102.688 212.701 102.961 209.428C103.371 206.019 103.848 202.951 104.394 200.223L130.598 77.6934H72.0485L44.2067 209.837C43.2514 214.201 42.5007 219.043 41.9548 224.361C41.5454 229.68 41.3407 234.589 41.3407 239.089C41.3407 251.499 44.0702 262.477 49.5294 272.023C51.5127 275.358 53.7874 278.445 56.3536 281.283L56.182 281.243C46.5101 278.988 38.8652 271.591 36.2929 261.999L1.04376 130.551C-1.4487 121.256 1.20992 111.338 8.01712 104.536L104.752 7.87757C111.551 1.0838 121.457 -1.56935 130.742 0.916487L262.905 36.3016ZM133.493 299.266L185.105 311.298C187.96 311.963 190.905 312.158 193.823 311.874L197.135 311.552C203.065 310.975 208.636 308.447 212.976 304.364L220.173 297.593H174.203L181.369 263.841H180.14C176.182 271.068 170.655 277.614 163.558 283.478C156.598 289.342 148.477 293.979 139.196 297.388C137.327 298.085 135.425 298.711 133.493 299.266Z"
						fill="currentColor"
					/>
				</svg>
			</div>
			<div
				key={`light-${animationKey}`}
				style={{ zIndex: 1 }}
				className={`absolute inset-0 ${isDark ? "light-out" : "light-in"}`}
			>
				<svg
					className="text-alizarin-crimson-600 block"
					viewBox="0 0 353 312"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M262.905 36.3016C272.195 38.7889 279.453 46.0435 281.944 55.3326L317.205 186.825C319.772 196.399 316.87 206.61 309.651 213.403L233.079 285.449L277.177 77.6934H218.627L191.4 205.951C189.353 215.224 185.872 223.338 180.959 230.293C176.182 237.112 170.177 242.43 162.944 246.249C155.847 250.067 147.863 251.976 138.992 251.976C126.981 251.976 117.906 249.113 111.764 243.385C105.622 237.521 102.552 228.998 102.552 217.815C102.552 215.497 102.688 212.701 102.961 209.428C103.371 206.019 103.848 202.951 104.394 200.223L130.598 77.6934H72.0485L44.2067 209.837C43.2514 214.201 42.5007 219.043 41.9548 224.361C41.5454 229.68 41.3407 234.589 41.3407 239.089C41.3407 251.499 44.0702 262.477 49.5294 272.023C51.5127 275.358 53.7874 278.445 56.3536 281.283L56.182 281.243C46.5101 278.988 38.8652 271.591 36.2929 261.999L1.04376 130.551C-1.4487 121.256 1.20992 111.338 8.01712 104.536L104.752 7.87757C111.551 1.0838 121.457 -1.56935 130.742 0.916487L262.905 36.3016ZM133.493 299.266L185.105 311.298C187.96 311.963 190.905 312.158 193.823 311.874L197.135 311.552C203.065 310.975 208.636 308.447 212.976 304.364L220.173 297.593H174.203L181.369 263.841H180.14C176.182 271.068 170.655 277.614 163.558 283.478C156.598 289.342 148.477 293.979 139.196 297.388C137.327 298.085 135.425 298.711 133.493 299.266Z"
						fill="currentColor"
					/>
				</svg>
			</div>
		</div>
	);
};
