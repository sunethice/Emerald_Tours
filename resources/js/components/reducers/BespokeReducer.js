import { LIST_INQUIRIES, LIST_INQUIRIES_FAILURE } from "../actions/actionTypes";

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
        default:
            return state;
    }
};
