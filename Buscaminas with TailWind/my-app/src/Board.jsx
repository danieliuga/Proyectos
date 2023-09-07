import React, { useState, useEffect } from 'react';
import { Cell } from './Cell.jsx';
import Confetti from 'react-confetti';


export function Board({ rows, cols, mines }) {
  const [board, setBoard] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [flagsCount, setFlagsCount] = useState(10);
  const [timerCount, setTimerCount] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [matchesPlayed, setMatchesPlayed] = useState([]);

  const startTimer = () => {
    setIsGameStarted(true);
  };

  const generateEmptyBoard = () => {
    const emptyBoard = [];
    for (let i = 0; i < rows; i++) {
      emptyBoard[i] = Array(cols)
    }
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        emptyBoard[i][j] = { isMine: false, isRevealed: false, count: 0 }
      }
    }
    return emptyBoard;
  }

  const placeMines = () => {
    const newBoard = generateEmptyBoard();
    let minesPlaced = 0;

    while (minesPlaced < mines) {
      var randomRow = Math.floor(Math.random() * rows);
      var randomCol = Math.floor(Math.random() * cols);

      if (!newBoard[randomRow][randomCol].isMine) {
        newBoard[randomRow][randomCol].isMine = true;
        minesPlaced++;
      }

    }
    setBoard(newBoard);
  }

  const countAdjacentMines = (row, col) => {
    let count = 0;
    for (let i = Math.max(0, row - 1); i <= Math.min(rows - 1, row + 1); i++) {
      for (let j = Math.max(0, col - 1); j <= Math.min(cols - 1, col + 1); j++) {
        if (board[i][j].isMine) {
          count++;
        }
      }
    }
    return count;
  };

  const revealAdjacentCells = (row, col) => {
    for (let i = Math.max(0, row - 1); i <= Math.min(rows - 1, row + 1); i++) {
      for (let j = Math.max(0, col - 1); j <= Math.min(cols - 1, col + 1); j++) {
        if (!board[i][j].isRevealed && board[i][j].count === 0) {
          handleCellClick(i, j);
        }
      }
    }
  };

  const handleCellClick = (row, col) => {
    
    if (gameOver || gameWon || board[row][col].isRevealed || board[row][col].isFlagged || board[row][col].isQuestion) {
      return;
    }
    const newBoard = [...board];
    newBoard[row][col].isRevealed = true;

    if (newBoard[row][col].isMine) {
      setGameOver(true);
      newBoard[row][col].isClickedMine = true;
      revealAllMines(newBoard);
      return;
    }

    newBoard[row][col].count = countAdjacentMines(row, col);
    setBoard(newBoard);

    if (newBoard[row][col].count === 0) {
      revealAdjacentCells(row, col);
    }

    checkGameWon(newBoard, row, col);
  };

  const handleCellRightClick = (e, row, col) => {
    e.preventDefault(); // Prevenir el menú contextual por defecto

    if (gameOver || gameWon || board[row][col].isRevealed) return;

    const newBoard = [...board];
    if (!board[row][col].isFlagged && !board[row][col].isQuestion) {
      newBoard[row][col].isFlagged = true;
      setFlagsCount((prevCount) => prevCount - 1);
      setTimerCount((prevCount) => prevCount - 1);
    } else if (board[row][col].isFlagged) {
      newBoard[row][col].isFlagged = false;
      newBoard[row][col].isQuestion = true;
      setFlagsCount((prevCount) => prevCount + 1);
      setTimerCount((prevCount) => prevCount + 1);
    } else if (board[row][col].isQuestion) {
      newBoard[row][col].isQuestion = false;
    }

    setBoard(newBoard);
  };

  const checkGameWon = (currentBoard) => {
    const totalNonMineCells = rows * cols - mines;
    let revealedNonMineCells = 0;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (!currentBoard[i][j].isMine && currentBoard[i][j].isRevealed) {
          revealedNonMineCells++;
        }
      }
    }

    if (revealedNonMineCells === totalNonMineCells) {
      setGameWon(true);
      setShowConfetti(true);
    }
  };

  const revealAllMines = (currentBoard) => {
    const newBoard = currentBoard.map(row =>
      row.map(cell => {
        if (cell.isMine) {
          cell.isRevealed = true;
        }
        return cell;
      })
    );
    setBoard(newBoard);
  };

  const resetGame = () => {
    setBoard(generateEmptyBoard());
    placeMines();
    setGameOver(false);
    setGameWon(false);
    setFlagsCount(10);
    setTimerCount(0);
    setShowConfetti(false);
  };

  useEffect(() => {
    const newBoard = generateEmptyBoard();
    setBoard(newBoard);
    placeMines(newBoard);
    startTimer();
  }, []);

  // Efecto para actualizar el contador cada segundo
  useEffect(() => {
    let interval;
    if (isGameStarted && !gameOver && !gameWon) {
      interval = setInterval(() => {
        setTimerCount((prevTimerCount) => prevTimerCount + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isGameStarted, gameOver, gameWon]);

  const terminarPartida = () => {
    const newMatchBoard = {
      timerCount: timerCount
    };
  
    setMatchesPlayed([...matchesPlayed, newMatchBoard]);
  
    resetGame();
  };

  const guardarPartidasEnJSON = () => {
    const data = JSON.stringify(matchesPlayed);
  
    // Crea un objeto Blob para el contenido JSON
    const blob = new Blob([data], { type: 'application/json' });
  
    // Crea una URL para el Blob
    const url = window.URL.createObjectURL(blob);
  
    // Crea un enlace de descarga y simula un clic para descargar el archivo JSON
    const a = document.createElement('a');
    a.href = url;
    a.download = 'matches.json';
    a.click();
  
    // Libera la URL del Blob
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className='bg-blue-200 flex flex-col items-center justify-center min-h-screen'>
      <h1 className='mt-4 text-3xl'>🅜🅘🅝🅔🅢🅦🅔🅔🅟🅔🅡</h1>
      <div className="flex my-2 justify-between items-center bg-blue-300 p-2.5 margin-bottom: -1.25rem; rounded">
        <div className="font-bold mr-2 ml-2">Flags: {flagsCount}</div>
        <div className="text-2xl cursor-pointer" onClick={resetGame}>
          {gameOver ? '😭' : '😃'}
        </div>
        <div className="font-bold ml-2 mr-2">Timer: {timerCount}</div>
      </div>
      <div className="inline-block h-screen my-3">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`w-8 h-8 leading-8 text-center box-border border-gray-100 cursor-pointer inline-block align-top bg-gray-100 font-bold ${cell.isRevealed ? 'bg-white' : ''}`}
                onContextMenu={(e) => handleCellRightClick(e, rowIndex, colIndex)}
              >
                <Cell
                  value={cell}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                  disabled={cell.isFlagged || cell.isQuestion}
                />
              </div>
            ))}
          </div>
        ))}
        <div className='absolute left-1/2 -translate-x-2/4 my-6 -translate-y-2/4 p-2.5 rounded text-2xl text-red-600'>
          {gameOver && <div>¡Fin del juego!</div> }
          {gameWon &&  <div>¡Has ganado!</div> }
        </div>
        <div className='ml-2 absolute top-6 left-7'>
          <button className='top-0 right-0 p-5 m-1.25 py-3 text-lg rounded cursor-pointer bg-blue-300 hover:bg-gray-300' onClick={terminarPartida}>Terminar Partida</button>
        </div>
        <div className='ml-2 absolute top-24 left-7'>
          <button className='top-0 right-0 p-5 m-1.25 py-3 text-lg rounded cursor-pointer bg-blue-300 hover:bg-gray-300' onClick={guardarPartidasEnJSON}>Guardar Partida</button>
        </div>
        
        {showConfetti && (
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              numberOfPieces={100}
              origin={{ x: 0.5, y: 0.5 }}
            />
          )}
      </div>

    </div>
  )
}

export default Board;

