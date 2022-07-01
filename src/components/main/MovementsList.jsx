import React from 'react'
import DebtType from './DebtType'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus, faSquareMinus } from '@fortawesome/free-solid-svg-icons'
import { ListMovements } from './ListMovements';
import { useDispatch, useSelector } from 'react-redux';
import { setType } from '../../actions/type';
import { loadMovements } from '../../actions/movements';
import { setCurrentMovementPage } from '../../actions/page';
import { ListPages } from '../ListPages';

export const MovementsList = () => {
    const dispatch = useDispatch();
    const type = useSelector(state => state.type);
    const { total } = useSelector(state => state.pages.movement);
    const handleTypeChange = (event) => {
        if (type === event.target.innerText.toLowerCase()) {
            dispatch(setType(''));
        } else {
            dispatch(setType(event.target.innerText.toLowerCase()));
        }
        dispatch(setCurrentMovementPage(1));
        dispatch(loadMovements());
    }

    return (
        <div className='flex flex-col items-center text-xl '>
            <h1 className='text-indigo-800 text-xl font-semibold text-2xl'>
                Movimientos
            </h1>
            <DebtType />
            <div className='text-white'>
                <button className={'py-2 px-6 bg-indigo-800 m-2 rounded ' + (type === 'gasto' && 'bg-gray-700')} onClick={handleTypeChange}>
                    Gasto
                    <FontAwesomeIcon icon={faSquareMinus} className='text-red-600 ml-1' size='lg' />
                </button>
                <button className={'py-2 px-6 bg-indigo-800 m-2 rounded ' + (type === 'ingreso' && 'bg-gray-700')} onClick={handleTypeChange}>
                    Ingreso
                    <FontAwesomeIcon icon={faSquarePlus} className='text-lime-500 ml-1' size='lg' />
                </button>
            </div>
            <ListMovements />
            <ListPages totalPages={total} reloadPage={loadMovements} setCurrentPage={setCurrentMovementPage} />
        </div>
    )
}
