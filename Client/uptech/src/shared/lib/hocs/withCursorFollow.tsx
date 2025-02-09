"use client";

import { ComponentType, useEffect, useRef, useState } from "react";
import { motion, useSpring } from "motion/react";

function clamp(value: number, min: number, max: number): number {
	return Math.min(Math.max(value, min), max);
}

type WithCursorFollowProps = {
	width: string;
	height: string;
	glowSize?: number;
	glowColor?: string;
	glowIntensity?: number;
	clipPath?: string;
	customGlow?: string;
	alwaysHover?: boolean;
};

export function withCursorFollow<P>(
	Component: ComponentType<P>
): ComponentType<P & WithCursorFollowProps> {
	return ({
		width,
		height,
		clipPath,
		glowSize = 200,
		glowIntensity = 0.8,
		glowColor = "255,255,255",
		customGlow,
		alwaysHover,
		...props
	}: P & WithCursorFollowProps) => {
		const containerRef = useRef<HTMLDivElement | null>(null);
		const [isHovering, setIsHovering] = useState<boolean>(alwaysHover ?? false);

		// If alwaysHover is true, ensure isHovering remains true
		useEffect(() => {
			if (alwaysHover) {
				setIsHovering(true);
			}
		}, [alwaysHover]);

		const numericWidth = parseInt(String(width), 10);
		const numericHeight = parseInt(String(height), 10);
		const center = { x: numericWidth / 2, y: numericHeight / 2 };
		const glowRadius = glowSize / 2;

		// Create motion springs for x and y positions
		const glowX = useSpring(center.x, { stiffness: 170, damping: 26 });
		const glowY = useSpring(center.y, { stiffness: 170, damping: 26 });

		// Update glow position ensuring the glow stays within bounds
		const handleMouseMove = (e: React.MouseEvent) => {
			if (!containerRef.current) return;

			const rect = containerRef.current.getBoundingClientRect();

			let newX = e.clientX - rect.left;
			let newY = e.clientY - rect.top;

			newX = clamp(newX, glowRadius, numericWidth - glowRadius);
			newY = clamp(newY, glowRadius, numericHeight - glowRadius);

			glowX.set(newX);
			glowY.set(newY);
		};

		const handleMouseEnter = () => {
			if (!alwaysHover) {
				setIsHovering(true);
			}
		};

		const handleMouseLeave = () => {
			if (!alwaysHover) {
				setIsHovering(false);

				// Return glow back to center on mouse leave
				glowX.set(center.x);
				glowY.set(center.y);
			}
		};

		const glowBackground =
			customGlow ??
			`radial-gradient(circle, rgba(${glowColor}, ${glowIntensity}) 0%, rgba(${glowColor}, ${glowIntensity / 2}) 60%, rgba(${glowColor}, 0) 100%)`;

		return (
			<div
				ref={containerRef}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onMouseMove={handleMouseMove}
				style={{
					position: "relative",
					width: width,
					height: height,
					clipPath: clipPath ?? "none",
					WebkitClipPath: clipPath ?? "none"
				}}
			>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: isHovering ? 1 : 0 }}
					style={{
						position: "absolute",
						top: glowY,
						left: glowX,
						translateX: "-50%",
						translateY: "-50%",
						width: `${glowSize}px`,
						height: `${glowSize}px`,
						borderRadius: "50%",
						background: glowBackground,
						filter: "blur(30px)",
						pointerEvents: "none",
						zIndex: 5
					}}
				/>
				<Component width={width} height={height} {...(props as P)} />
			</div>
		);
	};
}
