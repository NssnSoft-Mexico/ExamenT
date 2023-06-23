import axios from 'axios';
import {API_PORTAL_URL} from '../constants';

const login = (username, password) => {
    return axios
        .post(API_PORTAL_URL + "auth/signin", {
            username,
            password,
        })
        .then((response) => {
            console.log("data", response.data.user.usuarioValido)
            if (response.data.user.usuarioValido === "OK") {
                localStorage.setItem("tipo", JSON.stringify(response.data.user.tipo));
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
}

const logout = () => {
    localStorage.removeItem("user");
};

const loginLogout = {
    login,
    logout
};

export default loginLogout;