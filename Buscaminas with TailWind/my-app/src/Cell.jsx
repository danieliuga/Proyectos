import React from 'react';

export function Cell({ value, onClick }) {

  const handleClick = () => {
    onClick();
    console.log('isClickedMine: ' + value.isClickedMine)
  };

  return (
    <div
      className={`w-8 h-8 leading-8 text-center border border-gray-400 cursor-pointer inline-block align-top bg-gray-100 font-bold ${
        value.isRevealed ? 'bg-white' : ''} ${
        value.isClickedMine ? 'bg-red-600 text-white' : ''}`}
      onClick={handleClick}>
      {
        value.isRevealed && value.isMine ? '💣' :
          value.isRevealed && value.count !== 0 ? value.count :
            value.isFlagged ? (
              <span>🚩</span>
            ) : value.isQuestion ? (
              <span>❓</span>
            ) : null}
    </div>
  );
};

export default Cell;
