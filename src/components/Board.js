// import { useState } from "react";
import "../App.css";
import { initial } from "./Puzzle";
import { numCheck } from "../App";

export function getDeepCopy(arr) {
  return JSON.parse(JSON.stringify(arr));
}

function Board({ sudokuBoard, inputChange }) {
  return (
    <table>
      <tbody>
        {/* each cell */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rIndex) => {
          return (
            <tr key={rIndex}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, cIndex) => {
                return (
                  <td key={cIndex}>
                    <input
                      value={
                        sudokuBoard[row][col] === -1
                          ? ""
                          : sudokuBoard[row][col]
                      }
                      className={initial[row][col] === -1 ? null : "initalCell"}
                      maxLength="1"
                      onChange={(e) => inputChange(e, row, col)}
                      disabled={initial[row][col] !== -1}
                    ></input>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Board;

// const [sudokuBoard, setSudokuBoard] = useState(getDeepCopy(initial));

// function getDeepCopy(arr) {
//   return JSON.parse(JSON.stringify(arr));
// }

// function inputChange(e, row, col) {
//   let value = parseInt(e.target.value) || -1;
//   let grid = getDeepCopy(sudokuBoard);
//   if (value >= 1 || value <= 9) {
//     grid[row][col] = value;
//   }
//   setSudokuBoard(grid);
// }

// function checkRow(grid, row, num) {
//   return grid[row].indexOf(num) === -1;
// }

// function checkCol(grid, col, num) {
//   return grid.map((row) => row[col].indexOf(num) === -1);
// }

// function checkBox(grid, row, col, num) {
//   let boxArr = [],
//     rowStart = row - (row % 3),
//     colStart = col - (col % 3);
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       boxArr.push(grid[rowStart + 1][colStart + 1]);
//     }
//   }
//   return boxArr.indexOf(num) === -1;
// }

// function checkValid(grid, row, col, num) {
//   //-1 means that the box is empty
//   if (
//     checkRow(grid, row, num) &&
//     checkCol(grid, col, num) &&
//     checkBox(grid, row, col, num)
//   ) {
//     return true;
//   }
//   return false;
// }
