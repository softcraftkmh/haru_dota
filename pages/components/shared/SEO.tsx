import { NextSeo } from 'next-seo';

type AppSEOProps = {
	title?: string;
	image?: string;
	description?: string;
	url?: string;
	noIndex?: boolean;
};

const DEFAULT: AppSEOProps = {
	title: 'Haru DOTA',
	description: 'Your DOTA 2 partner.',
	url: 'https://www.harudota.vercel.app',
	image:
		'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota2_social.jpg',
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
