import React from "react";
import { BsFillBagFill } from "react-icons/bs";

export default function InventoryBtn() {
  return (
    <div className="toolbarBtn">
      <BsFillBagFill />
      <span className="toolbarName">Inventory</span>
    </div>
  );
}
