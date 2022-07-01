import { types } from "../types/types";

const initialState = {
    movement: {
        total: 0,
        current: 1,
        records: 0,
    },
    debt: {
        total: 0,
        current: 1,
        records: 0,
    }

}

export const pagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.pagesMovementTotal:
            return {
                ...state,
                movement: {
                    ...state.movement,
                    total: action.payload.total,
                    records: action.payload.records
                }
            }
        case types.pagesMovementCurrent:
            return {
                ...state,
                movement: {
                    ...state.movement,
                    current: action.payload
                }
            }

        case types.pagesDebtTotal:
            return {
                ...state,
                debt: {
                    ...state.debt,
                    total: action.payload.total,
                    records: action.payload.records
                }
            }
        case types.pagesDebtCurrent:
            return {
                ...state,
                debt: {
                    ...state.debt,
                    current: action.payload
                }
            }

        default:
            return state;
    }
} 