import React from 'react';
import { Route, Routes } from 'react-router';
import NavBarContainer from './splash/navbar/navbar'
import LoginFormContainer from './splash/session/login_form_container';
import SignUpFormContainer from './splash/session/signup_form_container'

const App = ({ props }) => (
    <div>
        <Routes>
            <Route exact path="/" element={<NavBarContainer />} />
            <Route exact path="/login" element={<LoginFormContainer />} />
            <Route exact path="/signup" element={<SignUpFormContainer />} />
        </Routes>
    </div>
);

export default App;