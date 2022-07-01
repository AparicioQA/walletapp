import React from 'react';
import { Navigate } from 'react-router-dom';

export const PublicRoutes = ({ isLoggedIn, children }) => {

    return (

        isLoggedIn === false ? children : <Navigate to="/" replace />
    )
}