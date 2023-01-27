import React from "react";
import { BsQuestionCircle } from "react-icons/bs";

export default function HelpBtn({ handleClick }) {
  return (
    <div
      className="toolbarBtn"
      onClick={() => {
        handleClick();
      }}
    >
      <BsQuestionCircle />
      <span className="toolbarName">Help</span>
    </div>
  );
}
