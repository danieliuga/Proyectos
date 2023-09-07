import React, { useState, useEffect } from 'react';

export function App(tiempo, gameOver, gameWon) {
  
  const [productPrice, setProductPrice] = useState();
  const [introducedValue, setIntroducedValue] = useState();

  const apiStore = 'https://fakestoreapi.com/products';
  const apiPrice = 'https://api.frankfurter.app';
  
  useEffect(() => {
    fetch(apiStore)
    .then(response => response.json())
    .then(data => {
        setProductPrice(data[0].price);
        setIntroducedValue(data[0].introduced);
      });
  },[])

    return (
      <div>

      </div>
    );

}
export default App;
