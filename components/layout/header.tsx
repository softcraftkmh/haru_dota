import styles from "styles/components/layout/header.module.scss";

const Header = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.content}>
					<a href="" className={styles.title}>
						Header
					</a>
				</div>
			</div>
			<div className={styles.placeholder} />
		</>
	);
};

export default Header;
