import { Match } from 'models/data';
import useSWR from 'swr';

import AppSEO from './components/shared/SEO';

const index = () => {
	const { data } = useSWR<Match[]>('/proMatches');
	console.log('-> ~ index ~ data', data);

	return (
		<>
			<AppSEO />
			Hi, this is the home page.
		</>
	);
};

export default index;
