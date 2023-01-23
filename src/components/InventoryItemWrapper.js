import React from "react";
import InventoryItem from "./InventoryItem";
import { ACHIEVEMENTS } from "./Achievements";

export default function InventoryItemWrapper({
  unlocked,
  handleShowDetails,
  showDetails,
}) {
  function showAll() {
    let arr = [];
    for (let i = 0; i < ACHIEVEMENTS.length; i++) {
      arr.push(i);
    }
    return arr;
  }

  return (
    <div className="inventoryItemWrapper">
      {unlocked.map((item, index) => (
        <InventoryItem
          key={index}
          item={item}
          handleClick={handleShowDetails}
          isShowDetails={showDetails}
        />
      ))}
      {/* {showAll().map((item, index) => (
        <InventoryItem
          key={index}
          item={item}
          handleClick={handleShowDetails}
          isShowDetails={showDetails}
        />
      ))} */}
    </div>
  );
}
