import { type ComponentPropsWithoutRef, type FC } from "react";
import { motion, type MotionProps } from "motion/react";
import { v4 as uuidv4 } from "uuid";

import { Drawer } from "@widgets/drawer/ui";
import {
	PrimaryNavigation,
	type PrimaryNavigationLink
} from "@widgets/navigation/ui/primary-navigation/ui";
import {
	SecondaryNavigation,
	SecondaryNavigationLink
} from "@widgets/navigation/ui/secondary-navigation/ui";

import { useHeaderStore } from "@widgets/header/model";

import { Icon } from "@shared/ui/icon/ui";

type PrimaryMobileNavigationProps = {
	className?: string;
} & ComponentPropsWithoutRef<"nav"> &
	MotionProps;

const mobileNavigationPrimaryNavigationLinks = new Map<string, PrimaryNavigationLink>([
	["home", { id: uuidv4(), name: "Home", href: "#" }],
	["catalogue", { id: uuidv4(), name: "Catalogue", href: "#" }],
	["collections", { id: uuidv4(), name: "Collections", href: "#" }],
	["popular", { id: uuidv4(), name: "Popular", href: "#" }],
	["contacts", { id: uuidv4(), name: "Contacts", href: "#" }]
]);

const mobileNavigationSecondaryNavigationLinks = new Map<string, SecondaryNavigationLink>([
	[
		"search",
		{
			name: "Search",
			Icon: () => <Icon type="search" />,
			contentId: "1x"
		}
	],
	[
		"profile",
		{
			name: "Profile",
			Icon: () => <Icon type="profile" />,
			contentId: "2x"
		}
	],
	[
		"cart",
		{
			name: "Cart",
			Icon: () => <Icon type="cart" productCount={0} />,
			contentId: "3x"
		}
	]
]);

const mobileNavigationAnimationVariants = {
	initial: {
		visibility: "hidden",
		opacity: 0,
		y: 10,
		scale: 0.975,
		filter: "blur(4px)"
	},
	visible: {
		visibility: "visible",
		opacity: 1,
		y: 0,
		scale: 1,
		filter: "blur(0px)",
		transition: {
			delay: 0,
			type: "spring",
			bounce: 0,
			duration: 0.5
		}
	},
	hidden: {
		visibility: "hidden",
		opacity: 0,
		y: 10,
		scale: 0.975,
		filter: "blur(4px)",
		transition: {
			delay: 0.3,
			type: "spring",
			bounce: 0,
			duration: 0.45
		}
	}
};

export const MobileNavigation: FC<PrimaryMobileNavigationProps> = ({ className }) => {
	const mobileNavigationState = useHeaderStore(
		({ mobileNavigationState }) => mobileNavigationState
	);

	return (
		<motion.div
			initial="initial"
			animate={mobileNavigationState === "opened" ? "visible" : "hidden"}
			variants={mobileNavigationAnimationVariants}
			className={
				className + " m-[16rem] flex flex-row gap-x-[16rem] w-fill-firefox w-fill-chrome"
			}
		>
			<div className="pt-[18rem] pr-[16rem] pb-[18rem] pl-[16rem] rounded-[8rem] bg-[var(--white-transparent-10)] backdrop-blur-[40rem] flex flex-col items-start flex-[1]">
				<PrimaryNavigation orientation="vertical">
					<PrimaryNavigation.NavigationLinksList>
						{Array.from(mobileNavigationPrimaryNavigationLinks.values()).map(
							({ id, name, href }) => (
								<PrimaryNavigation.NavigationLink
									key={id}
									name={name}
									href={href}
									id={id}
								/>
							)
						)}
					</PrimaryNavigation.NavigationLinksList>
				</PrimaryNavigation>
			</div>
			<div className="rounded-[8rem] bg-[var(--white-transparent-10)] backdrop-blur-[40rem] pt-[18rem] pr-[16rem] pb-[18rem] pl-[16rem] flex-[0]">
				<Drawer.Trigger>
					<SecondaryNavigation orientation="vertical">
						<SecondaryNavigation.NavigationLinksList>
							{Array.from(mobileNavigationSecondaryNavigationLinks.values()).map(
								({ name, Icon, contentId }, index) => (
									<SecondaryNavigation.NavigationLink
										key={index}
										name={name}
										Icon={Icon}
										data-content-id={contentId}
									/>
								)
							)}
						</SecondaryNavigation.NavigationLinksList>
					</SecondaryNavigation>
				</Drawer.Trigger>
			</div>
		</motion.div>
	);
};

// SecondaryNav
// Primary Nav

// Should  accept className as props
// to be able to fix shit
