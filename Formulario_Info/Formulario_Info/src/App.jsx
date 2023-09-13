import { useState } from 'react'
import './App.css'

function App() {

  const [user, setUser] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [country, setCountry] = useState('Choose a country');
  const [dni, setDni] = useState('');
  const [userErrors, setUserErrors] = useState('');
  const [nameErrors, setNameErrors] = useState('');
  const [surnameErrors, setSurnameErrors] = useState('');
  const [dniErrors, setDniErrors] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    


    let hasErrors = false;
    const userMaxLength = 10;
    if (!user) {
      setUserErrors('Required');
      hasErrors = true;
    }
    if (!name) {
      setNameErrors('Required');
      hasErrors = true;
    }
    if (!surname) {
      setSurnameErrors('Required');
      hasErrors = true;
    }
    if (!dni) {
      setDniErrors('Required');
      hasErrors = true;
    }

    if(user.length > userMaxLength) {
      userErrors.user = `User name cannot exceed ${userMaxLength} characters`;
      has
    }

    if (name.includes(user)) {
      setNameErrors(`Name cannot contain ${user}`);
      hasErrors = true;
    }

    if (user.includes(name)) {
      setUserErrors(`User name cannot contain ${name}`);
      hasErrors = true;
    }
    
    if (!dni) {
      setDniErrors('Required');
      hasErrors = true;
    } else if (!validateDNI(dni)) {
      setDniErrors('Invalid DNI');
      hasErrors = true;
    }

    if (!hasErrors) {
      console.log('Form submitted successfully'); 
    }
    
  };

  const handleClear = () => {
    setUser('');
    setName('');
    setSurname('');
    setCountry('Choose a country');
    setDni('')
    setUserErrors('');
    setNameErrors('');
    setSurnameErrors('');
    setDniErrors('');
  };

  const validateDNI = (dni) => {
    const dniRegExp = /^\d{8}[A-HJ-NP-TV-Z]$/;
    
    if (!dni.match(dniRegExp)) {
      return false;
    }
    
    const letter = dni.charAt(dni.length - 1).toUpperCase();
    const number = dni.substr(0, dni.length - 1);
    const letterValues = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const validLetter = letterValues.charAt(number % 23);

    return letter === validLetter;
  };

  return (
    <div className="hola">
      <section className="app">
        <header className='header'>
          <h2>Formulario</h2>
        </header>

        <form onSubmit={handleSubmit}>
          <main className="main">
            <div className="boxInput">
              <label htmlFor="user">User:</label>
              <input
                type="text"
                className={`boxInput ${userErrors ? 'error' : ''}`}
                id="user"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                maxLength={10}
              />
              {userErrors && (
                <div className="error-message">{userErrors}</div>
              )}
            </div>
            <div className="boxInput">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className={`boxInput ${nameErrors ? 'error' : ''}`}
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {nameErrors && (
                <div className="error-message">{nameErrors}</div>
              )}
            </div>
            <div className="boxInput">
              <label htmlFor="surname">Surname:</label>
              <input
                type="text"
                className={`boxInput ${surnameErrors ? 'error' : ''}`}
                id="surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
              {surnameErrors && (
                <div className="error-message">{surnameErrors}</div>
              )}
            </div>
            <div className="boxInput">
              <label htmlFor="country">Country:</label>
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="Choose a country">Choose a country</option>
                <option value="españa">España</option>
                <option value="argentina">Argentina</option>
                <option value="rumania">Rumania</option>
              </select>
            </div>
            <div className="boxInput">
              <label htmlFor="dni">DNI:</label>
              <input
                type="text"
                className={`boxInput ${dniErrors ? 'error' : ''}`}
                id="dni"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
                maxLength={9}
              />
              {dniErrors && (
                <div className="error-message">{dniErrors}</div>
              )}
            </div>
          </main>

          <footer className="footer">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleClear}>
              Clear
            </button>
          </footer>
        </form>
      </section>
    </div>
  );
}

export default App
