import React, { useEffect } from 'react';
import { useState } from 'react';
import './Form.css'
import useField  from '../../hooks/useField';
import useSelector  from '../../hooks/useSelector';

export function Form() {

    const user = useField();
    const name = useField();
    const surname = useField();
    const country = useSelector();
    const dni = useField();

    return (
        <div className="hola" data-testid="formulario">
            <section className="app">
                <header className='header'>
                    <h2>Formulario</h2>
                </header>

                <form onSubmit={''}>
                    <main className="main">
                        <div className="boxInput">
                            <label htmlFor="user">User:</label>
                            <input
                                type="text"
                                id="user"
                                value={user.value}
                                className={user.className}
                                onChange={user.onChange}
                                maxLength={10} 
                                data-testid="user"
                            />
                        </div>
                        <div className="boxInput">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name.value}
                                className={name.className}
                                onChange={name.onChange}
                                data-testid="name"
                            />
                        </div>
                        <div className="boxInput">
                            <label htmlFor="surname">Surname:</label>
                            <input
                                type="text"
                                id="surname"
                                value={surname.value}
                                className={surname.className}
                                onChange={surname.onChange}
                                data-testid="surname"
                            />
                        </div>
                        <div className="boxInput">
                            <label htmlFor="country">Country:</label>
                            <select
                                id="country"
                                value={country.value}
                                onChange={country.onChange}
                            >
                                <option value={'Choose a country'}>Choose a country</option>
                                <option value="España">España</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Rumania">Rumania</option>
                            </select>
                        </div>
                        <div className="boxInput">
                            <label htmlFor="dni">DNI:</label>
                            <input
                                type="text"
                                id="dni"
                                value={dni.value}
                                className={dni.className}
                                onChange={dni.onChange}
                                data-testid="dni"
                            />
                        </div>
                    </main>

                    <footer className="footer">
                        <button type="submit" data-testid="submitButton" onClick={''}>Submit</button>
                        <button type="button" onClick={''} data-testid="clearButton">Clear</button>
                    </footer>
                </form>
            </section>
        </div>
    );
}
