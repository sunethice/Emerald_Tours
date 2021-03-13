import {
    LIST_EXCURSIONS,
    LIST_EXCURSION_IDS,
    LIST_EXCURSIONS_FAILURE,
    ADD_EXCURSION,
    EDIT_EXCURSION,
    ADD_EXCURSION_FAILURE,
    EDIT_EXCURSION_FAILURE
} from "../actions/actionTypes";

export const ExcursionReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case LIST_EXCURSIONS:
            return {
                ...state,
                excursions: payload
            };
        case LIST_EXCURSION_IDS:
            return {
                ...state,
                excursionMeta: payload
            };
        case LIST_EXCURSIONS_FAILURE:
            return state;
        case ADD_EXCURSION:
            return {
                ...state,
                excursions: [...state.excursions, payload]
            };
        case EDIT_EXCURSION:
            let index = state.excursions.findIndex(
                    obj => obj.excursion_id === payload.excursion_id
                ),
                oldItem = state.excursions[index];
            // create a cloned item with the property changes applied
            let clonedItem = Object.freeze(Object.assign({}, oldItem, payload));
            return Object.assign({}, state, {
                // items array clone with the updated item
                excursions: state.excursions
                    .slice(0, index)
                    .concat([clonedItem])
                    .concat(state.excursions.slice(index + 1))
            });
        case ADD_EXCURSION_FAILURE:
            return state;
        case EDIT_EXCURSION_FAILURE:
            return state;
        default:
            return state;
    }
};
