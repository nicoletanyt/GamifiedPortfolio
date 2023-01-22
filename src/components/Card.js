import React, { useState } from "react";
import "../App.css";
import { AiFillGift } from "react-icons/ai";

export default function Card({ achievement, isOpened, updateUnlock, index }) {
  const [isRevealed, setIsRevealed] = useState(false);
  function handleClick() {
    if (!isOpened) {
      setIsRevealed(true);
      updateUnlock(index);
      alert(
        "You have unlocked a new achievement, head to your inventory on your bottom right to view!"
      );
    }
  }

  return (
    <div
      className={isOpened ? "noPointer card togglePoint" : "card togglePoint"}
      onClick={handleClick}
    >
      <AiFillGift className={isRevealed ? "hidden giftIcon" : "giftIcon"} />
      <div
        className={isRevealed ? "overlay achievementCard" : "hidden overlay"}
      >
        {achievement.icon}
        {achievement.name}
      </div>
    </div>
  );
}
