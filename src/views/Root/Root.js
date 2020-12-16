import React from 'react';
import "./Root.module.scss";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from "assets/functions/PrivateRoute"
import HomeView from '../HomeView/HomeView';
import LoginView from '../LoginView/LoginView'
import RegisterView from '../RegisterView/RegisterView'
import AuthPage from 'views/AuthPage/AuthPage';



const Root = () => {
    return (
        <Router basename="/">
            <Switch>
                <Route exact path="/" component={HomeView} />
                <Route exact path="/login" component={LoginView} />
                <Route exact path="/register" component={RegisterView} />
                <PrivateRoute path="/auth" component={AuthPage} />
            </Switch>
        </Router>
    );
}

export default Root;