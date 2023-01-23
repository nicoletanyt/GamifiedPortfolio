import React, { useState } from "react";
import "../App.css";
import Card from "./Card";
import Header from "./Header";
import { ACHIEVEMENTS } from "./Achievements";
import DoneBtn from "./DoneBtn";

//Pick which achievement to view. "Popup".
export default function Picker({
  visibility,
  hidePopup,
  updateUnlock,
  unlocked,
}) {
  const [isOpened, setIsOpened] = useState(false);

  function handleClick() {
    //User clicked on (opened) one of the gifts
    setIsOpened(true);
  }

  function getRndInteger(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum)) + minimum;
  }

  function limitCards() {
    let currentAchievements = [];
    let cards = [];
    for (let i = 0; i < ACHIEVEMENTS.length; i++) {
      currentAchievements.push(i);
    }
    let remaining = currentAchievements.filter(function (value, index, arr) {
      return unlocked.indexOf(value) === -1; //gets index of those that haven't been unlocked
    });
    for (let i = 0; i < 3; i++) {
      let randomIndex = getRndInteger(
        remaining[0],
        remaining[remaining.length - 1]
      );
      cards.push(ACHIEVEMENTS[randomIndex]);
      remaining.splice(randomIndex, 1);
    }
    return cards;
  }

  return (
    <div
      className={visibility ? "popUp overlay picker show" : "overlay hidden"}
    >
      <Header text={"Pick an achievement to unlock!"} />
      <div className="cardContainer" onClick={handleClick}>
        {limitCards().map((achievement, index) => (
          <Card
            key={index}
            index={index}
            achievement={achievement}
            isOpened={isOpened}
            updateUnlock={updateUnlock}
          />
        ))}
      </div>
      <DoneBtn
        show={isOpened}
        onClick={() => {
          hidePopup("ACHIEVEMENTS");
        }}
        text={"Done"}
      />
    </div>
  );
}
