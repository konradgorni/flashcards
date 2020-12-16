import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthHomeView from 'views/AuthHomeView/AuthHomeView'



const AuthPage = () => {
    return (
        <>

            <Switch>
                <Route path="/auth/home" component={AuthHomeView} />
            </Switch>

        </>
    );
};

export default AuthPage;