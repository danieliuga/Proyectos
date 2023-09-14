import React from 'react';
import { useState } from 'react';
import './Form.css'
import { useHandleButtons } from '../../hooks/useHandleButtons';

export function Form() {

    const [user, setUser] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [country, setCountry] = useState('Choose a country');
    const [dni, setDni] = useState('');
    const errors = useHandleButtons({user:user, name:name, surname:surname, dni:dni});

    return (
        <div className="hola" data-testid="formulario">
            <section className="app">
                <header className='header'>
                    <h2>Formulario</h2>
                </header>

                <form onSubmit={errors.handleSubmit}>
                    <main className="main">
                        <div className="boxInput">
                            <label htmlFor="user">User:</label>
                            <input
                                type="text"
                                className={`boxInput ${errors.userErrors ? 'error' : ''}`}
                                id="user"
                                value={user}
                                onChange={(e) => setUser(e.target.value.toUpperCase())}
                                maxLength={10} data-testid="user"
                            />
                            {errors.userErrors && (
                                <div className="error-message">{errors.userErrors}</div>
                            )}
                        </div>
                        <div className="boxInput">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                className={`boxInput ${errors.nameErrors ? 'error' : ''}`}
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value.toUpperCase())}
                                data-testid="name"
                            />
                            {errors.nameErrors && (
                                <div className="error-message">{errors.nameErrors}</div>
                            )}
                        </div>
                        <div className="boxInput">
                            <label htmlFor="surname">Surname:</label>
                            <input
                                type="text"
                                className={`boxInput ${errors.surnameErrors ? 'error' : ''}`}
                                id="surname"
                                value={surname}
                                onChange={(e) => setSurname(e.target.value.toUpperCase())}
                                data-testid="surname"
                            />
                            {errors.surnameErrors && (
                                <div className="error-message">{errors.surnameErrors}</div>
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
                                className={`boxInput ${errors.dniErrors ? 'error' : ''}`}
                                id="dni"
                                value={dni}
                                onChange={(e) => setDni(e.target.value.toUpperCase())}
                                maxLength={9} data-testid="dni"
                            />
                            {errors.dniErrors && (
                                <div className="error-message">{errors.dniErrors}</div>
                            )}
                        </div>
                    </main>

                    <footer className="footer">
                        <button type="submit" data-testid="submitButton">Submit</button>
                        <button type="button" onClick={errors.handleClear} data-testid="clearButton">
                            Clear
                        </button>

                    </footer>
                </form>
            </section>
        </div>
    );
}

/*<div data-testid="formSubmitted">
                            {!submitted && "Hola"}
                        </div>*/