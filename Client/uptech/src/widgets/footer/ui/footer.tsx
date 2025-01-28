import React, { FC } from "react";
import Link from "next/link";

import { Logotype } from "@shared/ui/logotype/ui";

export const Footer: FC = () => {
	return (
		<footer className="relative bg-shark-950">
			<div className="mr-[16rem] ml-[16rem] pt-[80rem]">
				<h2 className="text-[40rem] font-medium leading-[125%] text-white-50 mb-[24rem] opacity-[0.9]">
					Stay Updated on Latest Product Releases
				</h2>
				<form className="flex flex-col gap-y-[8rem] mb-[40rem]">
					<div className="relative w-full">
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
						className="rounded-[44rem] bg-white-900 px-[32rem] py-[16rem] max-h-[50rem] font-medium text-[18rem] leading-[100%] capitalize text-white-50 w-full pointer-cursor"
						type="submit"
					>
						Subscribe
					</button>
				</form>
				<nav className="relative flex flex-row gap-x-[40rem] gap-y-[40rem] flex-wrap mb-[40rem]">
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
				<Link href="/">
					<Logotype color="light" size="large" />
				</Link>
			</div>
		</footer>
	);
};
