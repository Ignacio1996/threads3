import styles from "./thread1.module.css";
const Thread = ({ threadContentText, showLikes, username, timeSpent }) => {
  return (
    <div className={styles.thread}>
      <div className={styles.thread1}>
        <div className={styles.thread2}>
          <img className={styles.avatarIcon} alt="" src="/avatar.svg" />
        </div>
        <div className={styles.infosActions}>
          <div className={styles.info}>
            <div className={styles.headingInfos}>
              <div className={styles.aura}>{username}</div>
              <div className={styles.rightInfos}>
                <div className={styles.min}>{timeSpent}</div>
                <div className={styles.dots}>
                  <div className={styles.dotsChild} />
                  <div className={styles.dotsChild} />
                  <div className={styles.dotsChild} />
                </div>
              </div>
            </div>
            <div className={styles.threadContentText}>{threadContentText}</div>
          </div>
          <div className={styles.actions}>
            <img className={styles.likeIcon} alt="" src="/like3.svg" />
          </div>
          <div className={styles.reactions}>
            {showLikes && <div className={styles.likes}>7 Likes</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thread;
