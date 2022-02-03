import React from "react";
import { Link } from "react-router-dom";


export default class AlbumContentIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = { mouseOver: false }

        this.formatDuration = this.formatDuration.bind(this);
        this.handleDoubleClick = this.handleDoubleClick.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        // this.handleButtonClick = this.handleButtonClick.bind(this);
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
        const queueIds = contentIds.slice((startPos - 1));
        const currentContentId = queueIds[0];
        let queue = {};
        queueIds.map(contentId => (
            queue[contentId] = contents[contentId]
        ))
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

    render () {

        const options = this.state.mouseOver ? <i id="index-options" className="fas fa-ellipsis-h"></i> : <div id="index-options"></div>;

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
            <div className="al-content-index-item" onDoubleClick={this.handleDoubleClick} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                <div className="position">{position}</div>
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
                <div className="index-options-container">
                    {options}
                </div>
            </div>
        )
    }
}