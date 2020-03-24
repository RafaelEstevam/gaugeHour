import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Redirect}from "react-router-dom";
import Login from './views/Login';
import Register from './views/Register';
import Home from './views/Home';
import Profile from './views/Profile';
import FourHundredFour from './views/FourHundredFour';
import auth from './services/auth';

class  PrivateRoute extends Component{
    render(){
        if(localStorage.getItem("token")){
            return (
                <Route path={this.props.path} exact={this.props.exact} component={this.props.component} />
            )
        }else{
            return (
                <Redirect to="/login" />
            )
        }
    }
}

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/login" exact={true} component={Login} />
            <Route path="/register" exact={true} component={Register} />
            <PrivateRoute path="/" exact={true} component={Home}/>
            <PrivateRoute path="/profile" exact={true} component={Profile}/>
            <Route path="*" exact={true} component={FourHundredFour} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root')
);

