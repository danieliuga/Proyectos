
export function validateDNI(dni, country) {

  if (country === 'España') {
    /*const dniRegExp = /^\d{8}[A-HJ-NP-TV-Z]$/;

    if (!dni.match(dniRegExp)) {
      return false;
    }
    
    const letter = dni.charAt(dni.length - 1).toUpperCase();
    const number = dni.substr(0, dni.length - 1);
    const letterValues = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const validLetter = letterValues.charAt(number % 23);
    return letter === validLetter;
    */

      if (dni.length !== 9) {
        return false;
      }
      const VALID_LETTERS = "TRWAGMYFPDXBNJZSQVHLCKE";
      const ID_NUMBER = dni.substring(0, 8);
      const ID_LETTER = dni.charAt(8).toUpperCase();
      if (!/^\d+$/.test(ID_NUMBER)) {
        return false;
      }
      const calculatedLetter = VALID_LETTERS[ID_NUMBER % 23];
      return ID_LETTER === calculatedLetter;

  } else if (country === 'Argentina') {
    const dniRegExp = /^[0-9]{8}$/;
    return dni.match(dniRegExp) !== null;
  } else if (country === 'Rumania') {
    const dniRegExp = /^[0-9]{6}[A-Z]{2}$/;
    return dni.match(dniRegExp) !== null;
  }
  return false;
};