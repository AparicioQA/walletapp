import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadDebts, setSelectedDebt } from '../../actions/debts';
import { loadMovements } from '../../actions/movements';
import { setCurrentMovementPage } from '../../actions/page';

export default function DebtType() {

    const [isDisabled, setIsDisabled] = useState(true);
    const dispatch = useDispatch();
    const { debts } = useSelector(state => state.debts);

    useEffect(() => {
        debts.length <= 0 && dispatch(loadDebts());

    }, [dispatch, debts.length])

    const handleChange = (event) => {
        dispatch(setSelectedDebt(event.target.value));
    }

    const handleActive = () => {
        setIsDisabled(!isDisabled);
        if (isDisabled === false) {
            dispatch(setSelectedDebt(''));
        } else {
            dispatch(setSelectedDebt(debts[0].id));
        }
        dispatch(setCurrentMovementPage(1));
        dispatch(loadMovements());
    }

    return (
        debts.length > 0 && <div>
            <label>
                Deuda:
                <input type="checkbox" className='w-4 h-4 mx-2 pt-3 checked:bg-indigo-800 text-black' onClick={handleActive} />
                <select required={true} name="debt" disabled={isDisabled} onChange={handleChange}
                    className='px-2 py-1 rounded bg-black text-white z-0'>
                    {debts.map(debt => <option key={debt.id} value={debt.id} >{debt.detail}</option>)}
                </select>
            </label>
        </div>
    )
}