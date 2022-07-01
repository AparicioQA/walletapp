import React, { useEffect } from 'react'
import { Balances } from '../Balances'
import { startLoadingBalances } from '../../actions/balances';
import { useDispatch, useSelector } from 'react-redux';

export const Balance = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startLoadingBalances());
    }, [dispatch])

    const { balances } = useSelector(state => state.balances);

    return (
        <div className='flex flex-col items-center'>
            <img src={require('../../images/wallet.png')} className='w-32 h-32' alt="logo" />
            {balances.map((balance) => {
                return <Balances key={balance.currency} saldoTotal={balance.total} targeta={balance.card} efectivo={balance.cash} moneda={balance.currency} />
            })}
        </div>
    )
}

