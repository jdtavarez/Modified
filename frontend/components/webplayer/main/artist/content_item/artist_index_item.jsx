import React from "react";
import { Link } from "react-router-dom";

export default class ArtistIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = { mouseOver: false }

        this.formatDuration = this.formatDuration.bind(this);
        this.handleDoubleClick = this.handleDoubleClick.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleNavClick = this.handleNavClick.bind(this);
        this.addPlistMouseOver = this.addPlistMouseOver.bind(this);
        this.addPlistMouseOff = this.addPlistMouseOff.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.addtoPlaylist = this.addtoPlaylist.bind(this);
        this.collapseMenu = this.collapseMenu.bind(this);
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
        const queueIds = contentIds.slice((startPos - 1));
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
        const container = document.getElementById(this.props.content.id);
        container.classList.add("display-items");

        const body = document.getElementsByTagName("BODY")[0];

        let bgModal = document.getElementById('bg-modal');
        if (!bgModal) {
            bgModal = document.createElement("DIV");
            bgModal.setAttribute('class', 'drop-background');
            bgModal.setAttribute('id', 'bg-modal');
            body.append(bgModal);
            document.addEventListener("click", this.handleBlur);
        }
    }

    addPlistMouseOver() {
        const playlist = document.getElementById(`hp${this.props.content.id}`);
        playlist.classList.add("display-items");
    }

    addPlistMouseOff() {
        const playlist = document.getElementById(`hp${this.props.content.id}`);
        playlist.classList.remove("display-items");
    }

    handleBlur() {
        const bgModal = document.getElementsByClassName('drop-background')[0];
        bgModal.remove();
        this.collapseMenu();
        document.removeEventListener("click", this.handleBlur)
    }

    addtoPlaylist(e) {
        e.stopPropagation();
        const playlistId = e.target.id;
        const contentId = this.props.content.id;
        this.props.createPlaylistContentStable(playlistId, contentId);
        this.handleBlur();
        this.collapseMenu();
    }

    collapseMenu() {
        const menus = document.getElementsByClassName('display-items');
        for (let i = 0; i < menus.length; i++) {
            menus[i].classList.remove('display-items')
        }
    }

    render() {
        let position;

        if (this.state.mouseOver) {
            if (parseInt(this.props.currentContent) === this.props.content.id && this.props.playing) {
                position = (<i id="index-pause" className="fas fa-pause" onClick={() => { this.props.play(false) }}></i>)
            } else {
                position = (<i id="index-play" className="fas fa-play" onClick={this.handleDoubleClick}></i>)
            }
        } else {
            position = <div style={{width: '46px', height: '16px'}}></div>
        }

        const options = this.state.mouseOver ? <i id="index-options" className="fas fa-ellipsis-h"></i> : <div id="index-options"></div>;

        const playlistIndex = this.props.playlists ? Object.values(this.props.playlists).slice(0, -1).map((playlist) => (<div id={playlist.id} key={playlist.id} onClick={this.addtoPlaylist} > {playlist.title} </div>)).reverse() : ("");

        const playlist_nav = (<div id={this.props.content.id} className="index-dropdown-content">
            <div className="index-options-list">
                <div>
                    <div className="playlists-list" onMouseOver={this.addPlistMouseOver}>
                        Add to playlist
                    </div>
                    <div id={`hp${this.props.content.id}`} className="hidden-playlists">
                        {playlistIndex}
                    </div>
                </div>
            </div>
        </div>)


        return (
            <div className="content-index-item" onDoubleClick={this.handleDoubleClick} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                <div className="position">{position}</div>
                <div className="title">
                    <div className="song-meta-data">
                        <img src={this.props.content.image_url} className="plist-album-cover" alt="" />
                        <div className="ap-song-info">
                            {this.props.content.title}
                            {/* <p className="pl-song-title"></p> */}
                        </div>
                    </div>
                </div>
                <div className="album">
                </div>
                <div className="date-added"></div>
                <div className="duration">{this.formatDuration()}</div>
                <div className="index-options-container" onClick={this.handleNavClick}>
                    {options}
                    {playlist_nav}
                </div>
            </div>
        )

    }

}