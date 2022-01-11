import React from "react";
import { Link } from "react-router-dom";


export default class AlbumContentIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.formatDuration = this.formatDuration.bind(this) 
    }

    formatDuration() {
        const duration = this.props.content.length
        const minutes = Math.floor(duration / 60) 
        let seconds = duration % 60
        if (seconds < 10) seconds = `0${seconds}`
        return `${minutes}:${seconds}`
    }

    render () {
        return (
        <div className="al-content-index-item">
                <div className="position">{this.props.position}</div>
                <div className="title">
                    <div className="al-song-meta-data">
                        <p className="al-song-title">{this.props.content.title}</p>
                        <Link className="pl-artist-link" to={`/web/artists/${this.props.creator_id}`}>{this.props.creator}</Link>
                    </div>
                </div>
                <div className="album">
                    <div className="pl-artist-link">
                    </div>
                </div>
                <div className="date-added"></div>
                <div className="duration">{this.formatDuration()}</div>
        </div>
        )
    }
}