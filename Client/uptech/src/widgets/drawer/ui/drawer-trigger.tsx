import {
	Children,
	cloneElement,
	type FC,
	Fragment,
	isValidElement,
	type MouseEvent,
	type ReactNode
} from "react";

import { useDrawerStore } from "../lib/hooks";

type DrawerTriggerProps = {
	children: ReactNode;
};

export const DrawerTrigger: FC<DrawerTriggerProps> = ({ children }) => {
	const { openDrawer } = useDrawerStore();

	// Validates that children have a valid `data-content-id` attribute
	const validateChildren = (nodes: ReactNode): boolean => {
		return Children.toArray(nodes).some((node) => {
			if (!isValidElement(node)) return false;

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
			`<Drawer.Trigger> must contain at least one child with a "data-content-id" attribute. ` +
				`This attribute is required for identifying drawer content and must exist either directly at the top level or nested within child components.`
		);
	}

	// Handles click events for elements with `data-content-id`
	const handleDrawerOpen = (contentId: string) => {
		if (!contentId) return;
		openDrawer(contentId);
	};

	// Recursively processes child nodes
	const renderChildren = (nodes: ReactNode): ReactNode => {
		return Children.map(nodes, (child) => {
			if (!isValidElement(child)) {
				return child;
			}

			const contentId = child.props?.["data-content-id"];
			const existingOnClick = child.props?.onClick;

			if (contentId) {
				return cloneElement(child, {
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
				return cloneElement(child, {
					children: renderChildren(child.props.children)
				} as Partial<typeof child.props>);
				// Explicitly cast new props to match the original type
			}

			return child;
		});
	};

	return <Fragment>{renderChildren(children)}</Fragment>;
};
