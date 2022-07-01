import { types } from "../types/types";

export function authReducer(state = {}, action) {

    switch (action.type) {
        case types.login:
            return {
                id: action.payload.id,
                userName: action.payload.username,
                token: action.payload.token
            }

        case types.logout:
            return {};

        default:
            return state;
    }
}