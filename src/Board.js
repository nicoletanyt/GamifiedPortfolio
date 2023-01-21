import { useState } from "react";
import "./App.css";

const initial = [
  [-1, 5, -1, 9, -1, -1, -1, -1, -1],
  [8, -1, -1, -1, 4, -1, 3, -1, 7],
  [-1, -1, -1, 2, 8, -1, 1, 9, -1],
  [5, 3, 8, 6, -1, 7, 9, 4, -1],
  [-1, 2, -1, 3, -1, 1, -1, -1, -1],
  [1, -1, 9, 8, -1, 4, 6, 2, 3],
  [9, -1, 7, 4, -1, -1, -1, -1, -1],
  [-1, 4, 5, -1, -1, -1, 2, -1, 9],
  [-1, -1, -1, -1, 3, -1, -1, 7, -1],
];

function Board() {
  const [sudokuBoard, setSudokuBoard] = useState(getDeepCopy(initial));

  function getDeepCopy(arr) {
    return JSON.parse(JSON.stringify(arr));
  }

  function inputChange(e, row, col) {
    let value = parseInt(e.target.value) || -1;
    let grid = getDeepCopy(sudokuBoard);
    if (value >= 1 || value <= 9) {
      grid[row][col] = value;
    }
    setSudokuBoard(grid);
  }

  return (
    <div>
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
                            ? null
                            : sudokuBoard[row][col]
                        }
                        className={
                          initial[row][col] === -1 ? null : "initalCell"
                        }
                        maxlength="1"
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
    </div>
  );
}

export default Board;
