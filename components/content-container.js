import UserInfo from "./user-info";
import Feed from "./feed";
import TrendingCol from "./trending-col";
import styles from "./content-container.module.css";
const ContentContainer = () => {
  return (
    <section className={styles.contentcontainer}>
      <UserInfo />
      <Feed />
      <TrendingCol />
    </section>
  );
};

export default ContentContainer;
