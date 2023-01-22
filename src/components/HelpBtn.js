import React from "react";
import { BsQuestionCircle } from "react-icons/bs";

export default function HelpBtn() {
  return (
    <div className="toolbarBtn">
      <BsQuestionCircle />
      <span className="toolbarName">Help</span>
    </div>
  );
}
