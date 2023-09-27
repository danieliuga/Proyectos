import { useState, useEffect } from 'react';

const useSelector = () => {

    const [value, setValue] = useState('Choose a country');
    const [initialized, setInitialized] = useState(false);
    const [className, setClassName] = useState('');
    const [classNameMessage, setClassNameMessage] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        if (initialized) {
            var totalErrors = 0;
            if (value === 'Choose a country') {
                totalErrors++;
            }
            if (totalErrors > 0) {
                setError(true)
                setClassName('error')
            }
        }
        return () => {
            setError(false)
            setClassName('')
        }
    }, [value])

    const handleClearSelector = () => {
        setValue('Choose a country')
    }

    const onChange = (e) => {
        setInitialized(true);
        setValue(e.target.value)
    }

    return { value, className, setClassNameMessage, classNameMessage, error, onChange, handleClearSelector }

}
export default useSelector