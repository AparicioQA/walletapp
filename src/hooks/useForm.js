import { useCallback, useState } from 'react';


export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const reset = (newFormState = initialState) => {
        setValues(newFormState);
    }

    const handleInputChange = useCallback(({ target }) => {
        setValues(prevValues => ({
            ...prevValues,
            [target.name]: target.value
        }));

    }, [setValues]);


    // const handleInputChange = ({ target }) => {
    //     console.log(`${target.name}, value:${target.value}`);
    //     setValues({
    //         ...values,
    //         [target.name]: target.value
    //     });
    //     console.log(`${values.email}`);
    // }

    return [values, handleInputChange, reset];

}