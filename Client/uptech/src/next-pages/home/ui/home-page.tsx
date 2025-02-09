"use client";

import { FC } from "react";

import { Loader } from "@shared/ui/loader/ui";
import { with3D, withCursorFollow } from "@shared/lib/hocs";

const ThreeDLoaderWithCursorFollow = with3D(withCursorFollow(Loader));
export const HomePage: FC = () => {
	return (
		<main className="relative z-[20]">
			<h1>Home Page</h1>
			<ThreeDLoaderWithCursorFollow width="353rem" height="312rem" />
		</main>
	);
};
