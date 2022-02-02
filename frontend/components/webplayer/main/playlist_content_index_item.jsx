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
        this.handleButtonClick = this.handleButtonClick.bind(this);
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

    handleMouseOver() {
        this.setState({ mouseOver: true })
    }

    handleMouseOut() {
        this.setState({ mouseOver: false })
    }

    handleButtonClick(e) {
        e.stopPropagation()
        const buttonClass = document.getElementsByClassName("pl-btn")[0].classList;
        if (buttonClass.contains("pl-modal-active")) {
            buttonClass.toggle("pl-modal-active")
            const container = document.getElementsByClassName("pl-nav-dropdown-content")[0];
            container.classList.remove("display-items")
        } else {
            buttonClass.toggle("pl-modal-active")
            const container = document.getElementsByClassName("pl-nav-dropdown-content")[0];
            container.classList.add("display-items")
        }
    }

    render () {

        const playlistIndex = this.props.playlists ? Object.values(this.props.playlists).slice(0, -1).map((playlist) => (<div key={playlist.id}> {playlist.title} </div>)) : ("")
        let playlist_nav;

        if (this.props.currentUser.id === this.props.creator_id) {
            playlist_nav = (<div className="pl-nav-dropdown-content">
                <div className="pl-options-list">
                    <div className="pl-nav-dropdown-content">
                        Add to Playlist
                        <div className="pl-options-list">
                            {playlistIndex}
                        </div>
                        <a onClick={() => this.props.openModal('editPlaylist')}>Edit details</a>
                    </div>
                    
                    <a onClick={() => this.props.openModal('deletePlaylist')}> Delete</a>
                </div>
            </div>)
        }

        const options = this.state.mouseOver ? <i id="index-options" className="fas fa-ellipsis-h" onBlur={this.handleButtonClick} onClick={this.handleButtonClick}></i> : <div id="index-options"></div>;

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
                <div className="index-options-container">
                    {options}
                </div>
            </div>
        )
        
    }
    
}