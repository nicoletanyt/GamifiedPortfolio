import React from "react";

export default function DoneBtn({ show, onClick, text, cardsLength }) {
  return (
    <div
      className={
        show || cardsLength === 0 ? "doneBtn togglePoint" : "hidden doneBtn"
      }
      onClick={onClick}
    >
      {text}
    </div>
  );
}
