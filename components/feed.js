import ThreadInput from "./thread-input";
import Thread from "./thread";
import styles from "./feed.module.css";
const Feed = () => {
  return (
    <div className={styles.feed}>
      <ThreadInput />
      <Thread
        avatar="/avatar2.svg"
        temporDolorProidentDuisIn="I’ve been exploring ways of setting up variables in Figma if you have two different sets of global colours for light and dark themes with multiple brands. If you want to learn more about it, DM me, please"
        like="/like3.svg"
        respostas="7 Likes"
        showReactions
        threadPosition="unset"
        threadAlignSelf="stretch"
        threadBorderBottom="1px solid var(--color-darkslategray)"
        threadWidth="unset"
        threadFlexShrink="unset"
        threadFlex="1"
        auraColor="#fff"
        minColor="#616161"
        ellipseDivBackgroundColor="#fff"
        ellipseDivBackgroundColor1="#fff"
        ellipseDivBackgroundColor2="#fff"
        temporDolorProidentColor="#fff"
      />
      <Thread
        avatar="/avatar3.svg"
        temporDolorProidentDuisIn={`guys, just see that now we have a "Save for Later" I've been waiting for this so much`}
        like="/like3.svg"
        respostas="2 Likes"
        showReactions={false}
        threadPosition="unset"
        threadAlignSelf="stretch"
        threadBorderBottom="1px solid var(--color-darkslategray)"
        threadWidth="unset"
        threadFlexShrink="unset"
        threadFlex="1"
        auraColor="#fff"
        minColor="#616161"
        ellipseDivBackgroundColor="#fff"
        ellipseDivBackgroundColor1="#fff"
        ellipseDivBackgroundColor2="#fff"
        temporDolorProidentColor="#fff"
      />
      <Thread
        avatar="/avatar4.svg"
        temporDolorProidentDuisIn="Hold onto your seats, folks! The new iPhone is coming in hot, ready to rock our world! Imagine the stunning photos and videos I'll capture with this beauty! 📸💥 #BringItOnNewiPhone #BeyondExcited"
        like="/like3.svg"
        respostas="16 Likes"
        showReactions
        threadPosition="unset"
        threadAlignSelf="stretch"
        threadBorderBottom="1px solid var(--color-darkslategray)"
        threadWidth="unset"
        threadFlexShrink="unset"
        threadFlex="1"
        auraColor="#fff"
        minColor="#616161"
        ellipseDivBackgroundColor="#fff"
        ellipseDivBackgroundColor1="#fff"
        ellipseDivBackgroundColor2="#fff"
        temporDolorProidentColor="#fff"
      />
      <Thread
        avatar="/avatar5.svg"
        temporDolorProidentDuisIn={`guys, just see that now we have a "Save for Later" I've been waiting for this so much`}
        like="/like3.svg"
        respostas="2 Likes"
        showReactions={false}
        threadPosition="unset"
        threadAlignSelf="stretch"
        threadBorderBottom="1px solid var(--color-darkslategray)"
        threadWidth="unset"
        threadFlexShrink="unset"
        threadFlex="1"
        auraColor="#fff"
        minColor="#616161"
        ellipseDivBackgroundColor="#fff"
        ellipseDivBackgroundColor1="#fff"
        ellipseDivBackgroundColor2="#fff"
        temporDolorProidentColor="#fff"
      />
      <Thread
        avatar="/avatar6.svg"
        temporDolorProidentDuisIn="Hold onto your seats, folks! The new iPhone is coming in hot, ready to rock our world! Imagine the stunning photos and videos I'll capture with this beauty! 📸💥 #BringItOnNewiPhone #BeyondExcited"
        like="/like3.svg"
        respostas="16 Likes"
        showReactions
        threadPosition="unset"
        threadAlignSelf="stretch"
        threadBorderBottom="1px solid var(--color-darkslategray)"
        threadWidth="unset"
        threadFlexShrink="unset"
        threadFlex="1"
        auraColor="#fff"
        minColor="#616161"
        ellipseDivBackgroundColor="#fff"
        ellipseDivBackgroundColor1="#fff"
        ellipseDivBackgroundColor2="#fff"
        temporDolorProidentColor="#fff"
      />
    </div>
  );
};

export default Feed;
