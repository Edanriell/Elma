import { type ComponentType, type MouseEvent, useEffect, useRef, useState } from "react";
import { motion, type Spring, useSpring } from "motion/react";

const with3DTransition: Spring = {
	type: "spring",
	stiffness: 300,
	damping: 30
};

export type With3DProps = {
	width: string;
	height: string;
	scale?: number;
	rotationFactor?: number;
};

export const with3D = <P extends object>(
	Component: ComponentType<P>
): ComponentType<P & With3DProps> => {
	const ComponentWith3D = ({
		width,
		height,
		scale = 1.1,
		rotationFactor = -40,
		...rest
	}: With3DProps & P) => {
		const [rotateXaxis, setRotateXaxis] = useState<number>(0);
		const [rotateYaxis, setRotateYaxis] = useState<number>(0);
		const ref = useRef<HTMLDivElement>(null);

		const dx = useSpring(0, with3DTransition);
		const dy = useSpring(0, with3DTransition);

		const handleMouseMove = (event: MouseEvent<HTMLDivElement>): void => {
			if (!ref.current) return;
			const elementRect = ref.current.getBoundingClientRect();
			const elementWidth = elementRect.width;
			const elementHeight = elementRect.height;
			const elementCenterX = elementWidth / 2;
			const elementCenterY = elementHeight / 2;

			const mouseX = event.clientY - elementRect.y - elementCenterY;
			const mouseY = event.clientX - elementRect.x - elementCenterX;

			const degreeX = (mouseX / elementWidth) * rotationFactor;
			const degreeY = (mouseY / elementHeight) * rotationFactor;

			setRotateXaxis(degreeX);
			setRotateYaxis(degreeY);
		};

		const handleMouseEnd = (): void => {
			setRotateXaxis(0);
			setRotateYaxis(0);
		};

		useEffect(() => {
			dx.set(-rotateXaxis);
			dy.set(rotateYaxis);
		}, [rotateXaxis, rotateYaxis, dx, dy]);

		return (
			<motion.div
				transition={with3DTransition}
				style={{
					perspective: "1200px",
					transformStyle: "preserve-3d",
					width,
					height
				}}
			>
				<motion.div
					ref={ref}
					whileHover={{ scale }}
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseEnd}
					transition={with3DTransition}
					style={{
						width: "100%",
						height: "100%",
						rotateX: dx,
						rotateY: dy
					}}
				>
					<div
						style={{
							perspective: "1200px",
							transformStyle: "preserve-3d",
							width: "100%",
							height: "100%"
						}}
					>
						<motion.div
							transition={with3DTransition}
							style={{
								width: "100%",
								height: "100%",
								backfaceVisibility: "hidden",
								position: "absolute"
							}}
						>
							<Component width={width} height={height} {...(rest as P)} />
						</motion.div>
					</div>
				</motion.div>
			</motion.div>
		);
	};

	ComponentWith3D.displayName = `with3D(${
		Component.displayName || Component.name || "Component"
	})`;

	return ComponentWith3D;
};
