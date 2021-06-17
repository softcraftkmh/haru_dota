import Link from 'next/link';
import styles from 'styles/components/layout/header.module.scss';

const Header = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.content}>
					<Link href="/">
						<a className={styles.title}>春 DOTA</a>
					</Link>

					<Link href="/gallery">
						<a className={styles.title}>Gallery</a>
					</Link>
				</div>
			</div>
			<div className={styles.placeholder} />
		</>
	);
};

export default Header;
