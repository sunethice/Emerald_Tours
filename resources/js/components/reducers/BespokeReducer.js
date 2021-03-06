import {
    LIST_INQUIRIES,
    LIST_INQUIRIES_FAILURE,
    MARK_INQUIRIES,
    MARK_INQUIRIES_FAILURE
} from "../actions/actionTypes";

export const BespokeReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case LIST_INQUIRIES:
            return {
                ...state,
                inquiries: payload
            };
        case LIST_INQUIRIES_FAILURE:
            return state;
        case MARK_INQUIRIES:
            let index = state.inquiries.findIndex(obj => obj.id === payload.id),
                oldItem = state.inquiries[index];
            // create a cloned item with the property changes applied
            let clonedItem = Object.freeze(Object.assign({}, oldItem, payload));
            return Object.assign({}, state, {
                // items array clone with the updated item
                inquiries: state.inquiries
                    .slice(0, index)
                    .concat([clonedItem])
                    .concat(state.inquiries.slice(index + 1))
            });
        case MARK_INQUIRIES_FAILURE:
            return state;
        default:
            return state;
    }
};
