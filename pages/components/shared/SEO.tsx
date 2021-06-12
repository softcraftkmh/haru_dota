import { NextSeo } from "next-seo";

type AppSEOProps = {
	title?: string;
	image?: string;
	description?: string;
	url?: string;
	noIndex?: boolean;
};

const DEFAULT: AppSEOProps = {
	title: "Template",
	description: "This is the template app.",
	url: "https://www.template.vercel.app",
	image:
		"https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VzaGl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
};

const AppSEO = ({
	title,
	image,
	description,
	url,
	noIndex = false,
}: AppSEOProps) => {
	return (
		<NextSeo
			title={title ? `${title} | ${DEFAULT.title}` : DEFAULT.title}
			description={description ? description : DEFAULT.description}
			canonical={url ? url : DEFAULT.description}
			noindex={noIndex}
			openGraph={{
				url: url ? `${DEFAULT.url}${url}` : `${DEFAULT.url}/`,
				title: title ? `${title} | ${DEFAULT.title}` : DEFAULT.title,
				description: description ? description : DEFAULT.description,
				images: [
					{
						url: image ? image : DEFAULT.image!,
						width: 400,
						height: 400,
						alt: DEFAULT.title,
					},
				],
			}}
		/>
	);
};

export default AppSEO;
