import React from 'react';
import './App.css';
import { SimpleList } from './Simplelist.';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h2>
          Simple List
        </h2>
      </header>
      <body className="content">
        <SimpleList/>
      </body>
    </div>
  );
}

export default App;

/*
<div className="app">
      <header className="app-header">
        <h2>
          Simple List
        </h2>
      </header>
      <body className="content">
        <div>
          <input className="" type="text"></input>
        </div>
        <div>
          <button className="" >
            Add item
          </button>
        </div>
      </body>
    </div>*/