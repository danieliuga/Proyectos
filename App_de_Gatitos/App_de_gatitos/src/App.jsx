import { useState, useEffect } from 'react';
import './App.css';
import { useCatImage } from './hooks/useCatImgage';
import { useCatFact } from './hooks/useCatFact';

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

export function App() {
  
  const { fact, refreshRandomFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshRandomFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
        alt={`image error ${fact}`} />}
    </main>
  )
}