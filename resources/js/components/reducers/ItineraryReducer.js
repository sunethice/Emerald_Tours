import {
    LIST_ITINERARIES,
    LIST_ITINERARIES_FAILURE,
    ADD_ITINERARY,
    EDIT_ITINERARY,
    ADD_ITINERARY_FAILURE,
    EDIT_ITINERARY_FAILURE
} from "../actions/actionTypes";

export const ItineraryReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case LIST_ITINERARIES:
            return {
                ...state,
                itineraries: payload
            };
        case LIST_ITINERARIES_FAILURE:
            return state;
        case ADD_ITINERARY:
            return {
                ...state,
                itineraries: [...state.itineraries, payload]
            };
        case EDIT_ITINERARY:
            let index = state.itineraries.findIndex(
                    obj => obj.itinerary_id === payload.itinerary_id
                ),
                oldItem = state.itineraries[index];
            // create a cloned item with the property changes applied
            let clonedItem = Object.freeze(Object.assign({}, oldItem, payload));
            return Object.assign({}, state, {
                // items array clone with the updated item
                itineraries: state.itineraries
                    .slice(0, index)
                    .concat([clonedItem])
                    .concat(state.itineraries.slice(index + 1))
            });
        case ADD_ITINERARY_FAILURE:
            return state;
        case EDIT_ITINERARY_FAILURE:
            return state;
        default:
            return state;
    }
};
