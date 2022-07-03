import React, { useState } from 'react'
import { AuthInput } from '../AuthInput';
import { useForm } from '../../hooks/useForm';
import { SubmitButton } from '../SubmitButton';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import validator from 'validator';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const Register = () => {
    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useForm({
        name: "",
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formValues;

    const [conditionsAcepted, setConditionAcepted] = useState(false);

    const handleRegister = (event) => {
        event.preventDefault();

        if (isFormValid()) {

            dispatch(startRegisterWithEmailPasswordName(name, email, password, password2));
        }

    }
    const isFormValid = () => {

        if (name.trim().length === 0) {

            Swal.fire('Error', "El nombre de usuario es requerido.", 'error');
            return false;
        } else if (!validator.isEmail(email)) {
            Swal.fire('Error', "El correo es invalido.", 'error');
            return false;

        } else if (password !== password2 || password.length < 8) {

            Swal.fire('Error', "La contraseña debe de ser de almenos 8 caracteres y debe coincider con la otra.", 'error');
            return false;

        } else if (conditionsAcepted) {

            Swal.fire('Error', "Se deben de aceptar los terminos y condiciones.", 'error');
            return false;

        } else {
            return true;
        }

    }
    return (
        <div className='flex flex-col h-screen justify-start sm:justify-center'>

            <div className='px-4 space-y-2 text-xl mt-5 flex flex-col items-stretch sm:items-center'>
                <h2 className='font-semibold text-4xl py-3'>Registro</h2>

                <form onSubmit={handleRegister} className='space-y-6 w-screem'>
                    <AuthInput nameTitle="Usuario" name='name' placeHolder='nombre de usuario' type="text" textValue={name} handleTextChange={(e) => handleInputChange(e)} />
                    <AuthInput nameTitle="Correo" name='email' placeHolder='correo@email.com' type="text" textValue={email} handleTextChange={(e) => handleInputChange(e)} />
                    <AuthInput nameTitle="Clave" name='password' placeHolder='*******' type="password" textValue={password} handleTextChange={(e) => handleInputChange(e)} />
                    <AuthInput nameTitle="Confirmar Clave" name='password2' placeHolder='*******' type="password" textValue={password2} handleTextChange={(e) => handleInputChange(e)} />
                    <div>
                        <label htmlFor="termsAndConditions" className=''>
                            <input type="checkbox" name='termsAndConditions' className='mr-2 h-5 w-5' value={conditionsAcepted}
                                onClick={() => setConditionAcepted(!conditionsAcepted)} />
                            Acepto los <b className='text-indigo-800'>Terminos y condiciones</b>
                        </label>
                    </div>

                    <SubmitButton value='Continuar' />
                    <div className='font-semibold text-base flex justify-center'>
                        <span className='text-slate-500 mr-2'>Tienes una cuenta?</span>
                        <Link to="/auth/login" className='text-indigo-800'>Inicia Sesion</Link>
                    </div>

                </form>

            </div>
        </div>
    )
}
export default Register;