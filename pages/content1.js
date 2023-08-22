import Navbar from "../components/ThreadsColMid/navbar";
import PageContent from "../components/ThreadsColMid/page-content";
import styles from "./content1.module.css";
const Content1 = () => {
  return (
    <div className={styles.content}>
      <div className={styles.feed}>
        <Navbar />
        <PageContent />
      </div>
    </div>
  );
};

export default Content1;
