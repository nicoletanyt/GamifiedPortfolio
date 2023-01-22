import { useState } from "react";
import Board from "./components/Board";
import { getDeepCopy } from "./components/Board";
import { initial } from "./components/Puzzle";
import Picker from "./components/Picker";
import Sidebar from "./components/Sidebar";
import InventoryBtn from "./components/InventoryBtn";
import HelpBtn from "./components/HelpBtn";
import Inventory from "./components/Inventory";

export const numCheck = 1;

function App() {
  const [sudokuBoard, setSudokuBoard] = useState(getDeepCopy(initial));
  const [done, setDone] = useState(false);
  const [unlocked, setUnlocked] = useState([]);
  const [missionsDone, setMissionsDone] = useState([]);
  const [showInventory, setShowInventory] = useState(false);

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

  const showPopup = (e) => {
    //Display Popup
    setDone(true);
    setMissionsDone([...missionsDone, true]);
  };

  const hidePopup = (name) => {
    if (name === "ACHIEVEMENTS") {
      setDone(false);
    } else if (name === "INVENTORY") {
      setShowInventory(false);
    }
  };

  function updateUnlockedAchievements(index) {
    setUnlocked([...unlocked, index]); //updates the index of the unlocked achievements
  }

  function handleClick() {
    setShowInventory(!showInventory);
  }

  return (
    <div className="mainContainer">
      <Picker
        visibility={done}
        hidePopup={hidePopup}
        updateUnlock={updateUnlockedAchievements}
      />
      <Inventory
        visibility={showInventory}
        hidePopup={hidePopup}
        unlocked={unlocked}
      />
      <div className={done || showInventory ? "blur game noPointer" : "game"}>
        <Board sudokuBoard={sudokuBoard} inputChange={inputChange} />
        <Sidebar
          done={missionsDone}
          sudokuBoard={sudokuBoard}
          onFinished={showPopup}
        />
      </div>
      <div className="toolbar">
        <HelpBtn />
        <InventoryBtn handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
