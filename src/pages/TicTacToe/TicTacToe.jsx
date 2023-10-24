import React, { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className="p-2 w-14 h-14 text-2xl border border-slate-700 font-bold"
    >
      {value}
    </button>
  );
}

export default function TicTacToe() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    if (square[i] || checkWinner(square)) return;
    const nextSquares = square.slice();
    if (xIsNext) {
      nextSquares[i] = "x";
    } else {
      nextSquares[i] = "o";
    }
    setSquare(nextSquares);
    setXIsNext(!xIsNext);
  };

  function resetGame() {
    setSquare(Array(9).fill(null));
    setXIsNext(true);
  }

  const winner = checkWinner(square);
  let status;
  if (winner) {
    status = `Hurray! ${winner} wins`;
  } else {
    status = `Next player: ${xIsNext ? "x" : "o"}`;
  }

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div>
        <div className="flex justify-between mb-2">
          <p className={`${winner ? "text-emerald-600":""}`}>{status}</p>{" "}
          <button className="border px-1 rounded" onClick={resetGame}>
            Reset
          </button>
        </div>
        <div className="grid grid-cols-3 border border-slate-700">
          <Square value={square[0]} onSquareClick={() => handleClick(0)} />
          <Square value={square[1]} onSquareClick={() => handleClick(1)} />
          <Square value={square[2]} onSquareClick={() => handleClick(2)} />

          <Square value={square[3]} onSquareClick={() => handleClick(3)} />
          <Square value={square[4]} onSquareClick={() => handleClick(4)} />
          <Square value={square[5]} onSquareClick={() => handleClick(5)} />

          <Square value={square[6]} onSquareClick={() => handleClick(6)} />
          <Square value={square[7]} onSquareClick={() => handleClick(7)} />
          <Square value={square[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
}

function checkWinner(square) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
  return null;
}
