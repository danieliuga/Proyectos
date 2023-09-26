import React, { useState, useEffect } from 'react';
import './Form.css'
import useField from '../../hooks/useField';
import useSelector from '../../hooks/useSelector';
import { validateDNI } from '../../services/validateDni';

export function Form() {

    const {setError, error} = useField();
    const {setClassNameMessage, classNameMessage} = useField();

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

        if (user.value.includes(name.value) && name.value != '') {
            user.error = true;
            setError(user.error)
            setClassNameMessage('user cannot conntain name')
            console.log(classNameMessage);
        }
        
        
    }, [dni.value, country.value, user.value, name.value]);

    const onSubmit = (e) => {
        e.preventDefault()

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
                                placeholder='Blackpanther'
                            />
                            <div className='error-message'>{classNameMessage}</div>
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
                                placeholder='Toni'
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
                                placeholder='Recio'
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
                                data-testid="countryButton"
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
                                placeholder='11111111H'
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
