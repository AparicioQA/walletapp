import React from 'react'
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import Retrieve from '../components/auth/Retrieve';
import {
    Routes, Route,

} from "react-router-dom";
import { NotFound } from '../components/NotFound';
export const AuthRoutes = () => {
    return (
        <Routes>
            {/* <Route path='/auth/'> */}
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="retrieve" element={<Retrieve />} />
            <Route index element={<Login />} />
            {/* </Route> */}
            <Route path='*' element={<NotFound />} />

        </Routes>
    )
}
