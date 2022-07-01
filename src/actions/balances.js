import { types } from "../types/types";
import walletApi from '../helpers/walletApi';
import Swal from "sweetalert2";

export const startLoadingBalances = () => {
    return async (dispatch) => {
        try {
            const resp = await walletApi('balances', 'GET');
            if (resp.ok) {
                const balances = await resp.json();
                dispatch(setBalances(balances));
            } else {
                throw Error();
            }

        } catch (error) {
            Swal.fire('Error', 'No se pudieron cargar los balances', 'error');
        }
    }
}

export const setBalances = (balances) => {
    return {
        type: types.balancesLoad,
        payload: balances
    }
};