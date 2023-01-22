import React from "react";
import CheckBtn from "./CheckBtn";
import { getDeepCopy } from "./Board";

export default function Sidebar({ done, sudokuBoard, onFinished }) {
  return (
    <div className="sidebar">
      <div>
        <h2>Your Missions: </h2>
        <ul>
          <li className={done[0] ? "done" : null}>
            Fill up all the 1s in the board
          </li>
        </ul>
      </div>

      <CheckBtn grid={getDeepCopy(sudokuBoard)} onClicked={onFinished} />
    </div>
  );
}
