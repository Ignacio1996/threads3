import { useMemo } from "react";
import styles from "./thread.module.css";
const Thread = ({
  componentCode,
  likeCount,
  showReactions,
  auraColor,
  ellipseDivBackgroundColor,
  ellipseDivBackgroundColor1,
  ellipseDivBackgroundColor2,
  threadContentText,
}) => {
  const auraStyle = useMemo(() => {
    return {
      color: auraColor,
    };
  }, [auraColor]);

  const ellipseDivStyle = useMemo(() => {
    return {
      backgroundColor: ellipseDivBackgroundColor,
    };
  }, [ellipseDivBackgroundColor]);

  const ellipseDiv1Style = useMemo(() => {
    return {
      backgroundColor: ellipseDivBackgroundColor1,
    };
  }, [ellipseDivBackgroundColor1]);

  const ellipseDiv2Style = useMemo(() => {
    return {
      backgroundColor: ellipseDivBackgroundColor2,
    };
  }, [ellipseDivBackgroundColor2]);

  return (
    <div className={styles.thread}>
      <div className={styles.thread1}>
        <div className={styles.thread2}>
          <img className={styles.avatarIcon} alt="" src="/avatar6.svg" />
        </div>
        <div className={styles.infosActions}>
          <div className={styles.info}>
            <div className={styles.headingInfos}>
              <div className={styles.aura} style={auraStyle}>
                aura
              </div>
              <div className={styles.rightInfos}>
                <div className={styles.min}>2min</div>
                <div className={styles.dots}>
                  <div className={styles.dotsChild} style={ellipseDivStyle} />
                  <div className={styles.dotsChild} style={ellipseDiv1Style} />
                  <div className={styles.dotsChild} style={ellipseDiv2Style} />
                </div>
              </div>
            </div>
            <div className={styles.iveBeenExploring}>{threadContentText}</div>
          </div>
          <div className={styles.actions}>
            <img className={styles.likeIcon} alt="" src={componentCode} />
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
