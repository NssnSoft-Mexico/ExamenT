import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Inicio from './components/inicio/Inicio';
import Alta from './components/alta/Alta';
import ModAlta from './components/AltaMod/ModAlta';
import { PrivateRoute } from "./components/privateroute/PrivateRoute";
import CartItems from './components/cartShop/index';
import Default from './components/DefaultPage/default';
import ResponsiveAppBar from './components/Header/Header';
import Login from './components/login/Login';
import Data from './components/DataRegister/Data';
import Footer from './components/Footer/Fotter';
import Slider from './components/Carrousel/Sliders';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/default" component={Default} />
        <PrivateRoute path="/inicio" component={Inicio} />
        <PrivateRoute path="/alta" component={Alta} />
        <PrivateRoute path="/altaM" component={ModAlta} />
        <PrivateRoute path="/altaMs" component={CartItems} />
        <PrivateRoute path="/AppBar" component={ResponsiveAppBar} />
        <PrivateRoute path="/Footer" component={Footer} />
        <PrivateRoute path="/Slider" component={Slider} />
        <Route exact path={["/", "/Login"]} component={Login}  />
        <Route path="/Data" component={Data} />
      </Switch>
    </Router>
  );
}

export default App;