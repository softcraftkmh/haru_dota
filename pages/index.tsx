import useSWR from 'swr';

import AppSEO from 'components/shared/SEO';
import Matches from 'components/Matches';

import { Match } from 'models/data';

const index = () => {
	const { data } = useSWR<Match[]>('/proMatches');

	return (
		<>
			<AppSEO />
			{data && <Matches matches={data} />}
		</>
	);
};

export default index;
