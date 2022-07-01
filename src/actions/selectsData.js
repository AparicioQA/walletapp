import { types } from "../types/types";
import walletApi from '../helpers/walletApi';
import Swal from "sweetalert2";

export const startLoadingSelectsData = () => {
    return async (dispatch) => {
        try {
            const resp = await walletApi('api/formdata', 'GET');
            if (resp.ok) {
                const data = await resp.json();
                dispatch(setSelectsData(data));
            } else {
                throw new Error();
            }

        } catch (e) {
            Swal.fire('Error', 'No se pudieron cargar las deudas', 'error');
        }
    }
}

export const setSelectsData = (data) => {
    return {
        type: types.selectsDataLoad,
        payload: data
    }
};