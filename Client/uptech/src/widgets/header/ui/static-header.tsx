import { type FC } from "react";
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

import { Logotype } from "@shared/ui/logotype/ui";
import { Icon } from "@shared/ui/icon/ui";

const staticHeaderPrimaryNavigationLinks = new Map<string, PrimaryNavigationLink>([
	["home", { id: uuidv4(), name: "Home", href: "#" }],
	["catalogue", { id: uuidv4(), name: "Catalogue", href: "#" }],
	["collections", { id: uuidv4(), name: "Collections", href: "#" }],
	["popular", { id: uuidv4(), name: "Popular", href: "#" }],
	["contacts", { id: uuidv4(), name: "Contacts", href: "#" }]
]);

const staticHeaderSecondaryNavigationLinks = new Map<string, SecondaryNavigationLink>([
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

export const StaticHeader: FC = () => {
	return (
		<header className="pl-[32rem] pr-[32rem] mt-[24rem] mb-[24rem] flex-row items-center justify-between max-h-[80rem] hidden tablet:flex">
			<Logotype size="medium" color="dark" />
			<PrimaryNavigation orientation="horizontal">
				<PrimaryNavigation.NavigationLinksList>
					{Array.from(staticHeaderPrimaryNavigationLinks.values()).map(
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
			<Drawer.Trigger>
				<SecondaryNavigation orientation="horizontal">
					<SecondaryNavigation.NavigationLinksList>
						{Array.from(staticHeaderSecondaryNavigationLinks.values()).map(
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
		</header>
	);
};
