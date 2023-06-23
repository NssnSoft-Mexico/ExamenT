import React from 'react';
import {Route, Redirect } from 'react-router-dom';

const user = JSON.parse(localStorage.getItem('user'));
var result = false;
if(user) {
    if (user.user.usuarioValido === "OK") {
        result =  true;
    } else {
        result = false;
    }
}

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        result
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />
)