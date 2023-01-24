import React, { useState } from "react";
import "../App.css";
import { AiFillGift } from "react-icons/ai";
import { ACHIEVEMENTS } from "./Achievements";

export default function Card({
  achievement,
  isOpened,
  updateUnlock,
  index,
  getIndex,
  setReveal,
  revealedIndex,
}) {
  // const [isRevealed, setIsRevealed] = useState();
  function handleClick() {
    if (!isOpened) {
      console.log(achievement);
      // setIsRevealed(true);
      setReveal(ACHIEVEMENTS.indexOf(achievement));
      getIndex(ACHIEVEMENTS.indexOf(achievement));
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
      <AiFillGift
        className={
          revealedIndex === ACHIEVEMENTS.indexOf(achievement)
            ? "hidden giftIcon"
            : "giftIcon"
        }
      />
      <div
        className={
          revealedIndex === ACHIEVEMENTS.indexOf(achievement)
            ? "overlay achievementCard"
            : "hidden overlay"
        }
      >
        {achievement.icon}
        {achievement.name}
      </div>
    </div>
  );
}
