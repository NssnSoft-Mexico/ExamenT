/*La función despachadora (o simplemente función dispatch) es una función que acepta una acción o una acción asíncrona; 
* entonces puede o no despachar una o más acciones al store.*/
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE
  } from "./types";
  import AuthService from "../services/auth.service";

//Función Dispatch para el Login/
export const login = (username, password) => (dispatch) => {
    return AuthService.login(username, password).then(
        (data) => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: { user: data },
        });
            return Promise.resolve();
        },
        (error) => {
        const message =
            (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString();
        dispatch({
            type: LOGIN_FAIL,
        });
        dispatch({
            type: SET_MESSAGE,
            payload: message,
        });
            return Promise.reject();
        }
    );
};

//Función Dispatch para el Logout/
export const logout = () => (dispatch) => {
    AuthService.logout();
    dispatch({
        type: LOGOUT,
    });
};