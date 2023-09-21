import { useState, useEffect } from 'react';

const useSelector = () => {

    const [value, setValue] = useState('Choose a country');
    const [className, setClassName] = useState('');
    const [classNameMessage, setClassNameMessage] = useState('');
    const [initialized, setInitialized] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (initialized) {
            var totalErrors = 0;
            if (value === 'Choose a country') {
                totalErrors++;
            }
            if (totalErrors > 0) {
                setError(true)
                setClassName('error')
                setErrorMessage(true)
                setClassNameMessage('Required')
                setMessage('Error')
            }
        }
        return () => {
            setError(false),
                setClassName('')
            setErrorMessage(false)
            setClassNameMessage('')
            setMessage('')
        }
    }, [value])

    const handleClearSelector = () => {
        setValue('Choose a country')
    }

    const onChange = (e) => {
        setInitialized(true);
        setValue(e.target.value)
    }

    return { value, message, className, classNameMessage, error, errorMessage, onChange, handleClearSelector }

}
export default useSelector