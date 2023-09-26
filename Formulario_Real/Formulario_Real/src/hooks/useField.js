import { useState, useEffect } from 'react';

const useField = () => {

    const [value, setValue] = useState('');
    const [initialized, setInitialized] = useState(false);
    const [className, setClassName] = useState('');
    const [classNameMessage, setClassNameMessage] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
      
        if (initialized) {
            var totalErrors = 0;
            if (value.length === 0) {
                totalErrors++;
            }
            if (totalErrors > 0) {
                setError(true)
                setClassName('error')
                setClassNameMessage('Required')

            } else {
                setError(false)
                setClassName('')
                setClassNameMessage('')
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

    return { value, setError, setClassNameMessage, className, classNameMessage, error, onChange, handleClearField }

}
export default useField