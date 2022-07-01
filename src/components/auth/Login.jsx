import React from 'react';
import { AuthInput } from '../AuthInput';
import { useForm } from '../../hooks/useForm';
import { SubmitButton } from '../SubmitButton';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { startLoginEmailPassword } from '../../actions/auth';

export default function Login() {

    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    });

    const { email, password } = formValues;

    const handleLogin = (event) => {
        event.preventDefault();
        dispatch(startLoginEmailPassword(email, password));
    }

    return (
        <div className='flex flex-col'>
            <div className='flex flex-col items-center'>
                <img src={require('../../images/wallet.png')} className='w-28 h-28' alt="logo" />
                <h1 className='text-indigo-800 font-bold'>OnlineWallet</h1>
            </div>
            <div className='px-4 space-y-2 text-xl mt-5 flex flex-col items-stretch sm:items-center'>
                <h2 className='font-semibold text-2xl'>Iniciar Sesión</h2>
                <p className='font-light'>Bienvenido, es un placer verte de nuevo!</p>

                <form onSubmit={handleLogin} className='space-y-6 w-screem'>

                    <AuthInput nameTitle="Correo" name='email' placeHolder='correo@email.com' type="text" textValue={email} handleTextChange={(e) => handleInputChange(e)} />
                    <AuthInput nameTitle="Clave" name='password' placeHolder='*******' type="password" textValue={password} handleTextChange={(e) => handleInputChange(e)} />
                    <div className="flex justify-center"><SubmitButton value='Iniciar Sesion' /></div>
                    <div className="flex justify-between">
                        <Link to="/auth/retrieve" className='inline-block text-slate-500 w-28'>Recuperar Contraseña</Link>
                        <Link to="/auth/register" className='text-indigo-800'>Registrarse</Link>
                    </div>

                </form>

            </div>
        </div>
    );
};