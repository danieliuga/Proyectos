import React, { useState, useEffect } from 'react';
import './Form.css'
import useField from '../../hooks/useField';
import useSelector from '../../hooks/useSelector';
import FormField from '../../hooks/useFormField';
import ErrorField from '../../hooks/useErrorField';
import { validateDNI } from '../../services/validateDni';

export function Form() {

    const user = useField();
    const name = useField();
    const surname = useField();
    const country = useSelector();
    const dni = useField();

    const { setClassName } = useField();

    useEffect(() => {
        if (user.value.includes(name.value) && name.value.length > 0) {
            user.addErrorMessage('User cannot contain name')
        } else {
            user.removeErrorMessage('User cannot contain name')
        }

    }, [user.value, name.value])

    useEffect(() => {
        if (validateDNI(dni.value, country.value) == false
            && dni.value.length > 0
            && country.value != 'Choose a country') {
            dni.addErrorMessage('DNI validation failed')
        } else {
            dni.removeErrorMessage('DNI validation failed')
        }

    }, [dni.value, country.value]);

    const onSubmit = (e) => {
        e.preventDefault()

        if (user.error == false &&
            name.error == false &&
            surname.error == false &&
            country.error == false &&
            dni.error == false) {
            console.log('Form submitted successfully')
        } else if (user.error || name.error || surname.error ||
            country.error || dni.error) {
            setClassName('error-disable')
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
    Objetivos:
        - mas tests
        - componente de cada input
        - mejorar descripcion de cada escenario
        - disable el boton de submit si hay errores
    */

    return (
        <div className="hola" data-testid="formulario">
            <section className="app">
                <header className='header'>
                    <h2>Formulario</h2>
                </header>

                <form onSubmit={onSubmitForm}>
                    <main className="main">
                        <FormField
                            id="user"
                            label="User"
                            type="text"
                            value={user.value}
                            className={user.className}
                            onChange={user.onChange}
                            maxLength={10}
                            placeholder='Blackpanther'
                        />
                        <ErrorField messages={user.classNameMessage} />
                        <FormField
                            id="name"
                            label="Name"
                            type="text"
                            value={name.value}
                            className={name.className}
                            onChange={name.onChange}
                            maxLength={10}
                            placeholder='Toni'
                        />
                        <ErrorField messages={name.classNameMessage} />
                        <FormField
                            id="surname"
                            label="Surname"
                            type="text"
                            value={surname.value}
                            className={surname.className}
                            onChange={surname.onChange}
                            maxLength={10}
                            placeholder='Recio'
                        />
                        <ErrorField messages={surname.classNameMessage} />
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
                        </div>
                        <div className='error-message'>{country.classNameMessage}</div>
                        <FormField
                            id="dni"
                            label="Dni"
                            type="text"
                            value={dni.value}
                            className={dni.className}
                            onChange={dni.onChange}
                            placeholder='11111111H'
                        />
                        <ErrorField messages={dni.classNameMessage} />
                    </main>

                    <footer className="footer">
                        <button type="submit" className='submitButton' data-testid="submitButton" onClick={onSubmit} >Submit</button>
                        <button type="button" className='clearButton' onClick={onClear} data-testid="clearButton">Clear</button>
                    </footer>
                </form>
            </section>
        </div>
    );
}
