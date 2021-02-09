import axios from "axios";
import { LIST_INQUIRIES, LIST_INQUIRIES_FAILURE } from "./actionTypes";

export function listInquiries() {
    return dispatch => {
        axios
            .get("/api/inquiries")
            .then(res => {
                dispatch({ type: LIST_INQUIRIES, payload: res.data });
            })
            .catch(error => {
                dispatch({ type: LIST_INQUIRIES_FAILURE, payload: error });
            });
    };
}
