import React, { useEffect } from 'react'
import { SubmitButton } from '../SubmitButton'
import { useSelector, useDispatch } from 'react-redux';
import { startLoadingSelectsData } from '../../actions/selectsData';
import { useForm } from '../../hooks/useForm';
import { FormSelect } from '../FormSelect';
import DebtList from './DebtList';
import { insertDebt, loadDebts } from '../../actions/debts';
import dayjs from 'dayjs';
import { ListPages } from '../ListPages';
import { setCurrentDebtPage } from '../../actions/page';

export const RegistrationDebt = () => {
    const { debts } = useSelector(state => state.debts);
    const dispatch = useDispatch();
    const { total } = useSelector(state => state.pages.debt);
    const data = useSelector(state => state.selectsData);
    const { debtClasifications, currencies } = data;
    const [formValues, handleInputChange] = useForm({
        currency: 1,
        amount: 0,
        cdate: dayjs(Date.now()).format('YYYY-MM-DD'),
        clasification: 1,
        detail: ''
    });

    const { currency, amount, cdate, detail, clasification } = formValues;

    useEffect(() => {
        if (Object.entries(data).length <= 0) {
            dispatch(startLoadingSelectsData());
        }
        if (debts.length <= 0) {
            dispatch(setCurrentDebtPage(1));
            dispatch(loadDebts());
        }
    }, [dispatch, data, debts.length]);

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(insertDebt(formValues));
    }

    return (
        <div className='mx-3 flex flex-col text-lg sm:items-center sm:justify-center h-screen'>
            <form className='space-y-3 flex flex-col' onSubmit={handleSubmit}>
                <h1 className='text-indigo-800 text-xl text-center font-semibold text-2xl '>Deudas</h1>
                <h2 className='text-indigo-800 text-xl text-center font-semibold text-1xl '>Registrar Deuda</h2>

                <FormSelect title='Moneda' name='currency' value={currency} handleChange={handleInputChange} list={currencies} />

                <label className='flex'>
                    Monto:
                    <input required={true} type="text" name="amount" onChange={handleInputChange} value={amount} className="border-b-2 border-indigo-800 w-full border-0 max-w-xs mx-2 focus:outline-none" />
                </label>

                <label className='flex'>
                    Fecha:
                    <input required={true} type="date" name="cdate" className='border-0 mx-2 focus:outline-none' onChange={handleInputChange} value={cdate} />
                </label>

                <FormSelect title='Clasificación' name='clasification' value={clasification} handleChange={handleInputChange} list={debtClasifications} />

                <label>
                    Detalle:
                    <input required={true} type="text" name="detail" onChange={handleInputChange} value={detail}
                        className='border-0 border-b-2 border-indigo-800 w-full max-w-sm focus:outline-none' />
                </label>

                <SubmitButton value='Agregar' />

                <DebtList debts={debts} />
                <div className='flex justify-center'> <ListPages totalPages={total} reloadPage={loadDebts} setCurrentPage={setCurrentDebtPage} /></div>
            </form>
        </div >
    )
}
