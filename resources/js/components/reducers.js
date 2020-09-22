import { LIST_PACKAGES, LIST_PACKAGES_FAILURE } from './actionTypes';

export const packages = (state = [], action) => {
    const { type, payload } = action;

    switch(type){
        case LIST_PACKAGES:
            // console.log(JSON.stringify(payload));
            // const { text } = payload;
            const newList = {
                packages: payload
            };
            return state.concat(newList);
        case LIST_PACKAGES_FAILURE:
            return state;
        default:
            return state;
    }
}
