import React, { useState } from "react";
import "../App.css";
import Card from "./Card";
import Header from "./Header";
import { ACHIEVEMENTS } from "./Achievements";
import DoneBtn from "./DoneBtn";

//Pick which achievement to view. "Popup".
export default function Picker({ visibility, hidePopup, updateUnlock }) {
  const [isOpened, setIsOpened] = useState(false);

  function handleClick() {
    //User clicked on (opened) one of the gifts
    setIsOpened(true);
  }

  return (
    <div
      className={visibility ? "popUp overlay picker show" : "overlay hidden"}
    >
      <Header text={"Pick an achievement to unlock!"} />
      <div className="cardContainer" onClick={handleClick}>
        {ACHIEVEMENTS.map((achievement, index) => (
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
