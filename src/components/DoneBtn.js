import React from "react";

export default function DoneBtn({ show, onClick, text }) {
  return (
    <div
      className={show ? "doneBtn togglePoint" : "hidden doneBtn"}
      onClick={onClick}
    >
      {text}
    </div>
  );
}
