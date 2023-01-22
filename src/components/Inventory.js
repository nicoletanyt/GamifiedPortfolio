import React from "react";
import Header from "./Header";
import InventoryItem from "./InventoryItem";
import DoneBtn from "./DoneBtn";

export default function Inventory({ visibility, hidePopup, unlocked }) {
  return (
    <div
      className={visibility ? "overlay popUp show inventory" : "overlay hidden"}
    >
      <Header text={"Your Inventory"} />
      {/* {unlocked.map((item, index) => (
        <InventoryItem key={index} item={item} />
      ))} */}
      <div className="inventoryItemWrapper">
        <InventoryItem item={0} />
        <InventoryItem item={1} />
        <InventoryItem item={2} />
      </div>
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
