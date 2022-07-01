import { types } from "../types/types";

const initialState = {
    balances: [],
}

export function balancesReducer(state = initialState, action) {
    switch (action.type) {

        case types.balancesLoad:
            return {
                ...state,
                balances: [...action.payload]
            }

        default:
            return state;
    }
}