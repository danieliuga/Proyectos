
const CAT_ENDPONT_RANDOM_TEXT = `https://catfact.ninja/fact`;

export const getRandomFact = async () => {
    return await fetch(CAT_ENDPONT_RANDOM_TEXT)
    .then(res => {
      if (!res.ok) {
        setFactError('No se ha podido obtener la cita');
      }
      return res.json()
    })
    .then(data => {
      const { fact } = data;
      return fact
    })
  }