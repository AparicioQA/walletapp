import '../App.css';
import React, { useState, useEffect } from 'react';

import {
    BrowserRouter, Routes, Route

} from "react-router-dom";

import { PrivateRoute } from './PrivateRoute';
import { WalletRoute } from './WalletRoute';
import { PublicRoutes } from './PublicRoutes';
import { AuthRoutes } from './AuthRoutes';
import { useDispatch, useSelector } from 'react-redux';
import walletApi from '../helpers/walletApi';
import { login } from '../actions/auth';

function AppRouter() {

    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const auth = useSelector(state => state.auth);
    const [cheking, setcheking] = useState(true);

    useEffect(() => {
        async function fetchData() {

            const resp = await walletApi('users/authorization');
            if (resp.ok) {
                const user = await resp.json();

                if (user?.token) {
                    dispatch(login(user.id, user.username, user.token));
                    setIsLoggedIn(true);
                    setcheking(false);
                }

            } else {
                setIsLoggedIn(false);
                setcheking(false);
            }
        }

        if (Object.keys(auth).length > 0) {
            setIsLoggedIn(true);
            setcheking(false);
        } else {
            fetchData();
        }

    }, [setIsLoggedIn, auth, dispatch]);

    if (cheking) {
        return (
            <h1>Wait...</h1>
        )
    }
    return (

        <BrowserRouter BrowserRouter >
            <Routes>
                <Route path="/*" element={
                    <PrivateRoute isLoggedIn={isLoggedIn}>
                        <WalletRoute />
                    </PrivateRoute>
                } />

                <Route path="/auth/*" element={
                    <PublicRoutes isLoggedIn={isLoggedIn}>
                        <AuthRoutes />
                    </PublicRoutes>
                } />

            </Routes>
        </BrowserRouter >
    );
}

export default AppRouter;
