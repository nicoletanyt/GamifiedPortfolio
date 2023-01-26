// import { useState } from "react";
import "../App.css";
import { initial } from "./Puzzle";
import React from "react";

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
