import React, { useEffect, } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { loadMovements } from '../../actions/movements';
import { ItemMovement } from './ItemMovement';

export const ListMovements = React.memo(() => {

    const dispatch = useDispatch();
    const movements = useSelector(state => state.movements.movements);

    useEffect(() => {
        if (movements.length <= 0) {
            dispatch(loadMovements());
        }
    }, [dispatch, movements.length]);

    return (
        <ul className='bg-indigo-800 text-white max-w-lg text-lg rounded'>
            {
                movements.map(move => <ItemMovement move={move} key={move.id} />)
            }
        </ul>
    )
});