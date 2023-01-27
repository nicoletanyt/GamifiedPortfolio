import React from "react";
import DoneBtn from "./DoneBtn";

export default function HelpPage({ visibility, hidePopup }) {
  return (
    <div className={visibility ? "overlay popUp showHelp" : "overlay hidden"}>
      <div className="instructionText">
        <h2>Instructions</h2>
        <p>
          Your goal is to complete the missions on the right-hand side of the
          sudoku board (in order). When you are done with the mission, press the
          "check" button.
        </p>
        <p>
          Upon completing one of them, a popup will appear. Press on any of the
          gift icons to unlock that section of the portfolio. The content can be
          viewed in your inventory after you have unlocked them. (Press the
          button on the bottom left-hand corner to view.)
        </p>
        <h3>How to play sudoku?</h3>
        <p>
          Sudoku is played on a grid of 9 x 9 boxes. Within the rows and columns
          are 9 "squares" (made up of 3 x 3 boxes). Each row, column and square
          (9 boxes each) needs to be filled out with the numbers 1-9, without
          repeating any numbers within the row, column or square.
        </p>
      </div>

      <DoneBtn
        show={true}
        onClick={() => {
          hidePopup("HELP");
        }}
        text={"Close"}
      />
    </div>
  );
}
