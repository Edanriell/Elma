"use client";

import type { ComponentType } from "react";
import { useRef, useState } from "react";
import { animated, useSpring } from "react-spring";

export function withCursorFollow<P>(Component: ComponentType<P>): ComponentType<P> {
	return (props: P & { width: string; height: string }) => {
		const containerRef = useRef<HTMLDivElement>(null);
		const [isHovering, setIsHovering] = useState(false);
		const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });

		// Compute center from provided width/height
		const numericWidth = parseInt(props.width, 10);
		const numericHeight = parseInt(props.height, 10);
		const center = { x: numericWidth / 2, y: numericHeight / 2 };

		// Animate glow position: when hovering, follow the cursor; otherwise, center
		const springGlow = useSpring({
			to: {
				x: isHovering ? glowPos.x : center.x,
				y: isHovering ? glowPos.y : center.y
			},
			config: { mass: 1, tension: 170, friction: 26 }
		});

		// Update glowPos based on mouse move within the container
		const handleMouseMove = (e: React.MouseEvent) => {
			if (!containerRef.current) return;
			const rect = containerRef.current.getBoundingClientRect();
			setGlowPos({
				x: e.clientX - rect.left,
				y: e.clientY - rect.top
			});
		};

		return (
			<div
				ref={containerRef}
				style={{
					position: "relative",
					width: props.width,
					height: props.height
				}}
				onMouseEnter={() => setIsHovering(true)}
				onMouseLeave={() => setIsHovering(false)}
				onMouseMove={handleMouseMove}
			>
				{/* Glow layer */}
				<animated.div
					style={{
						position: "absolute",
						top: springGlow.y,
						left: springGlow.x,
						transform: "translate(-50%, -50%)",
						width: "150px", // adjust glow size as needed
						height: "150px",
						borderRadius: "50%",
						background:
							"radial-gradient(circle, rgba(255,255,0,0.8) 0%, rgba(255,255,0,0) 60%)",
						filter: "blur(10px)",
						pointerEvents: "none"
					}}
				/>
				{/* Content layer */}
				<div style={{ position: "relative", zIndex: 1 }}>
					<Component {...props} />
				</div>
			</div>
		);
	};
}
