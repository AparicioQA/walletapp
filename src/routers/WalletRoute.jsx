import React from 'react'
import { Route, Navigate, Routes } from 'react-router-dom';
import { Balance } from '../components/main/Balance';
import { Movements } from '../components/main/Movements';
import { MovementsList } from '../components/main/MovementsList';
import { RegistrationDebt } from '../components/main/RegistrationDebt';
import { Menu } from '../components/main/Menu';
import { NotFound } from '../components/NotFound';

export const WalletRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Menu />}>
                <Route path="balances" element={<Balance />} />
                <Route path="movements" element={<Movements />} />
                <Route path="movementList" element={<MovementsList />} />
                <Route path="registrationDebt" element={<RegistrationDebt />} />
                <Route path="/" element={<Navigate to="balances" replace />} />

            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}
