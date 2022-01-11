import React from 'react';
import SideBar from './sidebar/sidebar';
import PlayBar from './playbar/playbar';
import Home from './main/home';
import PlaylistContainer from './main/playlist_container';
import AlbumContainer from './main/album_container'
import { Switch, Route, Router } from 'react-router'
import Modal from './main/modal'
// import PlayBarContainer from './playbar/playbar_container'
// import SideBarContainer from './sidebar/sidebar_container'
// import WebMainContainer from './main/web_main_container'

const WebPlayer = () => (
    <div id="web-container">
        <Modal />
        <SideBar/>
            <Switch>
                <Home exact path="/web"/>
                <Route path="/web/playlist/*" component={PlaylistContainer} /> 
                <Route path="/web/albums/*" component={AlbumContainer} /> 
            </Switch>
        <PlayBar />
    </div>
);

export default WebPlayer