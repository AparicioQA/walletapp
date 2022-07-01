import { types } from "../types/types";

export function typeReducer(state = '', action) {
    switch (action.type) {
        case types.typeSet:
            return action.payload

        default:
            return state;
    }
}