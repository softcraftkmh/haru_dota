import MatchInfo from 'components/MatchInfo';

import { Match } from 'models/data';

import styles from 'styles/components/Matches.module.scss';

type MatchesProps = {
	matches: Match[];
};

const Matches: React.FC<MatchesProps> = ({ matches }) => {
	return (
		<div className={styles.container}>
			{matches.map((match) => (
				<MatchInfo key={match.match_id} match={match} />
			))}
		</div>
	);
};

export default Matches;
