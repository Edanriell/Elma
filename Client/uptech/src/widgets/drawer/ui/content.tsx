import React, { FC, ReactNode, useLayoutEffect } from "react";

import { useDrawerStore } from "../lib";

type ContentProps = {
	children: ReactNode;
};

export const Content: FC<ContentProps> = ({ children }) => {
	const { setDrawersContent } = useDrawerStore();

	useLayoutEffect(() => {
		const processedChildren = React.Children.toArray(children).map((child) => {
			if (!React.isValidElement(child)) {
				throw new Error(
					`Invalid child: All children of <Drawer.Content> must be valid React elements.`
				);
			}

			// Ensure `data-content-id` exists
			if (!child.props?.["data-content-id"]) {
				throw new Error(
					`Each child of <Drawer.Content> must have a "data-content-id" attribute. Missing in child: ${child.type}`
				);
			}

			return child;
		});

		// Pass the validated and processed children to the drawer store
		setDrawersContent(processedChildren);
	}, [children]);

	return null;
};
