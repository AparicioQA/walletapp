import { types } from "../types/types";

export const selectsDataReducer = (state = {}, action) => {
    switch (action.type) {
        case types.selectsDataLoad:
            return action.payload;

        default:
            return state;
    }
}