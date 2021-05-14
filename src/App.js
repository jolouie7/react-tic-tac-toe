import { useState } from 'react';
import './App.css';

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {board.map(square => <div class="square">{square}</div>)}
      </div>
    </div>
  );
}

export default App;
