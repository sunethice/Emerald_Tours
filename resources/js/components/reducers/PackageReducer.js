import { LIST_PACKAGES, LIST_PACKAGES_FAILURE } from '../actions/actionTypes';

export const PackageReducer = (state = {}, action) => {
    const { type, payload } = action;

    switch(type){
        case LIST_PACKAGES:
            return {
                ...state,
                packages: payload
            };
        case LIST_PACKAGES_FAILURE:
            return state;
        default:
            return state;
    }
}
