import React from "react";

export default function DoneBtn({ show, onClick }) {
  return (
    <div
      className={show ? "doneBtn togglePoint" : "hidden doneBtn"}
      onClick={onClick}
    >
      Done
    </div>
  );
}
