import axios from "axios";
import notifyService from "../services/notifyService";
import {
    LIST_INQUIRIES,
    LIST_INQUIRIES_FAILURE,
    MARK_INQUIRIES,
    MARK_INQUIRIES_FAILURE
} from "./actionTypes";

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

export function MarkInquiry(InquiryId) {
    return dispatch => {
        axios
            .post("/api/mark_inquiry", { id: InquiryId })
            .then(res => {
                if (res.status == 200) {
                    notifyService.notify(
                        res.data.message,
                        notifyService.Notifications.Success
                    );
                    dispatch({
                        type: MARK_INQUIRIES,
                        payload: res.data.inquiryEntry
                    });
                } else {
                    notifyService.notify(
                        res.data.message,
                        notifyService.Notifications.Failure
                    );
                }
            })
            .catch(error => {
                dispatch({ type: MARK_INQUIRIES_FAILURE, payload: error });
            });
    };
}
