import React from 'react';
import { Link } from 'react-router-dom'
import PlaylistContentIndexItem from './playlist_content_container'

export default class Playlist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            description: "",
            hash_location: props.match.params[0]
        }
        this.handleButtonClick = this.handleButtonClick.bind(this)
        this.handleClickOff = this.handleClickOff.bind(this)
    }

    componentDidMount () {
        const id = parseInt(this.props.match.params[0])
        this.props.fetchPlaylistContents(id).then(() => {
            this.setState({ title: this.props.contents.playlist.title, description: this.props.contents.playlist.description })
        })
    }

    componentDidUpdate (prevProps) {
        if (this.props.match.params[0] !== prevProps.match.params[0]) {
            const id = parseInt(this.props.match.params[0])
            this.props.fetchPlaylistContents(id)    
        }
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

    handleClickOff(e) {
        const buttonClass = document.getElementsByClassName("pl-btn")[0].classList;
        if (buttonClass.contains("pl-modal-active")) {
            buttonClass.toggle("pl-modal-active")
            const container = document.getElementsByClassName("pl-nav-dropdown-content")[0];
            container.classList.remove("display-items")
        }
    }

    render () {
        let playlist;
        let creator;
        let creator_id;
        let description;
        let playlist_nav;

        if (this.props.playlist) {
            playlist = this.props.playlist
            creator = this.props.playlist.creator_name
            creator_id = this.props.playlist.creator_id
            description = this.props.playlist.description

            if (this.props.currentUser.id === creator_id) {
                playlist_nav = (<div className="pl-nav-dropdown-content">
                    <div className="pl-options-list">
                        <a onClick={() => this.props.openModal('editPlaylist')}>Edit details</a>
                        <a onClick={() => this.props.openModal('deletePlaylist')}> Delete</a>
                    </div>
                </div>)
            }
        } else {
            playlist = ""
            creator = ""
            creator_id = ""
            description = ""
            playlist_nav = ""
        }

        let total_duration = 0;
        const content_index = this.props.playlist && this.props.contents.contents ? Object.values(this.props.contents.contents).map((content, idx) => {
            total_duration += content.length;
            return (<PlaylistContentIndexItem idx={idx} key={content.id} content={content} artist={{name: content.artist_name, id: content.artist_id}} album={{title: content.album_title, id: content.album_id}} position={content.position} creator_id={creator_id}/>)}) : ("")

        total_duration = Math.floor(total_duration / 60);
        const total_items = content_index.length

        let time_info; 

        if (content_index.length > 0) {
            time_info = (<h2> • {total_items} songs, {total_duration} mins</h2>)
        } else {
            time_info = <h2></h2>
        }
        return(
        <div id="playlist-container" onClick={this.handleClickOff}>
            <div className="playlist-display-header">
                <img src={playlist.url} alt="" className='playlist-cover' />
                <div className="playlist-info">
                    <h3 className="content-type">PLAYLIST</h3>
                    <h1 onClick={this.handleClick} className="playlist-title">{playlist.title}</h1>
                    <p>{description}</p>
                    <div className="playlist-metadata">
                        <Link className="creator-info" to={`/web/users/${creator_id}`}>
                        <h2>{creator}</h2>
                        </Link>
                        {time_info}
                    </div>
                </div>
            </div>
            <div className="playlist-contents">
                <div className="playlist-tools">
                    <div className="pl-btn">
                        <i onBlur={this.handleButtonClick} onClick={this.handleButtonClick} id="top-options" className="fas fa-ellipsis-h"></i>
                    </div>
                    {playlist_nav}
                </div>
                <div className="content-index">
                        <div className="content-index-header">
                            <div className="position">#</div>
                            <div className="title">TITLE</div>
                            <div className="album">ALBUM</div>
                            <div className="date-added">DATE ADDED</div>
                            <div className="duration"><i className="far fa-clock"></i></div>
                            <div className="index-options-container"></div>
                        </div>
                    {content_index}
                </div>
            </div> 
        </div>
        )
    }
};