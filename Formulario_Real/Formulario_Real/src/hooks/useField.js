import { useState, useEffect } from 'react';

const useField = () => {

    const [value, setValue] = useState('');
    const [className, setClassName] = useState('');
    const [error, setError] = useState(false);
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        if (initialized) {
            var totalErrors = 0;
            if (value.length === 0) {
                totalErrors++;
            }
            if (totalErrors > 0) {
                setError(true)
                setClassName('error')
            } else {
                setError(false)
                setClassName('')
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

    return { value, className, error, onChange }

}
export default useField