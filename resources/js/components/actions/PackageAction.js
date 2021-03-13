import axios from "axios";
import notifyService from "../services/notifyService";
import {
    LIST_PACKAGES,
    LIST_PACKAGE_IDS,
    LIST_PACKAGES_FAILURE,
    ADD_PACKAGE,
    ADD_PACKAGE_FAILURE,
    EDIT_PACKAGE,
    EDIT_PACKAGE_FAILURE
} from "./actionTypes";

export function listPackages() {
    return dispatch => {
        axios
            .get("/api/packages")
            .then(res => {
                dispatch({ type: LIST_PACKAGES, payload: res.data });
            })
            .catch(error => {
                dispatch({ type: LIST_PACKAGES_FAILURE, payload: error });
            });
    };
}

export function listPackageIDs() {
    return dispatch => {
        axios
            .get("/api/packageids")
            .then(response => {
                if (response.status == 200) {
                    dispatch({
                        type: LIST_PACKAGE_IDS,
                        payload: response.data.packageMeta
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

export function addPackage(
    pName,
    pDescription,
    pNoOfDays,
    pNoOfNights,
    pDestination,
    pFeatured
) {
    return dispatch => {
        axios
            .post("/api/addpackage", {
                name: pName,
                description: pDescription,
                no_of_days: pNoOfDays,
                no_of_nights: pNoOfNights,
                destination: pDestination,
                featured: pFeatured
            })
            .then(response => {
                if (response.status == 200) {
                    notifyService.notify(
                        response.data.message,
                        notifyService.Notifications.Success
                    );
                    dispatch({
                        type: ADD_PACKAGE,
                        payload: response.data.packageEntry
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
export function editPackage(
    pPackageID,
    pName,
    pDestination,
    pDescription,
    pNoOfDays,
    pNoOfNights,
    pFeatured
) {
    return dispatch => {
        axios
            .post("/api/editpackage", {
                package_id: pPackageID,
                name: pName,
                description: pDescription,
                no_of_days: pNoOfDays,
                no_of_nights: pNoOfNights,
                destination: pDestination,
                featured: pFeatured
            })
            .then(response => {
                if (response.status == 200) {
                    notifyService.notify(
                        response.data.message,
                        notifyService.Notifications.Success
                    );
                    dispatch({
                        type: EDIT_PACKAGE,
                        payload: response.data.packageEntry
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

export function getPackage(pPackageID) {
    return dispatch => {
        axios
            .get("/api/getpackage", {
                package_id: pPackageID,
                name: pName,
                description: pDescription,
                no_of_days: pNoOfDays,
                no_of_nights: pNoOfNights,
                destination: pDestination,
                featured: pFeatured
            })
            .then(response => {
                if (response.status == 200) {
                    notifyService.notify(
                        response.data.message,
                        notifyService.Notifications.Success
                    );
                    dispatch({
                        type: EDIT_PACKAGE,
                        payload: response.data.packageEntry
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
