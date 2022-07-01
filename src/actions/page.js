import { types } from "../types/types";

export function setTotalMovementPages(total, records) {
    return {
        type: types.pagesMovementTotal,
        payload: { total, records }
    }
}

export function setCurrentMovementPage(current) {
    return {
        type: types.pagesMovementCurrent,
        payload: current
    }
}

export function setTotalDebtPages(total, records) {
    return {
        type: types.pagesDebtTotal,
        payload: { total, records }
    }
}

export function setCurrentDebtPage(current) {
    return {
        type: types.pagesDebtCurrent,
        payload: current
    }
}

