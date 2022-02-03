import React from 'react';
import SideBar from './sidebar/sidebar';
import PlayBar from './playbar/playbar_container';
import Home from './main/home';
import SearchComp from './main/search'
import PlaylistContainer from './main/playlist/playlist_container';
import AlbumContainer from './main/album/album_container'
import { Switch, Route } from 'react-router'
import Modal from './main/modal'

const WebPlayer = () => (
    <div id="web-container">
        <Modal />
        <SideBar/>
            <Switch>
                <Home exact path="/web"/>
                <Route path="/web/playlist/*" component={PlaylistContainer} /> 
                <Route path="/web/albums/*" component={AlbumContainer} /> 
                <Route path="/web/search/" component={SearchComp} />
            </Switch>
        <PlayBar />
    </div>
);

export default WebPlayer