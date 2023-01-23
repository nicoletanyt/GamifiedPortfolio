import React, { useState } from "react";
import Header from "./Header";
import DoneBtn from "./DoneBtn";
import { ACHIEVEMENTS } from "./Achievements";
import { FiTriangle } from "react-icons/fi";
import ItemDetails from "./ItemDetails";
import InventoryItemWrapper from "./InventoryItemWrapper";

export default function Inventory({ visibility, hidePopup, unlocked }) {
  const [showDetails, setShowDetails] = useState(false);
  const [detailIndex, setDetailIndex] = useState(-1);

  function handleShowDetails(index) {
    setShowDetails(true);
    setDetailIndex(index);
  }

  return (
    <div
      className={visibility ? "overlay popUp show inventory" : "overlay hidden"}
    >
      <div className="navigationBar">
        <FiTriangle
          className={showDetails ? "backBtn" : "backBtn noPointer noToggle"}
          onClick={() => {
            setShowDetails(false);
          }}
        />
        <Header
          text={showDetails ? ACHIEVEMENTS[detailIndex].name : "Your Inventory"}
          bio={showDetails ? ACHIEVEMENTS[detailIndex].bio : null}
        />
      </div>
      {showDetails ? (
        <div className={showDetails ? "details" : "hidden"}>
          {ACHIEVEMENTS[detailIndex].sections.map((sectionInfo, index) => (
            <ItemDetails key={index} sectionInfo={sectionInfo} />
          ))}
        </div>
      ) : (
        <InventoryItemWrapper
          unlocked={unlocked}
          handleShowDetails={handleShowDetails}
          showDetails={showDetails}
        />
      )}

      <DoneBtn
        show={true}
        onClick={() => {
          hidePopup("INVENTORY");
        }}
        text={"Close"}
      />
    </div>
  );
}
