import React, { useState } from "react";
import "../App.css";
import Card from "./Card";
import Header from "./Header";
import DoneBtn from "./DoneBtn";

//Pick which achievement to view. "Popup".
export default function Picker({ visibility, hidePopup, updateUnlock, cards }) {
  const [isOpened, setIsOpened] = useState(false);
  const [unlockIndex, setUnlockIndex] = useState(-1);
  const [revealedIndex, setRevealedIndex] = useState(-1);

  function handleOpen() {
    //User clicked on (opened) one of the gifts
    setIsOpened(true);
  }
  function getIndex(index) {
    setUnlockIndex(index);
  }
  function setReveal(index) {
    setRevealedIndex(index);
  }

  return (
    <div
      className={visibility ? "popUp overlay picker show" : "overlay hidden"}
    >
      <Header text={"Pick an achievement to unlock!"} />
      <div className="cardContainer" onClick={handleOpen}>
        {cards.map((achievement, index) => (
          <Card
            key={index}
            index={index}
            achievement={achievement}
            isOpened={isOpened}
            getIndex={getIndex}
            setReveal={setReveal}
            revealedIndex={revealedIndex}
          />
        ))}
      </div>
      <DoneBtn
        show={isOpened}
        onClick={() => {
          updateUnlock(unlockIndex); //updates index
          setIsOpened(false);
          console.log(unlockIndex);
          hidePopup("ACHIEVEMENTS");
        }}
        text={"Done"}
      />
    </div>
  );
}
