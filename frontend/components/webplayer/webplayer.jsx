import React from 'react';
import TopBar from './topbar/topbar'
import SideBar from './sidebar/sidebar';
import PlayBar from './playbar/playbar_container';
import Home from './main/home/home_container';
import SearchComp from './main/search/search_container';
import Category from './main/search/category_container';
import Playlist from './main/playlist/playlist_container';
import Album from './main/album/album_container';
import User from './main/user/user_container';
import Artist from './main/artist/artist_container';
import Modal from './main/modal';
import { Switch, Route } from 'react-router';

const WebPlayer = () => (
    <div id="web-container">
        <TopBar />
        <Modal />
        <SideBar/>
            <Switch>
                <Home exact path="/web"/>
                <Route path="/web/playlists/*" component={Playlist} /> 
                <Route path="/web/albums/*" component={Album} /> 
                <Route path="/web/search/" component={SearchComp} />
                <Route path="/web/genre/*" component={Category} />
                <Route path="/web/artists/*" component={Artist} />
                <Route path="/web/users/*" component={User} />
            </Switch>
        <PlayBar />
    </div>
);

export default WebPlayer