"use client";

import { FC } from "react";

import { Loader } from "@shared/ui/loader/ui";
import { with3D } from "@shared/lib/hocs";

const ThreeDLoader = with3D(Loader);

export const HomePage: FC = () => {
	return (
		<main className="relative z-[20]">
			<h1>Home Page</h1>
			<ThreeDLoader width="353rem" height="312rem" />
		</main>
	);
};
