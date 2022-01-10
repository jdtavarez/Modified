import React from 'react';
import { Switch, Route } from 'react-router'

export default class PlaylistShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {
        const id = parseInt(this.props.match.url.slice(-1))
        this.props.fetchPlaylist(id)
    }

    render () {
        debugger
        return(
        <div id="playlist-container">
            <h1>topbar</h1>
            <h1>playlist header</h1>
            <h1>contents</h1>
        </div>
        )
    }
};