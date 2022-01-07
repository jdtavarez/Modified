import React from 'react';
import SideBar from './sidebar/sidebar';
import PlayBar from './playbar/playbar';
import Home from './main/home';
// import PlayBarContainer from './playbar/playbar_container'
// import SideBarContainer from './sidebar/sidebar_container'
// import WebMainContainer from './main/web_main_container'

const WebPlayer = () => (
    <div id="web-container">
        <SideBar/>
        <Home />
        <PlayBar />
    </div>
);

export default WebPlayer