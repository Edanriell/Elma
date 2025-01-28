import React, { type FC, Fragment, type MouseEvent, type ReactNode } from "react";

import { useDrawerStore } from "../lib/hooks";

type DrawerTriggerProps = {
	children: ReactNode;
};

export const DrawerTrigger: FC<DrawerTriggerProps> = ({ children }) => {
	const { openDrawer } = useDrawerStore();

	// Validates that children have a valid `data-content-id` attribute
	const validateChildren = (nodes: ReactNode): boolean => {
		return React.Children.toArray(nodes).some((node) => {
			if (!React.isValidElement(node)) return false;

			if (node.props?.["data-content-id"]) {
				return true;
			}

			if (node.props?.children) {
				return validateChildren(node.props.children);
			}

			return false;
		});
	};

	// Throw error if validation fails
	if (!validateChildren(children)) {
		throw new Error(
			`All children of Trigger must have a "data-content-id" attribute, either directly or nested.`
		);
	}

	// Handles click events for elements with `data-content-id`
	const handleDrawerOpen = (contentId: string) => {
		if (!contentId) return;
		openDrawer(contentId);
	};

	// Recursively processes child nodes
	const renderChildren = (nodes: ReactNode): ReactNode => {
		return React.Children.map(nodes, (child) => {
			if (!React.isValidElement(child)) {
				return child;
			}

			const contentId = child.props?.["data-content-id"];
			const existingOnClick = child.props?.onClick;

			if (contentId) {
				return React.cloneElement(child, {
					onClick: (
						event: MouseEvent<HTMLButtonElement | HTMLDivElement | HTMLAnchorElement>
					) => {
						// Call the original onClick if it exists
						existingOnClick?.(event);
						handleDrawerOpen(contentId);
					}
				} as Partial<typeof child.props>);
				// Explicitly cast new props to match the original type
			}

			// Recursively process nested children
			if (child.props?.children) {
				return React.cloneElement(child, {
					children: renderChildren(child.props.children)
				} as Partial<typeof child.props>);
				// Explicitly cast new props to match the original type
			}

			return child;
		});
	};

	return <Fragment>{renderChildren(children)}</Fragment>;
};
