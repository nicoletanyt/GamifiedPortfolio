import "./App.css";
import Board from "./Board";

function App() {
  return (
    <div className="main">
      <Board />
      <ul>
        <h2>Your Mission: </h2>
        <li>Fill up all the 1s in the board</li>
      </ul>
    </div>
  );
}

export default App;
