import React from 'react'
import { AuthInput } from '../AuthInput';
import { useForm } from '../../hooks/useForm';
import { SubmitButton } from '../SubmitButton';
import { Link } from "react-router-dom";

export const Retrieve = () => {
    const [formValues, handleInputChange] = useForm({

        correo: '',
        clave: '',
        claveRepetida: '',
    });

    const { passwordRepeat, email, password } = formValues;

    const handleLogin = (event) => {

        event.preventDefault();
        //dispatch(startLoginEmailPassword(email, password));
    }

    return (
        <div className='flex flex-col h-screen justify-start sm:justify-center'>

            <div className='px-4 space-y-2 text-xl mt-5 flex flex-col items-stretch sm:items-center'>
                <h2 className='font-semibold text-3xl py-3'>Restablecimiento de Clave</h2>

                <form onSubmit={handleLogin} className='space-y-6 w-screem'>

                    <AuthInput nameTitle="Correo" name='correo' placeHolder='correo@email.com' type="text" textValue={email} handleTextChange={(e) => handleInputChange(e)} />
                    <AuthInput nameTitle="Clave" name='clave' placeHolder='*******' type="password" textValue={password} handleTextChange={(e) => handleInputChange(e)} />
                    <AuthInput nameTitle="Digite de nuevo su clave" name='claveRepetida' placeHolder='*******' type="password" textValue={passwordRepeat} handleTextChange={(e) => handleInputChange(e)} />

                    <div className="flex justify-center"><SubmitButton handleSubmit={handleLogin} value='Continuar' /></div>
                    <div className='font-semibold text-base flex justify-center'>
                        <Link to="/auth/login" className='text-indigo-800'>Inicia Sesion</Link>
                    </div>

                </form>

            </div>
        </div>
    )
}
export default Retrieve;