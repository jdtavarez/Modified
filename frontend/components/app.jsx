import React from 'react';
import { Route } from 'react-router';
import { AuthRoute } from '../util/route_util';
import SplashPage from './splash/splash_page'
import WebPlayer from './webplayer/webplayer'
import LoginFormContainer from './splash/session/login_form_container';
import SignUpFormContainer from './splash/session/signup_form_container'


const App = () => (
    <div id="app-container">
        <Route exact path="/" component={SplashPage} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignUpFormContainer} />
        <Route path="/web" component={WebPlayer}/>
    </div>
);

export default App;