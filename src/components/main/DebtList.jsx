import React from 'react'
import { ItemDebt } from './ItemDebt';

const DebtList = ({ debts }) => {

    return (
        <ul className='bg-indigo-800 text-white max-w-lg text-lg rounded' >
            {
                debts.map(debt => <ItemDebt debt={debt} key={debt.id} />)
            }
        </ul >
    )
};

export default DebtList;