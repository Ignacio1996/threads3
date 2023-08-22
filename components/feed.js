import ThreadInput from "./thread-input";
import Thread from "./thread";
import styles from "./feed.module.css";
const Feed = () => {
  return (
    <div className={styles.feed}>
      <ThreadInput />
      <Thread
        threadContentText="I’ve been exploring ways of setting up variables in Figma if you have two different sets of global colours for light and dark themes with multiple brands. If you want to learn more about it, DM me, please"
        showLikes
        username="aura"
        timeSpent="2min"
      />
      <div className={styles.thread}>
        <div className={styles.thread1}>
          <div className={styles.thread2}>
            <img className={styles.avatarIcon} alt="" src="/avatar2.svg" />
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
              <div className={styles.iveBeenExploring}>
                guys, just see that now we have a "Save for Later" I've been
                waiting for this so much
              </div>
            </div>
            <div className={styles.actions}>
              <img className={styles.likeIcon} alt="" src="/like3.svg" />
            </div>
            <div className={styles.reactions}>
              <div className={styles.likes}>2 Likes</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.thread}>
        <div className={styles.thread1}>
          <div className={styles.thread2}>
            <img className={styles.avatarIcon} alt="" src="/avatar3.svg" />
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
              <div className={styles.iveBeenExploring}>
                Hold onto your seats, folks! The new iPhone is coming in hot,
                ready to rock our world! Imagine the stunning photos and videos
                I'll capture with this beauty! 📸💥 #BringItOnNewiPhone
                #BeyondExcited
              </div>
            </div>
            <div className={styles.actions}>
              <img className={styles.likeIcon} alt="" src="/like3.svg" />
            </div>
            <div className={styles.reactions1}>
              <div className={styles.likes}>16 Likes</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.thread}>
        <div className={styles.thread1}>
          <div className={styles.thread2}>
            <img className={styles.avatarIcon} alt="" src="/avatar4.svg" />
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
              <div className={styles.iveBeenExploring}>
                guys, just see that now we have a "Save for Later" I've been
                waiting for this so much
              </div>
            </div>
            <div className={styles.actions}>
              <img className={styles.likeIcon} alt="" src="/like3.svg" />
            </div>
            <div className={styles.reactions}>
              <div className={styles.likes}>2 Likes</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.thread}>
        <div className={styles.thread1}>
          <div className={styles.thread2}>
            <img className={styles.avatarIcon} alt="" src="/avatar5.svg" />
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
              <div className={styles.iveBeenExploring}>
                Hold onto your seats, folks! The new iPhone is coming in hot,
                ready to rock our world! Imagine the stunning photos and videos
                I'll capture with this beauty! 📸💥 #BringItOnNewiPhone
                #BeyondExcited
              </div>
            </div>
            <div className={styles.actions}>
              <img className={styles.likeIcon} alt="" src="/like3.svg" />
            </div>
            <div className={styles.reactions1}>
              <div className={styles.likes}>16 Likes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
