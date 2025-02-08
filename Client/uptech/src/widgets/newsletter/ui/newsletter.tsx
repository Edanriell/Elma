import { type FC } from "react";

import { Button } from "@shared/ui/button/ui";

export const Newsletter: FC = () => {
	return (
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
					className="tablet:min-w-[149rem]"
					type="submit"
				>
					Subscribe
				</Button>
			</form>
		</div>
	);
};
