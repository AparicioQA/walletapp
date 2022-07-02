import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTransfer, faWallet, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import {
    useNavigate, Outlet
} from "react-router-dom";
import { logout } from '../../actions/auth';
import { useDispatch } from 'react-redux';

export const Menu = () => {

    const dispatch = useDispatch();
    const [closed, setClosed] = useState(true);

    const [width, setWidth] = React.useState(0);
    let navigate = useNavigate();

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        handleResize();
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    });

    const handleNavigate = (page) => {
        setClosed(true);
        navigate(`/${page}`, { replace: true })
    }
    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <>
            <div className='flex justify-between sm:justify-end'>
                <button className='pr-1 sm:absolute z-20' onClick={handleLogout}>Salir</button>

                <FontAwesomeIcon icon={closed ? faBars : faXmark} className='pr-1 text-indigo-800 sm:hidden' size='lg'
                    onClick={() => setClosed(!closed)} />
            </div>
            <ul className={'h-screen sm:h-auto bg-white flex flex-col justify-evenly sm:justify-center sm:space-x-4 absolute sm:relative sm:flex-row w-screen sm:flex-row z-10 ' + (closed && width <= 640 ? 'hidden' : '')}>

                <li className='flex flex-col sm:flex-row items-center' onClick={() => handleNavigate('balances')}>
                    <img src={require('../../images/wallet.png')} className='w-28 h-28 pl-3 sm:w-10 sm:h-6' alt="logo" />
                    <span>Saldo</span>
                </li>
                <li className='flex flex-col sm:flex-row items-center' onClick={() => handleNavigate('movements')}>
                    <FontAwesomeIcon icon={faWallet} size={width >= 640 ? 'xl' : '6x'} className='text-indigo-800' />

                    <span>Agregar Movimiento</span>
                </li>
                <li className='flex flex-col sm:flex-row items-center' onClick={() => handleNavigate('movementList')}>
                    <FontAwesomeIcon icon={faMoneyBillTransfer} size={width >= 640 ? 'xl' : '6x'} className='text-indigo-800' />
                    <span>Ver Movimientos</span>
                </li>
                <li className='flex flex-col sm:flex-row items-center' onClick={() => handleNavigate('registrationDebt')}>
                    <img src={require('../../images/borrow.png')} className='w-28 h-28 pl-3 sm:w-10 sm:h-6' alt="logo" />
                    <span>Agregar Deuda</span>
                </li>
            </ul>
            <Outlet />
        </>
    )
}
