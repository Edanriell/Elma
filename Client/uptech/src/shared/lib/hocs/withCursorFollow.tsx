"use client";

import { ComponentType, useRef, useState } from "react";
import { animated, useSpring } from "react-spring";

function clamp(value: number, min: number, max: number): number {
	return Math.min(Math.max(value, min), max);
}

export function withCursorFollow<P>(Component: ComponentType<P>): ComponentType<P> {
	return (props: P & { width: string; height: string }) => {
		const containerRef = useRef<HTMLDivElement>(null);
		const [isHovering, setIsHovering] = useState(false);
		const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });

		// Compute numeric dimensions and center
		const numericWidth = parseInt(props.width, 10);
		const numericHeight = parseInt(props.height, 10);
		const center = { x: numericWidth / 2, y: numericHeight / 2 };

		// Glow settings
		const glowSize = 180;
		const glowRadius = glowSize / 2;

		// Animate glow position: follow the cursor when hovering, otherwise center it
		const springGlow = useSpring({
			to: {
				x: isHovering ? glowPos.x : center.x,
				y: isHovering ? glowPos.y : center.y
			},
			config: { mass: 1, tension: 170, friction: 26 }
		});

		// Update glow position clamped so the glow stays fully within the container bounds
		const handleMouseMove = (e: React.MouseEvent) => {
			if (!containerRef.current) return;

			const rect = containerRef.current.getBoundingClientRect();

			let newX = e.clientX - rect.left;
			let newY = e.clientY - rect.top;

			newX = clamp(newX, glowRadius, numericWidth - glowRadius);
			newY = clamp(newY, glowRadius, numericHeight - glowRadius);

			setGlowPos({ x: newX, y: newY });
		};

		// Define the clip-path using your SVG logotype's path data.
		const svgClipPath = `path('M262.905 36.3016C272.195 38.7889 279.453 46.0435 281.944 55.3326L317.205 186.825C319.772 196.399 316.87 206.61 309.651 213.403L233.079 285.449L277.177 77.6934H218.627L191.4 205.951C189.353 215.224 185.872 223.338 180.959 230.293C176.182 237.112 170.177 242.43 162.944 246.249C155.847 250.067 147.863 251.976 138.992 251.976C126.981 251.976 117.906 249.113 111.764 243.385C105.622 237.521 102.552 228.998 102.552 217.815C102.552 215.497 102.688 212.701 102.961 209.428C103.371 206.019 103.848 202.951 104.394 200.223L130.598 77.6934H72.0485L44.2067 209.837C43.2514 214.201 42.5007 219.043 41.9548 224.361C41.5454 229.68 41.3407 234.589 41.3407 239.089C41.3407 251.499 44.0702 262.477 49.5294 272.023C51.5127 275.358 53.7874 278.445 56.3536 281.283L56.182 281.243C46.5101 278.988 38.8652 271.591 36.2929 261.999L1.04376 130.551C-1.4487 121.256 1.20992 111.338 8.01712 104.536L104.752 7.87757C111.551 1.0838 121.457 -1.56935 130.742 0.916487L262.905 36.3016ZM133.493 299.266L185.105 311.298C187.96 311.963 190.905 312.158 193.823 311.874L197.135 311.552C203.065 310.975 208.636 308.447 212.976 304.364L220.173 297.593H174.203L181.369 263.841H180.14C176.182 271.068 170.655 277.614 163.558 283.478C156.598 289.342 148.477 293.979 139.196 297.388C137.327 298.085 135.425 298.711 133.493 299.266Z')`;

		return (
			<div
				ref={containerRef}
				onMouseEnter={() => setIsHovering(true)}
				onMouseLeave={() => setIsHovering(false)}
				onMouseMove={handleMouseMove}
				style={{
					position: "relative",
					width: props.width,
					height: props.height,
					// Apply the clip path to the whole container so both the glow and the SVG logotype are clipped.
					clipPath: svgClipPath,
					// Optional: if you need the container's shape to fill its bounds.
					WebkitClipPath: svgClipPath
				}}
			>
				{/* Animated glow layer */}
				<animated.div
					style={{
						position: "absolute",
						top: springGlow.y,
						left: springGlow.x,
						transform: "translate(-50%, -50%)",
						width: `${glowSize}px`,
						height: `${glowSize}px`,
						borderRadius: "50%",
						background:
							"radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)",
						filter: "blur(14px)",
						pointerEvents: "none",
						zIndex: 5
					}}
				/>
				{/* The SVG logotype (or any component rendering it) appears on top */}
				<Component {...props} />
			</div>
		);
	};
}
