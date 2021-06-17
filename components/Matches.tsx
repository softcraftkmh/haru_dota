import MatchInfo from 'components/MatchInfo';
import { useCycle } from 'framer-motion';
import shuffle from 'lodash/shuffle';
import { Match } from 'models/data';
import { useEffect } from 'react';
import styles from 'styles/components/Matches.module.scss';

type MatchesProps = {
	matches: Match[];
};

const Matches: React.FC<MatchesProps> = ({ matches }) => {
	const [infos, setInfos] = useCycle(
		shuffle(matches),
		shuffle(matches),
		shuffle(matches)
	);

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setInfos();
	// 	}, 8000);
	// }, [infos, setInfos]);

	return (
		<div className={styles.container}>
			{infos.map((info) => (
				<MatchInfo key={info.match_id} match={info} />
			))}
		</div>
	);
};

export default Matches;
