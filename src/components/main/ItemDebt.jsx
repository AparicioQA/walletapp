import React from 'react';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteDebt } from '../../actions/debts';

export const ItemDebt = ({ debt }) => {
    const dispatch = useDispatch();
    const date = dayjs(debt.cDate).format('DD-MM-YYYY');

    function handleDelete() {
        dispatch(deleteDebt(debt.id));
    }

    return (
        <li className='border-t-2 border-gray-300 px-6 py-1'>
            <p>{debt.detail}</p>

            <div className='flex justify-between w-80'>
                <span>{debt.amount + ' ' + debt.currencyDetails.name}</span>
                <span>{debt.clasificationDetails.name}</span>
                <span>{date}</span>
                <FontAwesomeIcon icon={faTrash} className='text-black ml-1' size='lg' onClick={handleDelete} />
            </div>

        </li>
    )
}
