import styles from "styles/components/layout/index.module.scss";

import Header from "components/layout/header";

type LayoutProps = React.FC & {};
const Layout: LayoutProps = (props) => {
  return (
    <>
      <Header />
      <div className={styles.container}>{props.children}</div>
    </>
  );
};

export default Layout;
