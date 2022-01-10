import React from "react";
import { Link } from "react-router-dom";
import SideNav from './side_nav'
import PlaylistIndexContainer from './playlist_index_container';


export default class SideBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div id="web-side-bar">
                <SideNav />
                <PlaylistIndexContainer />
            </div>
        )
    }
}