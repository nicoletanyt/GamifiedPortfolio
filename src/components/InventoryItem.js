import React from "react";
import { ACHIEVEMENTS } from "./Achievements";

export default function InventoryItem({ item }) {
  //item should be a number
  return (
    <div className="inventoryItem">
      {ACHIEVEMENTS[item].name}
      {ACHIEVEMENTS[item].icon}
      Read More {">"}
    </div>
  );
}
