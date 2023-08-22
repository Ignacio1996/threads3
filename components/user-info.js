import styles from "./user-info.module.css";
const UserInfo = () => {
  return (
    <div className={styles.userinfo}>
      <div className={styles.infos}>
        <img className={styles.avatarBigIcon} alt="" src="/avatar-big1.svg" />
        <div className={styles.infos1}>
          <div className={styles.infos2}>
            <b className={styles.alissonRochinski}>Alisson Rochinski</b>
            <div className={styles.infos3}>
              <div className={styles.arochinski}>arochinski</div>
              <button className={styles.threadsnetWrapper}>
                <div className={styles.threadsnet}>threads.net</div>
              </button>
            </div>
          </div>
          <div className={styles.uiDesignerContainer}>
            <p className={styles.uiDesigner}>
              UI Designer | Let's redesign the world
            </p>
            <p className={styles.uiDesigner}>alisson.rochinski@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={styles.infos4}>
        <div className={styles.respostasECurtidas}>
          <div className={styles.seguidores}>2957 seguidores</div>
          <div className={styles.respostasECurtidasChild} />
          <div className={styles.seguidores}>rochinski.com</div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
