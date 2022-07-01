import { types } from "../types/types";

const initialState = {
    movements: [],
    loaded: false
}

export function movementsReducer(state = initialState, action) {

    switch (action.type) {
        case types.movementLoad:
            return {
                ...state,
                movements: [...action.payload],
                loaded: true
            }

        case types.movementAdd:
            return {
                ...state,
                movements: state.movements === 10 ? [action.payload, ...state.movements.slice(0, state.movements.length - 1)] :
                    [action.payload, ...state.movements],
            }

        default:
            return state;
    }
}