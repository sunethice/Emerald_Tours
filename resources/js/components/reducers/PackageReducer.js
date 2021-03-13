import {
    LIST_PACKAGES,
    LIST_PACKAGE_IDS,
    LIST_PACKAGES_FAILURE,
    ADD_PACKAGE,
    EDIT_PACKAGE,
    ADD_PACKAGE_FAILURE,
    EDIT_PACKAGE_FAILURE
} from "../actions/actionTypes";

export const PackageReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case LIST_PACKAGES:
            return {
                ...state,
                packages: payload
            };
        case LIST_PACKAGE_IDS:
            return {
                ...state,
                packageMeta: payload
            };
        case LIST_PACKAGES_FAILURE:
            return state;
        case ADD_PACKAGE:
            return {
                ...state,
                packages: [...state.packages, payload]
            };
        case EDIT_PACKAGE:
            let index = state.packages.findIndex(
                    obj => obj.package_id === payload.package_id
                ),
                oldItem = state.packages[index];
            // create a cloned item with the property changes applied
            let clonedItem = Object.freeze(Object.assign({}, oldItem, payload));
            return Object.assign({}, state, {
                // items array clone with the updated item
                packages: state.packages
                    .slice(0, index)
                    .concat([clonedItem])
                    .concat(state.packages.slice(index + 1))
            });
        case ADD_PACKAGE_FAILURE:
            return state;
        case EDIT_PACKAGE_FAILURE:
            return state;
        default:
            return state;
    }
};
