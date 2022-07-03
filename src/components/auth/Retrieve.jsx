import React from 'react'
import { AuthInput } from '../AuthInput';
import { useForm } from '../../hooks/useForm';
import { SubmitButton } from '../SubmitButton';
import { Link } from "react-router-dom";
import walletApi from '../../helpers/walletApi';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export const Retrieve = () => {
    const [formValues, handleInputChange] = useForm({

        email: '',
        user: '',
        password: '',
    });
    let navigate = useNavigate();
    const { password, email, user } = formValues;

    const handleLogin = async (event) => {

        event.preventDefault();
        const resp = await walletApi('users/retrieve', 'POST', formValues);
        if (resp.ok) {
            navigate('/auth/login', { replace: true })
        } else {

            Swal.fire('Error', 'No se pudo cambiar contraseña, por favor verifique los datos y que la contraseña cumpla con tener' +
                ' al menos 8 caracteres alfanumericos, una mayúscula, una minúscula y un simbolo', 'error');
        }
    }

    return (

        <div className='flex flex-col h-screen justify-start sm:justify-center'>

            <div className='px-4 space-y-2 text-xl mt-5 flex flex-col items-stretch sm:items-center'>
                <h2 className='font-semibold text-3xl py-3'>Restablecimiento de Clave</h2>

                <form onSubmit={handleLogin} className='space-y-6 w-screem'>

                    <AuthInput nameTitle="Correo" name='email' placeHolder='correo@email.com' type="text" textValue={email} handleTextChange={(e) => handleInputChange(e)} />
                    <AuthInput nameTitle="Usuario" name='user' placeHolder='*******' type="password" textValue={user} handleTextChange={(e) => handleInputChange(e)} />
                    <AuthInput nameTitle="Digite su nueva contraseña" name='password' placeHolder='*******' type="password" textValue={password} handleTextChange={(e) => handleInputChange(e)} />

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