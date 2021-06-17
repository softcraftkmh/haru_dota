/* eslint-disable @next/next/no-img-element */
import { format, formatDuration } from 'date-fns';
import { motion } from 'framer-motion';
import { Match } from 'models/data';

import styles from 'styles/components/MatchInfo.module.scss';

type MatchInfoProps = {
	match: Match;
};

const MatchInfo: React.FC<MatchInfoProps> = ({ match }) => {
	const onErrorImage = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
		e.currentTarget.src = '/images/team/default.svg';
	};

	return (
		<motion.section
			className={styles.container}
			key={match.match_id}
			layout
			transition={{
				type: 'Inertia',
				duration: 1,
			}}
		>
			<time className={styles.time}>
				{format(match.start_time * 1000, 'dd-MMM  hh:mm aa')} (
				{formatDuration({ minutes: +(match.duration / 60).toFixed(0) })})
			</time>
			<div className={styles.info}>
				<div className={styles.team__radiant}>
					<img
						className={styles.team__logo}
						src={`/images/team/${match.radiant_name}.png`}
						alt="Radiant"
						onError={onErrorImage}
					/>
					<div className={styles.team__info}>
						<p>
							{match.radiant_name} {match.radiant_win && '(Winner)'}
						</p>
						<p>{match.radiant_score} Kills</p>
					</div>
				</div>
				<div className={styles.team__dire}>
					<div className={styles.team__info}>
						<p>
							{match.dire_name} {!match.radiant_win && '(Winner)'}
						</p>
						<p>{match.dire_score} Kills</p>
					</div>
					<img
						className={styles.team__logo}
						src={`/images/team/${match.dire_name}.png`}
						alt="Radiant"
						onError={onErrorImage}
					/>
				</div>
			</div>
			<div>
				<p className={styles.league}>{match.league_name}</p>
			</div>
		</motion.section>
	);
};

export default MatchInfo;
