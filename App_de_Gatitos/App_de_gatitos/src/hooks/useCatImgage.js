import { useState, useEffect } from 'react';

//para recuperar la imagen cada vez que tenemos una cita nueva
//Custom Hooke
export function useCatImage({ fact }) {

    const [imageUrl, setImageUrl] = useState();
  
    useEffect(() => {
      if (!fact) return
  
      const firstThreeWOrds = fact.split(' ', 3);
  
      fetch(`https://cataas.com/cat/says/${firstThreeWOrds}?size=50&color=red&json=true`)
        .then(res => res.json())
        .then(response => {
          const { url } = response
          setImageUrl(url)
        })
    }, [fact]);
    return { imageUrl }
  }