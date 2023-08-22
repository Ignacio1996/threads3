import styles from "./thread.module.css";
const Thread = ({ likeCount, showReactions, threadContentText }) => {
  return (
    <div className={styles.thread}>
      <div className={styles.thread1}>
        <div className={styles.thread2}>
          <img className={styles.avatarIcon} alt="" src="/avatar6.svg" />
        </div>
        <div className={styles.infosActions}>
          <div className={styles.info}>
            <div className={styles.headingInfos}>
              <div className={styles.aura}>aura</div>
              <div className={styles.rightInfos}>
                <div className={styles.min}>2min</div>
                <div className={styles.dots}>
                  <div className={styles.dotsChild} />
                  <div className={styles.dotsChild} />
                  <div className={styles.dotsChild} />
                </div>
              </div>
            </div>
            <div className={styles.iveBeenExploring}>{threadContentText}</div>
          </div>
          <div className={styles.actions}>
            <img className={styles.likeIcon} alt="" src="/like3.svg" />
          </div>
          {showReactions && (
            <div className={styles.reactions}>
              <div className={styles.likes}>{likeCount}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Thread;
