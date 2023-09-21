import { useState, useEffect } from 'react';

const useField = () => {

    const [value, setValue] = useState('');
    const [className, setClassName] = useState('');
    const [classNameMessage, setClassNameMessage] = useState('');
    const [initialized, setInitialized] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (initialized) {
            var totalErrors = 0;
            if (value.length === 0) {
                totalErrors++;
            }
            if (totalErrors > 0) {
                setError(true)
                setClassName('error')
                setErrorMessage(true)
                setClassNameMessage('Required')
                setMessage('Error')
            } else {
                setError(false)
                setClassName('')
                setErrorMessage(false)
                setClassNameMessage('')
                setMessage('')
            }
        }

    }, [value])

    const handleClearField = () => {
        setValue('')
    }

    const onChange = (e) => {
        setValue(e.target.value.toUpperCase())
        setInitialized(true)
    }

    return { value, message, className, classNameMessage, error, errorMessage, onChange, handleClearField }

}
export default useField