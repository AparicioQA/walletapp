import { types } from "../types/types";

const initialState = {
    debts: [],
    selected: '',
    loaded: false
}

export function debtsReducer(state = initialState, action) {
    switch (action.type) {
        case types.debtsLoad:
            return {
                ...state,
                debts: action.payload,
                loaded: true
            }

        case types.selectedDebt:
            return {
                ...state,
                selected: action.payload
            }
        case types.debtAdd:
            return {
                ...state,
                debts: state.debts === 10 ? [action.payload, ...state.debts.slice(0, state.debts.length - 1)] :
                    [action.payload, ...state.debts],
            }


        default:
            return state;
    }
}