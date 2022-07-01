import React, { useEffect } from 'react'
import { SubmitButton } from '../SubmitButton'
import DebtType from './DebtType'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { startLoadingSelectsData } from '../../actions/selectsData';
import { useForm } from '../../hooks/useForm';
import { FormSelect } from '../FormSelect';
import { insertMovement } from '../../actions/movements';
import Swal from 'sweetalert2';
import validator from 'validator';
import dayjs from 'dayjs';

export const Movements = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.selectsData);
    const { currencies, types, methods } = data;

    const [formValues, handleInputChange] = useForm({
        currency: 1,
        amount: '',
        cdate: dayjs(Date.now()).format('YYYY-MM-DD'),
        type: 1,
        method: 1,
        detail: ''
    });

    const { currency, amount, cdate, type, method, detail } = formValues;

    useEffect(() => {

        if (Object.entries(data).length <= 0) {
            dispatch(startLoadingSelectsData());
        }
    }, [data, dispatch])

    function handleSubmit(e) {
        e.preventDefault();
        if (isFormValid())
            dispatch(insertMovement(formValues));
    }

    const isFormValid = () => {
        if (!validator.isDate(cdate)) {

            Swal.fire('Error', "La fecha es invalida.", 'error');
            return false;
        } else if (!validator.isNumeric(amount)) {
            Swal.fire('Error', "El monto es invalido.", 'error');
            return false;

        } else if (detail.trim().length === 0) {

            Swal.fire('Error', "El detalle no puede ir vacio o ser solo espacios en blanco.", 'error');
            return false;

        } else {
            return true;
        }

    }
    return (

        <div className='mx-3 flex flex-col text-lg sm:items-center sm:justify-center h-screen'>
            <form className='space-y-3 flex flex-col' onSubmit={handleSubmit}>
                <h1 className='text-indigo-800 text-xl text-center font-semibold text-2xl '>Registrar Movimiento</h1>

                <FormSelect title='Moneda' name='currency' value={currency} handleChange={handleInputChange} list={currencies} />

                <label className='flex'>
                    Monto:
                    <input required={true} type="text" name="amount" onChange={handleInputChange} value={amount} className="border-b-2 border-indigo-800 w-full border-0 max-w-xs mx-2 focus:outline-none" />
                </label>

                <label className='flex'>
                    Fecha:
                    <input required={true} type="date" name="cdate" className='border-0 mx-2 focus:outline-none' onChange={handleInputChange} value={cdate} />
                </label>

                <FormSelect title='Tipo' name='type' value={type} handleChange={handleInputChange} list={types} />
                <FormSelect title='Metodo' name='method' value={method} handleChange={handleInputChange} list={methods} />
                <DebtType />

                <label>
                    Detalle:
                </label>
                <input required={true} type="text" name="detail" onChange={handleInputChange} value={detail}
                    className='border-0 border-b-2 border-indigo-800 my-10 w-full max-w-sm focus:outline-none' />
                <SubmitButton value='Agregar' />
            </form>
        </div >
    )
}
