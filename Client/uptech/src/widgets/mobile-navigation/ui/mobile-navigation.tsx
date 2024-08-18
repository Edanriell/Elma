import { FC } from "react";

// TODO
// Use map
// classes must set
// all props for trigger and className also

export const MobileNavigationTrigger: FC = () => {
	return (
		<button className="absolute right-[5rem] top-[50%] translate-y-[-50%] rounded-[8rem] p-[8rem] w-[40rem] h-[40rem] flex items-center justify-center">
			<span className="sr-only">Toggle mobile navigation</span>
			<svg
				width="20"
				height="14"
				viewBox="0 0 20 14"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					id="mobile-navigation-line-0"
					d="M1 7H19"
					stroke="white"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					id="mobile-navigation-line-1"
					d="M1 1H19"
					stroke="white"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					id="mobile-navigation-line-2"
					d="M1 13H19"
					stroke="white"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</button>
	);
};

export const PrimaryMobileNavigation: FC = () => {
	return (
		<nav className="m-[16rem] sticky top-[97rem] left-0 rounded-[8rem] bg-[var(--white-transparent-10)] backdrop-blur-[40rem] pt-[18rem] pr-[16rem] pb-[18rem] pl-[16rem] block">
			<ul className="flex flex-col items-start gap-y-[4rem]">
				<li>
					<a className="uppercase p-[10rem] text-white-50 text-[14rem]" href="#">
						Home
					</a>
				</li>
				<li>
					<a className="uppercase p-[10rem] text-white-50 text-[14rem]" href="#">
						Catalogue
					</a>
				</li>
				<li>
					<a className="uppercase p-[10rem] text-white-50 text-[14rem]" href="#">
						Catalogue
					</a>
				</li>
				<li>
					<a className="uppercase p-[10rem] text-white-50 text-[14rem]" href="#">
						Popular
					</a>
				</li>
				<li>
					<a className="uppercase p-[10rem] text-white-50 text-[14rem]" href="#">
						Contacts
					</a>
				</li>
			</ul>
		</nav>
	);
};

export const SecondaryMobileNavigation: FC = () => {
	return (
		<nav className="rounded-[8rem] bg-[var(--white-transparent-10)] backdrop-blur-[40rem] pt-[18rem] pr-[16rem] pb-[18rem] pl-[16rem]">
			<ul className="flex flex-row items-center gap-x-[16rem]">
				<li>
					<a href="#">
						<span className="sr-only">Profile</span>
						<svg
							width="16"
							height="20"
							viewBox="0 0 16 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M7.88866 10.619H7.92066C10.8487 10.619 13.2297 8.238 13.2297 5.31C13.2297 2.382 10.8487 0 7.92066 0C4.99166 0 2.60966 2.382 2.60966 5.307C2.59966 8.227 4.96666 10.61 7.88866 10.619ZM4.03766 5.31C4.03766 3.169 5.77966 1.428 7.92066 1.428C10.0607 1.428 11.8017 3.169 11.8017 5.31C11.8017 7.45 10.0607 9.192 7.92066 9.192H7.89166C5.75966 9.184 4.03066 7.444 4.03766 5.31Z"
								fill="#1F1F1F"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M-0.000358582 16.1733C-0.000358582 19.8703 5.96164 19.8703 7.92064 19.8703C11.3196 19.8703 15.8396 19.4893 15.8396 16.1933C15.8396 12.4963 9.87964 12.4963 7.92064 12.4963C4.52064 12.4963 -0.000358582 12.8773 -0.000358582 16.1733ZM1.49964 16.1733C1.49964 14.7283 3.65964 13.9963 7.92064 13.9963C12.1806 13.9963 14.3396 14.7353 14.3396 16.1933C14.3396 17.6383 12.1806 18.3703 7.92064 18.3703C3.65964 18.3703 1.49964 17.6313 1.49964 16.1733Z"
								fill="#1F1F1F"
							/>
						</svg>
					</a>
				</li>
				<li>
					<a href="#">
						<span className="sr-only">Cart</span>
						<div className="relative">
							<svg
								width="20"
								height="21"
								viewBox="0 0 20 21"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<mask
									id="mask0_26_463"
									style={{ maskType: "luminance" }}
									maskUnits="userSpaceOnUse"
									x="-1"
									y="4"
									width="21"
									height="17"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M-0.000244141 4.54053H19.5856V20.7221H-0.000244141V4.54053Z"
										fill="white"
									/>
								</mask>
								<g mask="url(#mask0_26_463)">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M4.71526 6.04053C4.27426 6.04053 2.80026 6.21853 2.37726 8.50253L1.60526 14.5025C1.35426 16.1855 1.54826 17.4035 2.18326 18.1405C2.81026 18.8685 3.93226 19.2225 5.61226 19.2225H13.9603C15.0083 19.2225 16.4393 19.0135 17.3033 18.0155C17.9893 17.2245 18.2253 16.0465 18.0053 14.5135L17.2263 8.46153C16.8943 6.97053 16.0183 6.04053 14.8943 6.04053H4.71526ZM13.9603 20.7225H5.61226C3.46926 20.7225 1.97626 20.1975 1.04726 19.1185C0.114256 18.0365 -0.197744 16.4135 0.120256 14.2955L0.896256 8.26953C1.40626 5.50653 3.27126 4.54053 4.71526 4.54053H14.8943C16.3443 4.54053 18.1073 5.50353 18.7023 8.20453L19.4913 14.3115C19.7743 16.2825 19.4203 17.8635 18.4373 18.9975C17.4593 20.1255 15.9113 20.7225 13.9603 20.7225Z"
										fill="#1F1F1F"
									/>
								</g>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M14.0976 5.82049C13.6836 5.82049 13.3476 5.48449 13.3476 5.07049C13.3476 3.10149 11.7456 1.50049 9.77756 1.50049H9.76256C8.82156 1.50049 7.90456 1.87949 7.23956 2.54049C6.57156 3.20549 6.18856 4.12849 6.18856 5.07049C6.18856 5.48449 5.85256 5.82049 5.43856 5.82049C5.02456 5.82049 4.68856 5.48449 4.68856 5.07049C4.68856 3.73149 5.23256 2.42249 6.18056 1.47749C7.12556 0.538488 8.42856 0.000488281 9.75956 0.000488281H9.78056C12.5736 0.000488281 14.8476 2.27449 14.8476 5.07049C14.8476 5.48449 14.5116 5.82049 14.0976 5.82049Z"
									fill="#1F1F1F"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12.7429 10.3242H12.6969C12.2829 10.3242 11.9469 9.98822 11.9469 9.57422C11.9469 9.16022 12.2829 8.82422 12.6969 8.82422C13.1109 8.82422 13.4699 9.16022 13.4699 9.57422C13.4699 9.98822 13.1569 10.3242 12.7429 10.3242Z"
									fill="#1F1F1F"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M6.91187 10.3242H6.86687C6.45287 10.3242 6.11687 9.98822 6.11687 9.57422C6.11687 9.16022 6.45287 8.82422 6.86687 8.82422C7.28087 8.82422 7.63987 9.16022 7.63987 9.57422C7.63987 9.98822 7.32587 10.3242 6.91187 10.3242Z"
									fill="#1F1F1F"
								/>
							</svg>
							<div className="absolute top-[-2rem] right-[-2rem]">
								<svg
									width="12"
									height="12"
									viewBox="0 0 12 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle cx="6.0001" cy="5.99993" r="5.99993" fill="#EF233C" />
								</svg>
								<p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-[8rem] leading-[100%] text-white-50">
									0
								</p>
							</div>
						</div>
					</a>
				</li>
			</ul>
		</nav>
	);
};
