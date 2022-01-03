import React from 'react';
import { Route } from 'react-router';
import { AuthRoute } from '../util/route_util';
import NavBarContainer from './splash/navbar/navbar_container'
import LoginFormContainer from './splash/session/login_form_container';
import SignUpFormContainer from './splash/session/signup_form_container'


const App = () => (
    <div>
        <Route exact path="/" component={NavBarContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignUpFormContainer} />
    </div>
);

export default App;