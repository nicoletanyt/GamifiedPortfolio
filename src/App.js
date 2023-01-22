import { useState } from "react";
import Board from "./components/Board";
import { getDeepCopy } from "./components/Board";
import { initial } from "./components/Puzzle";
import Picker from "./components/Picker";
import Sidebar from "./components/Sidebar";

export const numCheck = 1;

function App() {
  const [sudokuBoard, setSudokuBoard] = useState(getDeepCopy(initial));
  const [done, setDone] = useState(true);

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

  const onFinished = (e) => {
    //Display Popup
    setDone(true);
  };

  const hidePopup = (e) => {
    setDone(false);
  };

  return (
    <div className="mainContainer">
      <Picker visibility={done} hidePopup={hidePopup} />
      <div className={done ? "blur game" : "game"}>
        <Board sudokuBoard={sudokuBoard} inputChange={inputChange} />
        <Sidebar
          done={done}
          sudokuBoard={sudokuBoard}
          onFinished={onFinished}
        />
      </div>
    </div>
  );
}

export default App;
