import React, { useState, useEffect } from 'react';
import './Form.css'
import useField from '../../hooks/useField';
import useSelector from '../../hooks/useSelector';
import { validateDNI } from '../../services/validateDni';

export function Form() {

    const user = useField();
    const name = useField();
    const surname = useField();
    const country = useSelector();
    const dni = useField();
    const [dniValidation, setDNIValidation] = useState(true);

    useEffect(() => {
        if (country.value && dni.value) {
            const isValid = validateDNI(dni.value, country.value);
            setDNIValidation(isValid);
        } else {
            setDNIValidation(false);
        }
    }, [dni.value, country.value])

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(user.error, name.error, surname.error, dni.error, country.error)
        if (user.error == false &&
            name.error == false &&
            surname.error == false &&
            country.error == false &&
            dni.error == false) {
            console.log('Form submitted successfully')
        }
    }

    const onClear = () => {
        user.handleClearField();
        name.handleClearField();
        surname.handleClearField();
        user.handleClearField();
        country.handleClearSelector();
        dni.handleClearField();
    }

    const onSubmitForm = (e) => {

    };

    /* 
        - Validar Dni
        - Hacer mas tests
    */

    return (
        <div className="hola" data-testid="formulario">
            <section className="app">
                <header className='header'>
                    <h2>Formulario</h2>
                </header>

                <form onSubmit={onSubmitForm}>
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
                            <div className='error-message'>{user.classNameMessage}</div>
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
                            <div className='error-message'>{name.classNameMessage}</div>
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
                            <div className='error-message'>{surname.classNameMessage}</div>
                        </div>
                        <div className="boxInput">
                            <label htmlFor="country">Country:</label>
                            <select
                                id="country"
                                value={country.value}
                                onChange={country.onChange}
                                className={country.className}
                            >
                                <option value={'Choose a country'}>Choose a country</option>
                                <option value="España">España</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Rumania">Rumania</option>
                            </select>
                            <div className='error-message'>{country.classNameMessage}</div>
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
                            <div className='error-message'>{dni.classNameMessage}</div>
                        </div>
                    </main>

                    <footer className="footer">
                        <button type="submit" data-testid="submitButton" onClick={onSubmit}>Submit</button>
                        <button type="button" onClick={onClear} data-testid="clearButton">Clear</button>
                    </footer>
                </form>
            </section>
        </div>
    );
}
