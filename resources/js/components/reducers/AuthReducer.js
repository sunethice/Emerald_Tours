import { SIGNIN, SIGNOUT } from "../actions/actionTypes";

export const AuthReducer = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case SIGNIN:
            return {
                ...state,
                user: payload
            };
        case SIGNOUT:
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
};
