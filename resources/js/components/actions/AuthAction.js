import axios from "axios";
import notifyService from "../services/notifyService";
import { SIGNIN, SIGNOUT, SIGNUP } from "./actionTypes";

export function signIn(isAdmin, credentials) {
    console.log("credentials");
    console.log(credentials);
    return dispatch => {
        axios
            .post(isAdmin ? "/api/admin/signin" : "/api/user/signin", {
                email: credentials.email,
                password: credentials.password,
                rememberMe: false
            })
            .then(res => {
                // console.log("onSign success");
                // console.log(res);
                if (res.status == 200) {
                    dispatch({ type: SIGNIN, payload: res.data });
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

export function signUp() {
    return dispatch => {
        axios
            .get("/api/user/signup")
            .then(res => {
                if (res.status == 200) {
                    dispatch({ type: SIGNUP, payload: res.data });
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
