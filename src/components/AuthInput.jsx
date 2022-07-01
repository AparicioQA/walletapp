import React from 'react';

const AuthInput = React.memo(({ nameTitle, name, type, textValue, placeHolder, handleTextChange }) => {

    return (
        <div>
            <label className='block text-indigo-800'>{nameTitle}</label>

            <input className='border-solid border-indigo-800 border-b-2 w-full max-w-lg focus:outline-none' name={name} type={type} value={textValue} placeholder={placeHolder} onChange={handleTextChange} autoComplete="on"
                required minLength='8' maxLength='200' />

        </div>
    )
});

export { AuthInput };