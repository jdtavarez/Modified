import React from 'react';
import SideBar from './sidebar/sidebar';
import PlayBar from './playbar/playbar';
import Home from './main/home';
import PlaylistShowContainer from './main/playlist_show_container';
import { Switch, Route, Router } from 'react-router'
// import PlayBarContainer from './playbar/playbar_container'
// import SideBarContainer from './sidebar/sidebar_container'
// import WebMainContainer from './main/web_main_container'

const WebPlayer = () => (
    <div id="web-container">
        <SideBar/>
            <Switch>
                    <Home exact path="/web"/>
                    <Route path="/web/playlist/*" component={PlaylistShowContainer} /> 
            </Switch>
        <PlayBar />
    </div>
);

export default WebPlayer