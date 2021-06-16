import useSWR from 'swr';

import AppSEO from 'components/shared/SEO';
import Matches from 'components/Matches';

import { Match } from 'models/data';
import { GetStaticProps } from 'next';

type indexProps = {
	matches: Match[];
};

const index: React.FC<indexProps> = ({ matches }) => {
	const { data } = useSWR<Match[]>('/proMatches', {
		initialData: matches,
	});

	return (
		<>
			<AppSEO />
			{data && <Matches matches={data.splice(0, 12)} />}
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const matches = await await (
		await fetch(`${process.env.NEXT_PUBLIC_OPEN_DOTA_API}/proMatches`)
	).json();
	return {
		props: { matches },
		// will revalidate when a request comes in, at most once every 15 minutes
		revalidate: 60 * 15,
	};
};

export default index;
