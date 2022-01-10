import React from "react"
import { Link } from 'react-router-dom'

export default class SideNav extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div className="web-nav-bar">
                <Link to="/web/"className="sidebar-logo">
                    <img src={window.logoWhite} alt="modified logo" />
                    <p>Modified</p>
                </Link>
                
                <div className="nav-func">
                    <a href="#">Home</a>
                    <a href="#">Search</a>
                    <a href="#">Your Library</a>
                </div>
                <div className="nav-playlist">
                    <a href="">Create Playlist</a>
                    {/* <a href="">Liked Songs</a> */}
                    <a href=""></a>
                </div>
            </div>
        )
    }
}