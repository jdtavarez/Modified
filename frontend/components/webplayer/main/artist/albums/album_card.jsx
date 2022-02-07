import React from "react";
import { Link } from "react-router-dom";

export default class AlbumCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Link className="card" to={`/web/albums/${this.props.id}`}>
                <img className="content-card" src={this.props.image} />
                <div className="main-text">{this.props.title}</div>
                <div className="extra-text">{this.props.release_year} • Album </div>
            </Link>
        )
    }
}