import { constant } from "lodash";
import {
    LIST_TRANSFERS,
    LIST_TRANSFERS_FAILURE,
    ADD_TRANSFER,
    EDIT_TRANSFER
} from "../actions/actionTypes";

export const TransferReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case LIST_TRANSFERS:
            return {
                ...state,
                transfers: payload
            };
        case LIST_TRANSFERS_FAILURE:
            return state;
        case ADD_TRANSFER:
            return {
                ...state,
                transfers: [...state.transfers, payload]
            };
        case EDIT_TRANSFER:
            let index = state.transfers.findIndex(obj => obj.id === payload.id),
                oldItem = state.transfers[index];
            // create a cloned item with the property changes applied
            let clonedItem = Object.freeze(Object.assign({}, oldItem, payload));
            return Object.assign({}, state, {
                // items array clone with the updated item
                transfers: state.transfers
                    .slice(0, index)
                    .concat([clonedItem])
                    .concat(state.transfers.slice(index + 1))
            });
        default:
            return state;
    }
};
