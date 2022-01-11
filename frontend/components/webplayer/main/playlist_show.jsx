import React from 'react';
import { Switch, Route } from 'react-router'
import ContentIndexItem from './content_index_item'

export default class PlaylistShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hash_location: props.match.params[0]
        }
    }

    componentDidMount () {
        const id = parseInt(this.props.match.url.slice(-1))
        this.props.fetchContents(id)
    }

    componentDidUpdate (prevProps) {
        if (this.props.match.params[0] !== prevProps.match.params[0]) {
            const id = parseInt(this.props.match.params[0])
            this.props.fetchContents(id)    
        }
    }

    render () {
        const playlist = this.props.playlist ? this.props.playlist : ("");
        const creator = this.props.playlist ? this.props.playlist.creator_name : ("");

        let total_duration = 0;
        const content_index = this.props.playlist && this.props.contents.contents ? Object.values(this.props.contents.contents).map(content => {
            total_duration += content.length;
            return (<ContentIndexItem key={content.id} content={content} artist={{name: content.artist_name, id: content.artist_id}} album={{title: content.album_title, id: content.album_id}} position={content.position} />)}) : ("")

        total_duration = total_duration % 60;
        const total_items = content_index.length

        return(
        <div id="playlist-container">
            <h1 className="top-nav">topbar</h1>
            <div className="playlist-display-header">
                <img src={playlist.url} alt="" className='playlist-cover' />
                <div className="playlist-info">
                    <h3 className="content-type">PLAYLIST</h3>
                    <h1 className="playlist-title">{playlist.title}</h1>

                    <div className="playlist-metadata">
                        <h2 className="creator-info">{creator}</h2>
                        <h2> • {total_items} songs, {total_duration} mins</h2>
                    </div>
                </div>
            </div>
            <div className="playlist-contents">
                <div className="playlist-tools">
                    <i className="fas fa-ellipsis-h"></i>
                </div>
                <div className="content-index">
                        <div className="content-index-header">
                            <div className="position">#</div>
                            <div className="title">TITLE</div>
                            <div className="album">ALBUM</div>
                            <div className="date-added">DATE ADDED</div>
                            <div className="duration"><i className="far fa-clock"></i></div>
                        </div>
                    {content_index}
                </div>
            </div>
            
        </div>
        )
    }
};