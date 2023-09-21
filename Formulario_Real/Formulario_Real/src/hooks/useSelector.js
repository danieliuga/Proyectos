import { useState, useEffect } from 'react';
import { validateDNI } from '../services/validateDni'; 

const useSelector = () => {

    const [value, setValue] = useState('Choose a country');
    const [className, setClassName] = useState('');
    const [error, setError] = useState(false);
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        if (initialized) {
            
            var totalErrors = 0;
            if (value == 'Choose a country') {
                totalErrors++;
            }
            if (totalErrors > 0) {
                setError(true)
                setClassName('error')
            } else {
                setError(false);
                setClassName('')
            }
        }

    }, [value])

    const isDniCorrect = validateDNI();

    const handleClearSelector = () => {
        setValue('Choose a country')
    }

    const onChange = (e) => {
        setInitialized(true);
        setValue(e.target.value)
    }

    return { value, className, error, onChange}

}
export default useSelector