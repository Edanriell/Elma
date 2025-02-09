import { type ComponentType, useEffect, useRef, useState } from "react";
import { motion, useSpring } from "motion/react";

const spring = {
	type: "spring",
	stiffness: 300,
	damping: 30
};

export function with3D(Component): ComponentType {
	return (props) => {
		const [rotateXaxis, setRotateXaxis] = useState<number>(0);
		const [rotateYaxis, setRotateYaxis] = useState<number>(0);
		const ref = useRef<HTMLDivElement | null>(null);

		const dx = useSpring(0, spring);
		const dy = useSpring(0, spring);

		const handleMouseMove = (event) => {
			if (!ref.current) return;

			const element = ref.current;
			const elementRect = element.getBoundingClientRect();
			const elementWidth = elementRect.width;
			const elementHeight = elementRect.height;
			const elementCenterX = elementWidth / 2;
			const elementCenterY = elementHeight / 2;

			const mouseX = event.clientY - elementRect.y - elementCenterY;
			const mouseY = event.clientX - elementRect.x - elementCenterX;

			const degreeX = (mouseX / elementWidth) * -40; //The number is the rotation factor
			const degreeY = (mouseY / elementHeight) * -40; //The number is the rotation factor

			setRotateXaxis(degreeX);
			setRotateYaxis(degreeY);
		};

		const handleMouseEnd = () => {
			setRotateXaxis(0);
			setRotateYaxis(0);
		};

		useEffect(() => {
			dx.set(-rotateXaxis);
			dy.set(rotateYaxis);
		}, [rotateXaxis, rotateYaxis]);

		return (
			<motion.div
				transition={spring}
				style={{
					perspective: "1200px",
					transformStyle: "preserve-3d",
					width: props.width,
					height: props.height
				}}
			>
				<motion.div
					ref={ref}
					whileHover={{ scale: 1.1 }} //Change the scale of zooming in when hovering
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseEnd}
					transition={spring}
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
							transition={spring}
							style={{
								width: "100%",
								height: "100%",
								backfaceVisibility: "hidden",
								position: "absolute"
							}}
						>
							<Component {...props} />
						</motion.div>
					</div>
				</motion.div>
			</motion.div>
		);
	};
}
