import React, { FC } from "react";
import Link from "next/link";

import { Logotype } from "@shared/ui/logotype/ui";
import { Button } from "@shared/ui/button/ui";

export const Footer: FC = () => {
	return (
		<footer className="relative bg-shark-950">
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
							<button
								className="rounded-[44rem] bg-white-900 px-[32rem] py-[16rem] max-h-[50rem] font-medium text-[18rem] leading-[100%] capitalize text-white-50 w-full pointer-cursor tablet:basis-[149rem]"
								type="submit"
							>
								Subscribe
							</button>
						</form>
						<Button
							primaryColor="bg-white-900"
							primaryComponentClasses="text-white-50"
							secondaryColor="bg-white-50"
							secondaryComponentClasses="text-shark-950"
						>
							Subscribe
						</Button>
					</div>
					<nav className="relative flex flex-row gap-x-[40rem] gap-y-[40rem] flex-wrap mb-[40rem] tablet:basis-[auto] tablet:mb-[unset] desktop:gap-x-[80rem] desktop:gap-y-[80rem]">
						<div className="flex flex-col gap-y-[24rem] flex-grow-0 flex-shrink-0">
							<header className="relative">
								<h3 className="font-medium text-[20rem] leading-[125%] text-[#FFFFFFE5]">
									Pages
								</h3>
							</header>
							<ul className="flex flex-col ml-[-16rem]">
								<li className="relative">
									<Link
										className="font-medium text-[16rem] leading-[125%] text-white-50 pl-[16rem] pr-[16rem] pt-[8rem] pb-[8rem] inline-block opacity-[0.6]"
										href="#"
									>
										About Us
									</Link>
								</li>
								<li className="relative">
									<Link
										className="font-medium text-[16rem] leading-[125%] text-white-50 pl-[16rem] pr-[16rem] pt-[8rem] pb-[8rem] inline-block opacity-[0.6]"
										href="#"
									>
										Categories
									</Link>
								</li>
								<li className="relative">
									<Link
										className="font-medium text-[16rem] leading-[125%] text-white-50 pl-[16rem] pr-[16rem] pt-[8rem] pb-[8rem] inline-block opacity-[0.6]"
										href="#"
									>
										Catalogue
									</Link>
								</li>
								<li className="relative">
									<Link
										className="font-medium text-[16rem] leading-[125%] text-white-50 pl-[16rem] pr-[16rem] pt-[8rem] pb-[8rem] inline-block opacity-[0.6]"
										href="#"
									>
										Testimonials
									</Link>
								</li>
								<li className="relative">
									<Link
										className="font-medium text-[16rem] leading-[125%] text-white-50 pl-[16rem] pr-[16rem] pt-[8rem] pb-[8rem] inline-block opacity-[0.6]"
										href="#"
									>
										Articles & Blogs
									</Link>
								</li>
							</ul>
						</div>
						<div className="flex flex-col gap-y-[24rem] flex-grow-0 flex-shrink-0">
							<header className="relative">
								<h3 className="font-medium text-[20rem] leading-[125%] text-[#FFFFFFE5]">
									Support
								</h3>
							</header>
							<ul className="flex flex-col ml-[-16rem]">
								<li className="relative">
									<Link
										className="font-medium text-[16rem] leading-[125%] text-white-50 pl-[16rem] pr-[16rem] pt-[8rem] pb-[8rem] inline-block opacity-[0.6]"
										href="#"
									>
										FAQs
									</Link>
								</li>
								<li className="relative">
									<Link
										className="font-medium text-[16rem] leading-[125%] text-white-50 pl-[16rem] pr-[16rem] pt-[8rem] pb-[8rem] inline-block opacity-[0.6]"
										href="#"
									>
										Product
									</Link>
								</li>
								<li className="relative">
									<Link
										className="font-medium text-[16rem] leading-[125%] text-white-50 pl-[16rem] pr-[16rem] pt-[8rem] pb-[8rem] inline-block opacity-[0.6]"
										href="#"
									>
										Contact
									</Link>
								</li>
								<li className="relative">
									<Link
										className="font-medium text-[16rem] leading-[125%] text-white-50 pl-[16rem] pr-[16rem] pt-[8rem] pb-[8rem] inline-block opacity-[0.6]"
										href="#"
									>
										Privacy Policy
									</Link>
								</li>
								<li className="relative">
									<Link
										className="font-medium text-[16rem] leading-[125%] text-white-50 pl-[16rem] pr-[16rem] pt-[8rem] pb-[8rem] inline-block opacity-[0.6]"
										href="#"
									>
										Terms & Conditions
									</Link>
								</li>
							</ul>
						</div>
						<div className="flex flex-col gap-y-[24rem] flex-grow-0 flex-shrink-0">
							<header className="relative">
								<h3 className="font-medium text-[20rem] leading-[125%] text-[#FFFFFFE5]">
									Social Media
								</h3>
							</header>
							<ul className="flex flex-col ml-[-16rem]">
								<li className="relative">
									<Link
										className="font-medium text-[16rem] leading-[125%] text-white-50 pl-[16rem] pr-[16rem] pt-[8rem] pb-[8rem] inline-block opacity-[0.6]"
										href="#"
									>
										Linkedin
									</Link>
								</li>
								<li className="relative">
									<Link
										className="font-medium text-[16rem] leading-[125%] text-white-50 pl-[16rem] pr-[16rem] pt-[8rem] pb-[8rem] inline-block opacity-[0.6]"
										href="#"
									>
										Twitter
									</Link>
								</li>
								<li className="relative">
									<Link
										className="font-medium text-[16rem] leading-[125%] text-white-50 pl-[16rem] pr-[16rem] pt-[8rem] pb-[8rem] inline-block opacity-[0.6]"
										href="#"
									>
										Instagram
									</Link>
								</li>
								<li className="relative">
									<Link
										className="font-medium text-[16rem] leading-[125%] text-white-50 pl-[16rem] pr-[16rem] pt-[8rem] pb-[8rem] inline-block opacity-[0.6]"
										href="#"
									>
										Facebook
									</Link>
								</li>
								<li className="relative">
									<Link
										className="font-medium text-[16rem] leading-[125%] text-white-50 pl-[16rem] pr-[16rem] pt-[8rem] pb-[8rem] inline-block opacity-[0.6]"
										href="#"
									>
										Pinterest
									</Link>
								</li>
							</ul>
						</div>
					</nav>
				</div>
				<Link
					className="tablet:mx-[auto] tablet:flex tablet:flex-row tablet:justify-center"
					href="/"
				>
					<Logotype color="light" size="large" />
				</Link>
			</div>
		</footer>
	);
};
