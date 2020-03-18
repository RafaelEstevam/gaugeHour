import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Redirect}from "react-router-dom";
import Login from './views/Login';
import Register from './views/Register';
import Home from './views/Home';
import Profile from './views/Profile';
import FourHundredFour from './views/FourHundredFour';
import auth from './services/auth';
const authUser = auth.getUserAuth();

const privateRoutes = [
    {path: "/", component: Home},
    {path: "/profile", component: Profile}
]

function privateRoute(){
    if(!authUser.token){
        return false;
    }else{
        return privateRoutes.map((item, index) =>{
            return (
                <Route path={item.path} key={index} exact={true} component={item.component} />
            )
        })
    }
}

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/login" exact={true} component={Login} />
            <Route path="/register" exact={true} component={Register} />
            {privateRoute()}
            <Route path="*" exact={true} component={FourHundredFour} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root')
);

