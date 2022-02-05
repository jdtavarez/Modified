import React from "react";
import { Link } from "react-router-dom";

export default class PlaylistCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Link className="card" to={`/web/playlists/${this.props.id}`}>
                <img className="content-card" src={this.props.image} />
                <div className="main-text">{this.props.title}</div>
                <div className="extra-text">By {this.props.creator}</div>
            </Link>
        )
    }
}