import Swal from "sweetalert2";
import walletApi from "../helpers/walletApi";
import { types } from "../types/types";
import { setTotalDebtPages } from "./page";


export const loadDebts = () => {
    return async (dispatch) => {
        try {
            const resp = await walletApi('api/debts');
            if (resp.ok) {
                const { debts, pages, totalRecords } = await resp.json();
                dispatch(setTotalDebtPages(pages, totalRecords));
                dispatch(setDebts(debts));
            } else {
                throw new Error();
            }

        } catch (e) {
            Swal.fire('Error', 'No se pudieron cargar las deudas', 'error');
        }
    }
}


export const setDebts = (debts) => {
    return {
        type: types.debtsLoad,
        payload: debts
    }
};

export const setSelectedDebt = (debt) => {
    return {
        type: types.selectedDebt,
        payload: debt
    }
}

export const deleteDebt = (idDebt) => {
    return async (dispatch) => {
        try {

            console.log();
            const resp = await walletApi(`api/debts/${idDebt}`, 'DELETE');

            if (resp.ok) {
                dispatch(loadDebts());
            } else {
                throw new Error();
            }
        } catch (error) {
            Swal.fire('Error', 'No se pudo eliminar la deuda', 'error');
        }
    }
}

export const insertDebt = (incompleteDebt) => {

    return async (dispatch, useState) => {
        try {
            const state = useState();
            const debt = {
                ...incompleteDebt,
                userId: state.auth.id,
            }

            const resp = await walletApi('api/debts', 'POST', debt);

            if (resp.ok) {
                const newDebt = await resp.json();
                if (state.debts.loaded) {
                    dispatch(debtAdd(newDebt));
                    const records = state.pages.debt.total + 1;
                    const total = Math.ceil(records / 10);
                    dispatch(setTotalDebtPages(total, records));
                }

                Swal.fire('Movimiento Agregado', `El movimiento ${resp.detail} se agrego correctamente.`, 'success');
            }
            else if (resp?.message) {
                throw new Error(resp.message);
            } else if (resp?.errors) {
                throw Error(resp.errors);
            }
        } catch (e) {
            Swal.fire('Error', e.message, 'error');
        }
    }
};

function debtAdd(debt) {
    return {
        type: types.debtAdd,
        payload: debt
    }
}