import React, { FC } from "react";
import Link from "next/link";

import {
	FooterNavigation,
	type FooterNavigationLink
} from "@widgets/navigation/ui/footer-navigation/ui";

import { Logotype } from "@shared/ui/logotype/ui";
import { Button } from "@shared/ui/button/ui";

type FooterNavigationLinksGroups = "Pages" | "Support" | "Social Media";

const footerNavigationLinks = new Map<FooterNavigationLinksGroups, Array<FooterNavigationLink>>([
	[
		"Pages",
		[
			{ name: "About Us", href: "#" },
			{ name: "Categories", href: "#" },
			{ name: "Catalogue", href: "#" },
			{ name: "Testimonials", href: "#" },
			{ name: "Articles & Blogs", href: "#" }
		]
	],
	[
		"Support",
		[
			{ name: "FAQs", href: "#" },
			{ name: "Product", href: "#" },
			{ name: "Contact", href: "#" },
			{ name: "Privacy Policy", href: "#" },
			{ name: "Terms & Conditions", href: "#" }
		]
	],
	[
		"Social Media",
		[
			{ name: "Linkedin", href: "#" },
			{ name: "Twitter", href: "#" },
			{ name: "Instagram", href: "#" },
			{ name: "Facebook", href: "#" },
			{ name: "Pinterest", href: "#" }
		]
	]
]);

export const Footer: FC = () => {
	return (
		<footer className="relative bg-shark-950 z-[20]">
			<div className="mr-[16rem] ml-[16rem] tablet:mr-[48rem] tablet:ml-[48rem] pt-[80rem] desktop:ml-[unset] desktop:mr-[unset] desktop:flex desktop:flex-col">
				<div className="flex flex-col tablet:flex-row tablet:mx-[auto] tablet:justify-between tablet:max-w-[1048rem] desktop:max-w-[1248rem] tablet:items-start tablet:mb-[48rem]">
					<div className="tablet:mr-[40rem] tablet:basis-[477rem] desktop:mr-[unset]">
						<h2 className="text-[40rem] font-medium leading-[125%] text-white-50 mb-[24rem] opacity-[0.9]">
							Stay Updated on Latest Product Releases
						</h2>
						<form className="flex flex-col gap-y-[8rem] mb-[40rem] tablet:flex-row tablet:gap-x-[8rem] tablet:mb-[unset]">
							<div className="relative w-full tablet:basis-[320rem]">
								<label className="visually-hidden" htmlFor="email">
									Enter your email
								</label>
								<input
									id="email"
									name="email"
									placeholder="Enter your email"
									type="email"
									className="border-solid border-[1rem] border-white-900 rounded-[46rem] px-[24rem] py-[14rem] max-h-[52rem] bg-white-950 text-[16rem] font-light leading-[150%] text-white-50 placeholder:text-[#FFFFFFCC] w-full"
								/>
							</div>
							<Button
								primaryColor="bg-white-900"
								primaryComponentClasses="text-white-50"
								secondaryColor="bg-white-50"
								secondaryComponentClasses="text-shark-950"
								transitionOptions={{ type: "spring", duration: 0.65, bounce: 0 }}
								type="submit"
							>
								Subscribe
							</Button>
						</form>
					</div>
					<FooterNavigation>
						{Array.from(footerNavigationLinks.entries()).map(
							([groupName, groupLinks]) => (
								<FooterNavigation.NavigationLinksGroup
									key={groupName}
									name={groupName}
								>
									<FooterNavigation.NavigationLinksList>
										{groupLinks.map(({ name, href }) => (
											<FooterNavigation.NavigationLink key={name} href={href}>
												{name}
											</FooterNavigation.NavigationLink>
										))}
									</FooterNavigation.NavigationLinksList>
								</FooterNavigation.NavigationLinksGroup>
							)
						)}
					</FooterNavigation>
				</div>
				<Link
					className="tablet:mx-[auto] tablet:flex tablet:flex-row tablet:justify-center"
					href="/"
				>
					<Logotype color="universal" size="large" />
				</Link>
			</div>
		</footer>
	);
};
