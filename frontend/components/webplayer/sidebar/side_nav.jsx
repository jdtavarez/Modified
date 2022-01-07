import React from "react"

export default class SideNav extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div className="web-nav-bar">
                <div className="web-logo">
                    Logo
                </div>
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