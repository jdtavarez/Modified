import React from "react"
import { Link } from 'react-router-dom'

export default class SideNav extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.newPlaylistId = 0;
    }

    handleClick(e) {
        e.preventDefault()
        this.props.createPlaylist().then(() => {
            this.newPlaylistId = Object.keys(this.props.playlists).slice(-2, -1)
            this.props.fetchCreatorPlaylists("users", this.props.currentUser.id).then(() => {
                this.props.history.push(`/web/playlist/${this.newPlaylistId}`)
            })
        })
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
                <Link className="nav-playlist" onClick={this.handleClick} to="/web/">
                    <i className="fas fa-plus-square"></i>
                    <div className="playlist-text">Create Playlist</div>
                </Link>
            </div>
        )
    }
}