import axios from "axios";
import notifyService from "../services/notifyService";
import {
    LIST_ITINERARIES,
    LIST_ITINERARIES_FAILURE,
    ADD_ITINERARY,
    ADD_ITINERARY_FAILURE,
    EDIT_ITINERARY,
    EDIT_ITINERARY_FAILURE
} from "./actionTypes";

export function listItineraries() {
    return dispatch => {
        axios
            .get("/api/itineraries")
            .then(res => {
                dispatch({ type: LIST_ITINERARIES, payload: res.data });
            })
            .catch(error => {
                dispatch({ type: LIST_ITINERARIES_FAILURE, payload: error });
            });
    };
}

export function addItinerary(pDescription, pFeatures, pPackageID) {
    return dispatch => {
        axios
            .post("/api/additinerary", {
                description: pDescription,
                features: pFeatures,
                package_id: pPackageID
            })
            .then(response => {
                if (response.status == 200) {
                    notifyService.notify(
                        response.data.message,
                        notifyService.Notifications.Success
                    );
                    dispatch({
                        type: ADD_ITINERARY,
                        payload: response.data.itineraryEntry
                    });
                } else {
                    notifyService.notify(
                        response.data.message,
                        notifyService.Notifications.Failure
                    );
                }
            })
            .catch(error => {
                console.log(error.response);
            });
    };
}
export function editItinerary(
    pItineraryID,
    pDescription,
    pFeatures,
    pPackageID
) {
    return dispatch => {
        axios
            .post("/api/edititinerary", {
                itinerary_id: pItineraryID,
                description: pDescription,
                features: pFeatures,
                package_id: pPackageID
            })
            .then(response => {
                if (response.status == 200) {
                    notifyService.notify(
                        response.data.message,
                        notifyService.Notifications.Success
                    );
                    dispatch({
                        type: EDIT_ITINERARY,
                        payload: response.data.itineraryEntry
                    });
                } else {
                    notifyService.notify(
                        response.data.message,
                        notifyService.Notifications.Failure
                    );
                }
            })
            .catch(error => {
                console.log(error.response);
            });
    };
}
