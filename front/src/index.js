import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Link}from "react-router-dom";
import Login from './views/Login';
import Register from './views/Register';
import FourHundredFour from './views/FourHundredFour';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/register" component={Register} />
            <Route path="*" exact={true} component={FourHundredFour} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root')
);

