import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import dayjs from 'dayjs';
import { useDispatch } from "react-redux";
import { deleteMovement } from "../../actions/movements";
export function ItemMovement({ move }) {

    const [toggle, setToggle] = useState(false);
    const date = dayjs(move.cDate).format('DD-MM-YYYY');
    const colorClass = move.typeDetails.name === 'Gasto' ? 'text-red-600' : 'text-green-600';
    const dispatch = useDispatch();

    function handleDelete() {
        dispatch(deleteMovement(move.id));
    }

    return (
        <li className='border-t-2 border-gray-300 px-6 py-1' onClick={() => setToggle(!toggle)}>
            <p>{move.detail}</p>
            <div className='flex justify-between w-80'>
                <span className={colorClass}>{move.amount}</span>
                <span>{date}</span>
                <FontAwesomeIcon icon={faTrash} className='text-black ml-1' size='lg' onClick={handleDelete} />
            </div>
            {
                toggle &&
                <div className='flex justify-evenly'>
                    <span>{move.methodDetails.name}</span>
                    <span>{move.currencyDetails.name}</span>
                    {move.debtDetails?.detail && <span>Deuda: {move.debtDetails.detail}</span>}
                </div>
            }
        </li>
    );
}