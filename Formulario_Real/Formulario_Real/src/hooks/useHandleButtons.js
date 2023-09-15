import { useState, useEffect } from 'react';

export function useHandleButtons({user, name, surname, dni, setUser, setName, setSurname, setCountry, setDni}) {

    const [userErrors, setUserErrors] = useState('');
    const [nameErrors, setNameErrors] = useState('');
    const [surnameErrors, setSurnameErrors] = useState('');
    const [dniErrors, setDniErrors] = useState('');
    const [submitted, setSubmitted] = useState(false)

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

        if (user.length > userMaxLength) {
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

        setSubmitted(true);

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

    const handleClear = () => {
        setUser('');
        setName('');
        setSurname('');
        setCountry('Choose a country');
        setDni('');
        setUserErrors('');
        setNameErrors('');
        setSurnameErrors('');
        setDniErrors('');
    };

    return {userErrors, nameErrors, surnameErrors, dniErrors, handleSubmit, handleClear, submitted};
}

