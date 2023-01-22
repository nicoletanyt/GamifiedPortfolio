import React from "react";
import "../App.css";
import { numCheck } from "../App";

export default function CheckBtn({ grid, onClicked }) {
  function checkRow(grid, row, num) {
    if (grid[row].indexOf(num) !== -1) {
      grid[row].splice(grid[row].indexOf(num), num);
    } else {
      return false;
    }
    return grid[row].indexOf(num) === -1; //return -1 if this number doesn't exist
  }

  function checkCol(grid, col, num) {
    return grid.map((row) => row[col]).indexOf(num) === -1;
  }

  function checkBox(grid, row, col, num) {
    let boxArr = [],
      rowStart = row - (row % 3),
      colStart = col - (col % 3);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        boxArr.push(grid[rowStart + 1][colStart + 1]);
      }
    }
    return boxArr.indexOf(num) === -1;
  }

  function checkValid(grid, row, col, num) {
    //-1 means that the box is empty
    if (
      checkRow(grid, row, num) &&
      checkCol(grid, col, num) &&
      checkBox(grid, row, col, num)
    ) {
      return true;
    }
    return false;
  }

  function checkOccurrences(grid, numCheck) {
    let numLeft = 9;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (grid[i][j] === numCheck) {
          // console.log(i, j);
          if (checkValid(grid, i, j, numCheck)) {
            numLeft--;
          } else {
            alert("There is an error in one of your inputs.");
            return;
          }
        }
      }
    }
    console.log(numLeft);
    if (numLeft === 0) {
      alert("Congrats! You have completed mission 1!"); //show screen to see achievements
      return true;
    } else {
      alert("You need to fill in more " + numCheck + "s!");
    }
  }

  return (
    <button
      className="checkBtn togglePoint"
      onClick={(e) => {
        if (checkOccurrences(grid, numCheck)) {
          onClicked(e);
        }
      }}
    >
      Check
    </button>
  );
}
