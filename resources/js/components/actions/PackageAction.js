import axios from "axios";
import { LIST_PACKAGES, LIST_PACKAGES_FAILURE } from "./actionTypes";

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
