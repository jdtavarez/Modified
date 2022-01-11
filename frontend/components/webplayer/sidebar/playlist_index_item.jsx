import React from "react";
import { Link } from 'react-router-dom'
export default class PlaylistIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {  
        const { playlist } = this.props;
        return (
            <Link to={`/web/playlist/${playlist.id}`} className="playlist-index-item">
                <li>{playlist.title}</li>
            </Link>
            
        )
    }
}