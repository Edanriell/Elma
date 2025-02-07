import React, { type FC, isValidElement, type ReactNode, useLayoutEffect } from "react";

import { useDrawerStore } from "../lib/hooks";

type DrawerContentProps = {
	children: ReactNode;
};

export const DrawerContent: FC<DrawerContentProps> = ({ children }) => {
	const { setDrawersContent } = useDrawerStore();

	useLayoutEffect(() => {
		const processedChildren = React.Children.toArray(children).map((child) => {
			if (!isValidElement(child)) {
				throw new Error(
					`<Drawer.Content> only accepts valid React elements as children. ` +
						`Encountered an invalid child: ${typeof child}.`
				);
			}

			// Type-safe extraction of the component name (handles string types and functional/class components)
			const childComponentName =
				typeof child.type === "string" // Native DOM elements like "div" or "span"
					? child.type
					: typeof child.type === "function" || typeof child.type === "object"
						? (child.type as React.FC).displayName ||
							(child.type as React.FC).name ||
							"Unknown"
						: "Unknown";

			// Check if the required `data-content-id` attribute is present
			if (!child.props?.["data-content-id"]) {
				throw new Error(
					`Each child of <Drawer.Content> must have a "data-content-id" attribute. ` +
						`The child component "${childComponentName}" is missing this attribute.`
				);
			}

			return child;
		});

		// Pass the validated and processed children to the drawer store
		setDrawersContent(processedChildren);
	}, [children]);

	return null;
};
