import { useState, useEffect } from 'react';
//import { validateDNI } from '../services/validateDni';

export function useHandleButtons({ user, name, surname, dni, setUser, setName, setSurname, setCountry, setDni }) {

  const [errors, setErrors] = useState({});

  const [data, setData] = useState({
    user: '',
    name: '',
    surname: '',
    country: 'Choose a country',
    dni: '',
  });

  const handleErrors = () => {

    if (!user) {
      errors.user = 'Required';
    } else if (user.includes(name)) {
      errors.user = 'User cannot contain name';
    }

    if (!name) {
      errors.name = 'Required';
    }

    if (!surname) {
      errors.surname = 'Required';
    }

    if (country == 'Choose a country') {
      errors.country = 'Required';
    }

    if (!dni) {
      errors.dni = 'Required';
    }
    //console.log(errors);
    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const isErrors = handleErrors();
        if (isErrors == false) {
            console.log('Form submitted successfully');
        } else {
            setErrors(isErrors);
        }
  };

  const handleClear = () => {
    setUser('');
    setName('');
    setSurname('');
    setCountry('Choose a country');
    setDni('');
    setErrors({});
    setData({
      user: '',
      name: '',
      surname: '',
      dni: '',
    });
  };

  return { user,
    name,
    surname,
    dni,
    setUser,
    setName,
    setSurname,
    setCountry,
    setDni,
    errors,
    handleSubmit,
    handleClear,
    handleErrors};
}

