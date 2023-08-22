import Nav from "../components/nav";
import ContentContainer from "../components/content-container";
import styles from "./index.module.css";
const Content = () => {
  return (
    <div className={styles.content}>
      <main className={styles.feed}>
        <Nav />
        <ContentContainer />
      </main>
    </div>
  );
};

export default Content;
