import React from "react";
import { BsFillBagFill } from "react-icons/bs";

export default function InventoryBtn({ handleClick }) {
  return (
    <div className="toolbarBtn" onClick={handleClick}>
      <BsFillBagFill />
      <span className="toolbarName">Inventory</span>
    </div>
  );
}
