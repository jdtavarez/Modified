import React from "react";
import { Link } from "react-router-dom";


export default class PlaylistContentIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.formatDate = this.formatDate.bind(this)
        this.formatDuration = this.formatDuration.bind(this) 
        this.handleDoubleClick = this.handleDoubleClick.bind(this)
    }

    formatDate () {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const date = new Date(this.props.content.date_added)
        const month = months[date.getMonth()]
        const year = date.getFullYear()
        const day = date.getDate()
        return `${month} ${day}, ${year}`
    }

    formatDuration() {
        const duration = this.props.content.length
        const minutes = Math.floor(duration / 60) 
        let seconds = duration % 60
        if (seconds < 10) seconds = `0${seconds}`
        return `${minutes}:${seconds}`
    }

    handleDoubleClick() {
        const startPos = this.props.position;
        const contentIds = this.props.contents.contentIds;
        const contents = this.props.contents.contents;
        const queueIds = contentIds.slice((startPos-1));
        let queue = {}; 
        queueIds.map(contentId => (
            queue[contentId] = contents[contentId]
        ))
        this.props.receiveQueue(queue)
    }

    render () {
        return (
        <div className="content-index-item" onDoubleClick={this.handleDoubleClick}>
                <div className="position">{this.props.position}</div>
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
                <i id="index-options" className="fas fa-ellipsis-h"></i>
        </div>
        )
        
    }
    
}