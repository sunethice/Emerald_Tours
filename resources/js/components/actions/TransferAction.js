import axios from "axios";
import notifyService from "../services/notifyService";
import {
    LIST_TRANSFERS,
    LIST_TRANSFERS_FAILURE,
    ADD_TRANSFER,
    EDIT_TRANSFER,
    DELETE_TRANSFER
} from "./actionTypes";

export function listTransfers() {
    return dispatch => {
        axios
            .get("/api/gettransferlist")
            .then(res => {
                if (res.status == 200) {
                    dispatch({ type: LIST_TRANSFERS, payload: res.data });
                } else {
                    notifyService.notify(
                        res.data.message,
                        notifyService.Notifications.Failure
                    );
                }
            })
            .catch(function(err) {
                notifyService.notify(err, notifyService.Notifications.Failure);
                // dispatch({ type: LIST_TRANSFERS_FAILURE, payload: error });
            });
    };
}

export function addTransfer(pFrom, pTo, pDriveTime, pCharge) {
    return dispatch => {
        axios
            .post("/api/addtransfer", {
                from: pFrom,
                to: pTo,
                drivetime: pDriveTime,
                charge: pCharge
            })
            .then(response => {
                if (response.status == 200) {
                    notifyService.notify(
                        response.data.message,
                        notifyService.Notifications.Success
                    );
                    dispatch({
                        type: ADD_TRANSFER,
                        payload: response.data.transferEntry
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
            });
    };
}

export function editTransfer(pId, pFrom, pTo, pDriveTime, pCharge) {
    return dispatch => {
        axios
            .post("/api/edittransfer", {
                id: pId,
                from: pFrom,
                to: pTo,
                drivetime: pDriveTime,
                charge: pCharge
            })
            .then(response => {
                if (response.status == 200) {
                    notifyService.notify(
                        response.data.message,
                        notifyService.Notifications.Success
                    );
                    dispatch({
                        type: EDIT_TRANSFER,
                        payload: response.data.transferEntry
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
            });
    };
}
