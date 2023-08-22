import { useMemo } from "react";
import styles from "./thread.module.css";
const Thread = ({
  avatar,
  temporDolorProidentDuisIn,
  like,
  respostas,
  showReactions,
  threadPosition,
  threadAlignSelf,
  threadBorderBottom,
  threadWidth,
  threadFlexShrink,
  threadFlex,
  auraColor,
  minColor,
  ellipseDivBackgroundColor,
  ellipseDivBackgroundColor1,
  ellipseDivBackgroundColor2,
  temporDolorProidentColor,
}) => {
  const threadStyle = useMemo(() => {
    return {
      position: threadPosition,
      alignSelf: threadAlignSelf,
    };
  }, [threadPosition, threadAlignSelf]);

  const thread1Style = useMemo(() => {
    return {
      borderBottom: threadBorderBottom,
      width: threadWidth,
      flexShrink: threadFlexShrink,
      flex: threadFlex,
    };
  }, [threadBorderBottom, threadWidth, threadFlexShrink, threadFlex]);

  const auraStyle = useMemo(() => {
    return {
      color: auraColor,
    };
  }, [auraColor]);

  const minStyle = useMemo(() => {
    return {
      color: minColor,
    };
  }, [minColor]);

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

  const temporDolorProidentStyle = useMemo(() => {
    return {
      color: temporDolorProidentColor,
    };
  }, [temporDolorProidentColor]);

  return (
    <div className={styles.thread} style={threadStyle}>
      <div className={styles.thread1} style={thread1Style}>
        <div className={styles.thread2}>
          <img className={styles.avatarIcon} alt="" src={avatar} />
        </div>
        <div className={styles.infosActions}>
          <div className={styles.info}>
            <div className={styles.headingInfos}>
              <div className={styles.aura} style={auraStyle}>
                aura
              </div>
              <div className={styles.rightInfos}>
                <div className={styles.min} style={minStyle}>
                  2min
                </div>
                <div className={styles.dots}>
                  <div className={styles.dotsChild} style={ellipseDivStyle} />
                  <div className={styles.dotsChild} style={ellipseDiv1Style} />
                  <div className={styles.dotsChild} style={ellipseDiv2Style} />
                </div>
              </div>
            </div>
            <div
              className={styles.temporDolorProident}
              style={temporDolorProidentStyle}
            >
              {temporDolorProidentDuisIn}
            </div>
          </div>
          <div className={styles.actions}>
            <img className={styles.likeIcon} alt="" src={like} />
          </div>
          {showReactions && (
            <div className={styles.reactions}>
              <div className={styles.respostas}>{respostas}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Thread;
