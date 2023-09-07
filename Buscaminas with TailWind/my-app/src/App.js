import React, { useState, useEffect } from 'react';
import './index.css';
import { Board } from './Board.jsx';
import 'tailwindcss/tailwind.css'
import { UsersAndPosts } from './Fetch.jsx';

function App() {
  const [boardSize, setBoardSize] = useState(8);
  const [mines, setMines] = useState(10);

  const handleSizeChange = (size) => {
    setBoardSize(size);
  };

  const handleMinesChange = (minesCount) => {
    setMines(minesCount);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-end absolute top-0 right-0 p-5">
        <div>
          <button className="mr-3 m-1.25 p-2.5 py-3 text-lg rounded cursor-pointer bg-blue-300 hover:bg-gray-300" 
            onClick={() => {handleSizeChange(8); handleMinesChange(10);}
            }>8x8 Easy</button>
          <button className="m-1.25 p-2.5 py-3 text-lg rounded cursor-pointer bg-blue-300 hover:bg-gray-300" 
            onClick={() => {handleSizeChange(16); handleMinesChange(40);}
            }>16x16 Medium</button>
        </div>
      </div>
      <Board rows={boardSize} cols={boardSize} mines={mines} />
    </div>
  );
}

export default App;

/*
<div>
        <h2>Usuarios:</h2>
        <ul>
          {users.map(user => (
            <li key={user.id} onClick={() => handleUserSelect(user.id)}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Publicaciones:</h2>
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
*/