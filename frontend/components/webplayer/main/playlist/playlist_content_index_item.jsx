import React from "react";
import { Link } from "react-router-dom";

export default class PlaylistContentIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = { mouseOver: false }

        this.formatDate = this.formatDate.bind(this);
        this.formatDuration = this.formatDuration.bind(this);
        this.handleDoubleClick = this.handleDoubleClick.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleNavClick = this.handleNavClick.bind(this);
        this.addPlistMouseOver = this.addPlistMouseOver.bind(this);
        this.addPlistMouseOff = this.addPlistMouseOff.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    formatDate () {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const date = new Date(this.props.content.date_added);
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        const day = date.getDate();
        return `${month} ${day}, ${year}`
    }

    formatDuration() {
        const duration = this.props.content.length;
        const minutes = Math.floor(duration / 60);
        let seconds = duration % 60;
        if (seconds < 10) seconds = `0${seconds}`
        return `${minutes}:${seconds}`
    }

    handleDoubleClick() {
        const startPos = this.props.position;
        const contentIds = this.props.contents.contentIds;
        const contents = this.props.contents.contents;
        const queueIds = contentIds.slice((startPos-1));
        const currentContentId = queueIds[0];
        const queue = {}; 
        queueIds.map(contentId => (queue[contentId] = contents[contentId]))
        this.props.receiveQueue(queue);
        this.props.receiveCurrentContent(currentContentId);
        this.props.play(true);
    }

    handleMouseOver(e) {
        e.stopPropagation();
        this.setState({ mouseOver: true })
    }

    handleMouseOut(e) {
        e.stopPropagation();
        this.setState({ mouseOver: false })
    }

    handleNavClick(e) {
        e.stopPropagation();
        const container = document.getElementsByClassName("index-dropdown-content")[0];
        container.classList.toggle("display-items");
        document.addEventListener("click", this.handleBlur);
        
    }

    addPlistMouseOver() {
        const container = document.getElementsByClassName("hidden-playlists")[0];
        container.classList.add("display-items");
    }

    addPlistMouseOff() {
        const container = document.getElementsByClassName("hidden-playlists")[0];
        container.classList.remove("display-items");
    }

    handleBlur() {
        const container = document.getElementsByClassName("index-dropdown-content")[0];
        const playlist = document.getElementsByClassName("hidden-playlists")[0];
        if (playlist) {
            [container, playlist].forEach(element => element.classList.toggle('display-items'))
        } else {
            container.classList.toggle("display-items");
        }
        document.removeEventListener("click", this.handleBlur)
    }


    render () {

        let position;

        if (this.state.mouseOver) {
            if (parseInt(this.props.currentContent) === this.props.content.id && this.props.playing) {
                position = (<i id="index-pause" className="fas fa-pause" onClick={() => { this.props.play(false) }}></i>)
            } else {
                position = (<i id="index-play" className="fas fa-play" onClick={this.handleDoubleClick}></i>)
            }
        } else {
            position = <div>{this.props.position}</div> 
        }

        const options = this.state.mouseOver ? <i id="index-options" className="fas fa-ellipsis-h"></i> : <div id="index-options"></div>;

        const playlistIndex = this.props.playlists ? Object.values(this.props.playlists).slice(0, -1).map((playlist) => (<div key={playlist.id}> {playlist.title} </div>)) : ("");

        let playlist_nav;

        if (this.props.currentUser.id === this.props.creator_id) {
            playlist_nav = (<div className="index-dropdown-content">
                <div className="index-options-list">
                    <div>
                        <div className="playlists-list" onMouseOver={this.addPlistMouseOver}>
                            Add to playlist
                        </div>
                        <div className="hidden-playlists">
                            {playlistIndex}
                        </div>
                    </div>
                    <a onMouseOver={this.addPlistMouseOff}>Remove from this playlist</a>
                </div>
                
            </div>)
        }

        return (
            <div className="content-index-item" onDoubleClick={this.handleDoubleClick} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                <div className="position">{position}</div>
                <div className="title">
                    <div className="song-meta-data">
                        <img src={this.props.content.image_url} className="plist-album-cover" alt="" />
                        <div className="pl-song-info">
                            <p className="pl-song-title">{this.props.content.title}</p>
                            <Link className="pl-artist-link" to={`/web/artists/${this.props.artist.id}`}>{this.props.artist.name}</Link>
                        </div>
                    </div>
                </div>
                <div className="album">
                    <Link className="pl-album-link" to={`/web/albums/${this.props.album.id}`}>{this.props.album.title}</Link>
                    </div>
                <div className="date-added">{this.formatDate()}</div>
                <div className="duration">{this.formatDuration()}</div>
                <div className="index-options-container" onClick={this.handleNavClick}>
                    {options}
                    {playlist_nav}
                </div>
            </div>
        )
        
    }
    
}