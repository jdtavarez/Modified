import React from "react";
import { Link } from "react-router-dom";
import SideNavContainer from './side_nav_container'
import PlaylistIndexContainer from './playlist_index_container';


export default class SideBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div id="web-side-bar">
                <SideNavContainer />
                <PlaylistIndexContainer />
            </div>
        )
    }
}