import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='app'>
      <header>
        <h1>Formulario</h1>
      </header>

      <main>
        <ul>
          <p>User:</p>
          <input type='text'/>
          <p>Name:</p>
          <input type='text'/>
          <p>Surname:</p>
          <input type='text'/>
          <label>Country:</label>
          <select>
            <option value='españa'>España</option>
            <option value='argentina'>Argentina</option>
            <option value='rumania'>Rumania</option>
          </select>
        </ul>
      </main>

      <footer>
        <button type='submit'>Submit</button>
        <button type='submit'>Clear</button>
      </footer>
    </div>

  )
}

export default App
