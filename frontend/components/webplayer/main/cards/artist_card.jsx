import React from "react";
import { Link } from "react-router-dom";

export default class ArtistCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Link className="card" to={`/web/artists/${this.props.id}`}>
                <img className="artist-card" src={window.profiles }/>
                <div className="main-text">{this.props.artist_name}</div>
                <div className="extra-text">Artist</div>
            </Link>
        )
    }
}