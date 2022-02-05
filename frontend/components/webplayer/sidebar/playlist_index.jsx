import React from "react"
import PlaylistIndexItem from "./playlist_index_item"

export default class PlaylistIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchSearchContents();
        this.props.fetchCreatorPlaylists("users", this.props.currentUser.id)
    }

    render() {
        const playlistIndex = this.props.playlists ? Object.values(this.props.playlists).slice(0, -1).map((playlist) => (<PlaylistIndexItem key={playlist.id} playlist={playlist} />)) : ("")

        return (
            <ul className="playlist-index">
                {playlistIndex.reverse()}
            </ul>
        )
    }
}