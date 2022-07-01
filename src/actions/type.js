import { types } from "../types/types";

export const setType = (type) => {
    return {
        type: types.typeSet,
        payload: type
    }
}