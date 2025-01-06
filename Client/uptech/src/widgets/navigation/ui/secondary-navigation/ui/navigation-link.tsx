import { ComponentPropsWithoutRef, FC, JSX } from "react";
import { motion } from "motion/react";

type NavigationLinkProps = {
	name: string;
	Icon: () => JSX.Element;
} & ComponentPropsWithoutRef<"button">;

const navigationLinkAnimationVariants = {
	hover: {
		scale: 1.2,
		transition: { type: "spring", duration: 0.3, bounce: 0 }
	},
	tap: {
		scale: 0.8,
		transition: { type: "spring", duration: 0.3, bounce: 0 }
	}
};

export const NavigationLink: FC<NavigationLinkProps> = ({ name, Icon, ...rest }) => {
	return (
		<li>
			<motion.button
				variants={navigationLinkAnimationVariants}
				whileHover={"hover"}
				whileTap={"tap"}
				type={"button"}
				{...rest}
			>
				<span className="sr-only">{name}</span>
				<Icon />
			</motion.button>
		</li>
	);
};
