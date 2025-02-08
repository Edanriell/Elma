import { FC } from "react";

import { Loader } from "@shared/ui/loader/ui";

export const HomePage: FC = () => {
	return (
		<main className="relative z-[20]">
			<h1>Home Page</h1>
			<Loader />
		</main>
	);
};
