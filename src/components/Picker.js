import React, { useState } from "react";
import "../App.css";
import Card from "./Card";
import Header from "./Header";
import { ACHIEVEMENTS } from "./Achievements";
import DoneBtn from "./DoneBtn";

//Pick which achievement to view. "Popup".
export default function Picker({ visibility, hidePopup }) {
  const [isOpened, setIsOpened] = useState(false);

  function handleClick() {
    //User clicked on (opened) one of the gifts
    setIsOpened(true);
  }

  return (
    <div
      className={visibility ? "overlay picker show" : "overlay picker hidden"}
    >
      <Header />
      <div className="cardContainer" onClick={handleClick}>
        {ACHIEVEMENTS.map((achievement, index) => (
          <Card
            key={index}
            index={index}
            achievement={achievement}
            isOpened={isOpened}
          />
        ))}
      </div>
      <DoneBtn show={isOpened} onClick={hidePopup} />
    </div>
  );
}
