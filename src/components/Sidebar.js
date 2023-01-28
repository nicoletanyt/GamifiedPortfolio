import React from "react";
import CheckBtn from "./CheckBtn";
import { getDeepCopy } from "./Board";

export default function Sidebar({ done, sudokuBoard, onFinished, numCheck }) {
  const missions = [
    "Fill up all the 1s in the board",
    "Fill up all the 2s in the board",
    "Fill up all the 3s in the board",
    "Fill up all the 4s in the board",
    "Fill up all the 5s in the board",
    "Fill up all the 6s in the board",
    "Fill up all the 7s in the board",
    "Fill up all the 8s in the board",
    "Fill up all the 9s in the board",
  ];

  return (
    <div className="sidebar">
      <div>
        <h2>{done.length === 9 ? "Good Job!" : "Your Missions: "}</h2>
        {done.length === 9 ? (
          <div>
            <p>You’ve unlocked all the parts of the portfolio</p>
            <p>I hope you enjoyed the mini game :)</p>
          </div>
        ) : (
          <ul className={done.length === 9 ? "hidden" : "show"}>
            {missions.map((mission, index) => (
              <li key={index} className={done[index] ? "done" : null}>
                {mission}
              </li>
            ))}
          </ul>
        )}
      </div>

      <CheckBtn
        grid={getDeepCopy(sudokuBoard)}
        onClicked={onFinished}
        numCheck={numCheck}
        onCheck={done.length !== 9}
      />
    </div>
  );
}
