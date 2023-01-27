import React from "react";
import { useState } from "react";
import Board from "./components/Board";
import { getDeepCopy } from "./components/Board";
import { initial } from "./components/Puzzle";
import Picker from "./components/Picker";
import Sidebar from "./components/Sidebar";
import InventoryBtn from "./components/InventoryBtn";
import HelpBtn from "./components/HelpBtn";
import Inventory from "./components/Inventory";
import { ACHIEVEMENTS } from "./components/Achievements";
import Option from "./components/Option";
import SocialLink from "./components/SocialLink";
import { AiFillGithub } from "react-icons/ai";
import HelpPage from "./components/HelpPage";

function App() {
  const [sudokuBoard, setSudokuBoard] = useState(getDeepCopy(initial));
  const [done, setDone] = useState(false);
  const [unlocked, setUnlocked] = useState([]);
  const [missionsDone, setMissionsDone] = useState([]);
  const [showInventory, setShowInventory] = useState(false);
  const [numCheck, setNumCheck] = useState(1);
  const [cards, setCards] = useState(generateCards());
  const [option, setOption] = useState(false); //inital state: 0. 1: interactive
  const [showHelp, setShowHelp] = useState(false);

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

  function getRndInteger(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum)) + minimum;
  }

  function generateCards() {
    let cards = [];
    let locked = [];
    for (let i = 0; i < ACHIEVEMENTS.length; i++) {
      //check if it's unlocked. if val is -1, not found -> locked
      if (unlocked.indexOf(i) === -1) {
        //this achievement is locked
        locked.push(i);
      }
    }

    for (let i = 0; locked.length >= 3 ? i < 3 : i < locked.length; i++) {
      let randomIndex = getRndInteger(0, locked.length - 1);
      cards.push(ACHIEVEMENTS[locked[randomIndex]]);
      locked.splice(randomIndex, 1);
    }
    return cards;
  }

  function showPopup() {
    //Display Popup
    setDone(true);
    setCards(generateCards());
    setMissionsDone([...missionsDone, true]);
    setNumCheck(numCheck + 1); //update the sudoku checking logic
  }

  const hidePopup = (name) => {
    if (name === "ACHIEVEMENTS") {
      setDone(false);
    } else if (name === "INVENTORY") {
      setShowInventory(false);
    } else if (name === "HELP") {
      setShowHelp(false);
    }
  };

  function updateUnlockedAchievements(index) {
    if (unlocked.length !== ACHIEVEMENTS.length) {
      setUnlocked([...unlocked, index]); //updates the index of the unlocked achievements
    }
  }

  function handleClick() {
    setShowInventory(!showInventory);
  }

  function toggleHelp() {
    setShowHelp(true);
  }

  return (
    <div className="appWrapper">
      <div className={option === false ? "optionWrapper" : "hidden overlay"}>
        <a
          className="option"
          href="https://sites.google.com/s2021.ssts.edu.sg/nicole/about-me?authuser=0"
        >
          <h2>PLAIN</h2>
          <p>Continue to view a Google site</p>
        </a>
        <Option
          text={"INTERACTIVE"}
          handleClick={() => {
            setOption(true);
            alert(
              "Press the help button on the bottom left-hand corner for instructions :)"
            );
          }}
          bio={"Continue to experience a more interactive portfolio"}
        />
      </div>
      <div
        className={
          option === true ? "mainContainer" : "mainContainer blur noPointer"
        }
      >
        <HelpPage
          visibility={showHelp}
          hidePopup={hidePopup}
          // handleClick={() => {
          //   setShowHelp(true);
          // }}
        />
        <Picker
          visibility={done}
          hidePopup={hidePopup}
          unlocked={unlocked}
          updateUnlock={updateUnlockedAchievements}
          cards={cards}
        />

        <Inventory
          visibility={showInventory}
          hidePopup={hidePopup}
          unlocked={unlocked}
        />
        <div
          className={
            done || showInventory || showHelp ? "blur game noPointer" : "game"
          }
        >
          <Board sudokuBoard={sudokuBoard} inputChange={inputChange} />
          <Sidebar
            done={missionsDone}
            sudokuBoard={sudokuBoard}
            onFinished={showPopup}
            numCheck={numCheck}
          />
        </div>
        <div className="toolbar">
          <div className="toolbarLeft">
            <SocialLink
              href={"https://github.com/nicoletanyt"}
              name="Github"
              icon={<AiFillGithub />}
            />
            <HelpBtn
              handleClick={() => {
                toggleHelp();
              }}
            />
          </div>
          <div className="toolbarRight">
            <InventoryBtn handleClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
