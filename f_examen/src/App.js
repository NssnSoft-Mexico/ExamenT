import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/login/Login';
import Inicio from './components/inicio/Inicio';
import Alta from './components/alta/Alta';
import ModAlta from './components/AltaMod/ModAlta';
import { PrivateRoute } from "./components/privateroute/PrivateRoute";
import { Apps } from '@mui/icons-material';
import CartItems from './components/cartShop/index';
import Default from './components/DefaultPage/default';
import ResponsiveAppBar from './components/Header/Header';
import Logins from './components/login/Logins';
const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/default"]} component={Default} />
        <Route exact path={["/", "/login"]} component={Login} />
        <PrivateRoute path="/inicio" component={Inicio} />
        <PrivateRoute path="/alta" component={Alta} />
        <PrivateRoute path="/altaM" component={ModAlta} />
        <PrivateRoute path="/altaMs" component={CartItems} />
        <PrivateRoute path="/AppBar" component={ResponsiveAppBar} />
        <Route path="/Logins" component={Logins} />
      </Switch>
    </Router>
  );
}

export default App;