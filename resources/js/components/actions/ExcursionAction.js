import axios from "axios";
import notifyService from "../services/notifyService";
import {
    LIST_EXCURSIONS,
    LIST_EXCURSION_IDS,
    LIST_EXCURSIONS_FAILURE,
    ADD_EXCURSION,
    ADD_EXCURSION_FAILURE,
    EDIT_EXCURSION,
    EDIT_EXCURSION_FAILURE
} from "./actionTypes";

export function listExcursions() {
    return dispatch => {
        axios
            .get("/api/excursions")
            .then(res => {
                dispatch({ type: LIST_EXCURSIONS, payload: res.data });
            })
            .catch(error => {
                dispatch({ type: LIST_EXCURSIONS_FAILURE, payload: error });
            });
    };
}

export function listExcursionIDs() {
    return dispatch => {
        axios
            .get("/api/excursionids")
            .then(response => {
                if (response.status == 200) {
                    dispatch({
                        type: LIST_EXCURSION_IDS,
                        payload: response.data.excursionMeta
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
                // dispatch({ type: LIST_PACKAGES_FAILURE, payload: error });
            });
    };
}

export function addExcursion(pName, pDescription) {
    return dispatch => {
        axios
            .post("/api/addexcursion", {
                name: pName,
                description: pDescription
            })
            .then(response => {
                if (response.status == 200) {
                    notifyService.notify(
                        response.data.message,
                        notifyService.Notifications.Success
                    );
                    dispatch({
                        type: ADD_EXCURSION,
                        payload: response.data.excursionEntry
                    });
                } else {
                    notifyService.notify(
                        response.data.message,
                        notifyService.Notifications.Failure
                    );
                }
                // this.formReset();
                // console.log(response);
            })
            .catch(error => {
                console.log(error.response);
                // dispatch({ type: LIST_PACKAGES_FAILURE, payload: error });
            });
    };
}
export function editExcursion(
    pExcursionID,
    pName,
    pDescription
    // pDestination,
) {
    return dispatch => {
        axios
            .post("/api/editexcursion", {
                excursion_id: pExcursionID,
                name: pName,
                description: pDescription
                // destination: pDestination
            })
            .then(response => {
                if (response.status == 200) {
                    notifyService.notify(
                        response.data.message,
                        notifyService.Notifications.Success
                    );
                    dispatch({
                        type: EDIT_EXCURSION,
                        payload: response.data.excursionEntry
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

export function getExcursion(pExcursionID) {
    return dispatch => {
        axios
            .get("/api/getexcursion", {
                excursion_id: pExcursionID
            })
            .then(response => {
                if (response.status == 200) {
                    notifyService.notify(
                        response.data.message,
                        notifyService.Notifications.Success
                    );
                    dispatch({
                        type: EDIT_EXCURSION,
                        payload: response.data.excursionEntry
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
