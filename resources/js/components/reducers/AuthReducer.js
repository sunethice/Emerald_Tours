import { SIGNIN, SIGNOUT } from '../actions/actionTypes';

export const AuthReducer = (state = {}, action) => {
    const { type, payload } = action;

    switch(type){
        case SIGNIN:
            return {
                ...state,
                packages: payload
            };
        case SIGNOUT:
            return state;
        default:
            return state;
    }
}
