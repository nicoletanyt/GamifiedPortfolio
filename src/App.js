import { useState } from "react";
import Board from "./components/Board";
import CheckBtn from "./components/CheckBtn";
import { getDeepCopy } from "./components/Board";
import { initial } from "./components/Puzzle";

export const numCheck = 1;

function App() {
  const [sudokuBoard, setSudokuBoard] = useState(getDeepCopy(initial));

  function inputChange(e, row, col) {
    let grid = getDeepCopy(sudokuBoard);
    if (parseInt(e.target.value) !== numCheck && e.target.value !== "") {
      //if the user input another value other than the one in the mission
      alert("Please only insert " + numCheck + "s!");
      e.target.value = "";
    }
    grid[row][col] = parseInt(e.target.value) || -1;
    setSudokuBoard(grid);
  }

  return (
    <div className="main">
      <Board sudokuBoard={sudokuBoard} inputChange={inputChange} />
      <div className="sidebar">
        <div>
          <h2>Your Missions: </h2>
          <ul>
            <li>Fill up all the 1s in the board</li>
          </ul>
        </div>

        <CheckBtn grid={getDeepCopy(sudokuBoard)} />
      </div>
    </div>
  );
}

export default App;
