import { Metadata } from "next";

type generateStaticMetadataParameters = {
	title: string;
	description: string;
	ogTitle: string;
	ogDescription: string;
};

export const generateStaticMetadata = ({
	title,
	description,
	ogTitle,
	ogDescription
}: generateStaticMetadataParameters): Metadata => {
	return {
		title,
		description,
		openGraph: {
			title: ogTitle,
			description: ogDescription
		}
	};
};
