import {useState, useEffect} from'react'

const useInputField = () => {

    const [value, setValue] = useState('');
    const [className, setClassName] = useState('');
    const [error, setError] = useState(false);
    
    useEffect(() => {
        var hasValueError = false;
        var classNameSet = '';

        if (value.length === 0) {
            hasValueError = true;
            classNameSet = 'error';
        }
        setError(true)
        setClassName(classNameSet);

    }, [setValue]);

    const onChange = (e) => {
        setValue(e.target.value.toUpperCase());
    };
    const clearValue = () => setValue('');

    return {
        value, className, error, clearValue, onChange
    }
}