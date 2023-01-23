import React from "react";
import { ACHIEVEMENTS } from "./Achievements";

export default function InventoryItem({ item, handleClick, isShowDetails }) {
  //item should be a number
  return (
    <div
      className={isShowDetails ? "hidden" : "inventoryItem"}
      onClick={() => {
        handleClick(item);
      }}
    >
      {ACHIEVEMENTS[item].name}
      {ACHIEVEMENTS[item].icon}
      Read More {">"}
    </div>
  );
}
