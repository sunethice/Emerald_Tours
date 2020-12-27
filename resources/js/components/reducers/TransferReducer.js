import { constant } from "lodash";
import {
    LIST_TRANSFERS,
    LIST_TRANSFERS_FAILURE,
    ADD_TRANSFER
} from "../actions/actionTypes";

export const TransferReducer = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case LIST_TRANSFERS:
            return {
                ...state,
                transfers: payload
            };
        case ADD_TRANSFER:
            const { transfers } = state;
            return {
                ...state,
                transfers: [...transfers, payload]
            };
        case LIST_TRANSFERS_FAILURE:
            return state;
        default:
            return state;
    }
};
