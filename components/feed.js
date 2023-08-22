import ThreadInput from "./thread-input";
import Thread from "./thread";
import styles from "./feed.module.css";
const Feed = () => {
  return (
    <div className={styles.feed}>
      <ThreadInput />
      <Thread
        componentCode="/like3.svg"
        likeCount="7 Likes"
        showReactions
        auraColor="#fff"
        ellipseDivBackgroundColor="#fff"
        ellipseDivBackgroundColor1="#fff"
        ellipseDivBackgroundColor2="#fff"
        threadContentText="I’ve been exploring ways of setting up variables in Figma if you have two different sets of global colours for light and dark themes with multiple brands. If you want to learn more about it, DM me, please"
      />
      <Thread
        componentCode="/like3.svg"
        likeCount="2 Likes"
        showReactions={false}
        auraColor="#fff"
        ellipseDivBackgroundColor="#fff"
        ellipseDivBackgroundColor1="#fff"
        ellipseDivBackgroundColor2="#fff"
        threadContentText={`guys, just see that now we have a "Save for Later" I've been waiting for this so much`}
      />
      <Thread
        componentCode="/like3.svg"
        likeCount="16 Likes"
        showReactions
        auraColor="#fff"
        ellipseDivBackgroundColor="#fff"
        ellipseDivBackgroundColor1="#fff"
        ellipseDivBackgroundColor2="#fff"
        threadContentText="Hold onto your seats, folks! The new iPhone is coming in hot, ready to rock our world! Imagine the stunning photos and videos I'll capture with this beauty! 📸💥 #BringItOnNewiPhone #BeyondExcited"
      />
      <Thread
        componentCode="/like3.svg"
        likeCount="2 Likes"
        showReactions={false}
        auraColor="#fff"
        ellipseDivBackgroundColor="#fff"
        ellipseDivBackgroundColor1="#fff"
        ellipseDivBackgroundColor2="#fff"
        threadContentText={`guys, just see that now we have a "Save for Later" I've been waiting for this so much`}
      />
      <Thread
        componentCode="/like3.svg"
        likeCount="16 Likes"
        showReactions
        auraColor="#fff"
        ellipseDivBackgroundColor="#fff"
        ellipseDivBackgroundColor1="#fff"
        ellipseDivBackgroundColor2="#fff"
        threadContentText="Hold onto your seats, folks! The new iPhone is coming in hot, ready to rock our world! Imagine the stunning photos and videos I'll capture with this beauty! 📸💥 #BringItOnNewiPhone #BeyondExcited"
      />
    </div>
  );
};

export default Feed;
