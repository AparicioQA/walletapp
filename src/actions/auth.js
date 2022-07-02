import Swal from 'sweetalert2';
import { types } from "../types/types";
// import { finishLoading, startLoading } from "./ui";
import walletApi from '../helpers/walletApi';

export const startLoginEmailPassword = (email, password) => {

    return async (dispatch) => {

        try {
            const authenticateUser = { email: email, password: password };
            const resp = await walletApi('users/authenticate', 'POST', authenticateUser);

            if (resp.ok) {
                const respBody = await resp.json();
                localStorage.setItem('token', respBody.token);
                dispatch(login(respBody.id, respBody.username, respBody.token));
            }
            else {
                throw new Error();
            }

        } catch (e) {
            Swal.fire('Error', 'No se pudo iniciar sesión', 'error');
        }

    }

}
export const login = (id, username, token) => {

    return {
        type: types.login,
        payload: {
            id,
            username,
            token
        }

    }
}

export const logout = () => {

    localStorage.removeItem('token');
    return dispatch => {
        dispatch({ type: types.logout });
    }
}

export const startRegisterWithEmailPasswordName = (name, email, password, password2) => {
    return async (dispatch) => {
        try {
            const user = { name: name, email: email, password: password, confirmPassword: password2 };

            const resp = await walletApi('users/', 'POST', user);
            if (resp.ok) {
                dispatch(startLoginEmailPassword(user.email, user.password));
            }
            else {

                console.log(await resp.json());
                throw Error();
            }

        } catch (e) {
            Swal.fire('Error', 'No se pudo iniciar sesión, por favor verifique sus datos', 'error');
        }
    }
}