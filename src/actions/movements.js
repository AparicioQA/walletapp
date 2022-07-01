import walletApi from "../helpers/walletApi";
import { types } from "../types/types";
import Swal from 'sweetalert2';
import { setTotalMovementPages } from "./page";

export const insertMovement = (incompleteMove) => {

    return async (dispatch, useState) => {
        try {
            const state = useState();
            const movement = {
                ...incompleteMove,
                userId: state.auth.id,
                debt: state.debts.selected === '' ? null : state.debts.selected,
            }

            const resp = await walletApi('api/movements', 'POST', movement);

            if (resp.ok) {
                const move = await resp.json();

                if (state.movements.loaded) {
                    dispatch(movementAdd(move));
                    const records = state.pages.movement.total + 1;
                    const total = Math.ceil(records / 10);
                    dispatch(setTotalMovementPages(total, records));
                }
                Swal.fire('Movimiento Agregado', `El movimiento ${move.detail} se agrego correctamente.`, 'success');
            } else {
                console.log(await resp.json());
                throw new Error();
            }

        } catch (e) {
            Swal.fire('Error', 'No se pudo agregar movimiento', 'error');
        }
    }
};

function movementAdd(movement) {
    return {
        type: types.movementAdd,
        payload: movement
    }
}

export function loadMovements() {
    return async (dispatch, getState) => {
        try {
            const state = getState();
            const { selected: debt } = state.debts;
            const type = state.type;
            const { current } = state.pages.movement;
            const resp = await walletApi(`api/movements/?page=${current}&type=${type}&debt=${debt}`);

            if (resp.ok) {
                const respJson = await resp.json();
                const { movements, pages, totalRecords } = respJson;
                dispatch(setTotalMovementPages(pages, totalRecords));
                dispatch(setMovements(movements));

            } else {
                throw new Error(await resp.json());
            }

        } catch (error) {

            Swal.fire('Error', 'No se pudieron cargar los movimientos', 'error');
        }
    }
};

export const setMovements = (movements) => {
    return {
        type: types.movementLoad,
        payload: movements
    }
};


export const deleteMovement = (idMovement) => {
    return async (dispatch) => {
        try {
            const resp = await walletApi(`api/movements/${idMovement}`, 'DELETE');
            if (resp.ok) {
                dispatch(loadMovements());
            } else {
                throw new Error();
            }
        } catch (error) {
            Swal.fire('Error', 'No se pudo eliminar el movimiento', 'error');
        }
    }
}