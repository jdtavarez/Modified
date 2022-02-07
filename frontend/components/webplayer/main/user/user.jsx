import React from 'react';
import PlaylistCard from "../cards/playlist_card";

export default class User extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            fetched: false,
            playlists: null,
            username: ''
        }

        this.ownerEdit = this.ownerEdit.bind(this);
    }


    componentDidMount () {
        const id = parseInt(this.props.match.params[0])
        this.props.fetchUser(id).then(() => {
            const { playlists, user } = this.props.profile[id];
            const username = user.username;
            const image = user.image_url;
            this.setState({ playlists, username, image });
        })
    }

    componentDidUpdate (prevProps) {
        const id = parseInt(this.props.match.params[0]);

        if (this.props.match.params[0] !== prevProps.match.params[0]) {
            this.props.fetchUser(id).then(() => {
                const { playlists, user } = this.props.profile[id];
                const username = user.username;
                const image = user.image_url;
                this.setState({ playlists, username, image });
            })
        } else {
        if (this.props.profile[id]) {
            const { user } = this.props.profile[id];
            const username = user.username;
            const image = user.image_url;

            if (prevProps.profile[id]) {
                const oldUser = prevProps.profile[id].user;
                const oldUsername = oldUser.username;
                const oldImage = oldUser.image_url;

                if (username !== oldUsername || image !== oldImage) {
                    this.props.fetchUser(id).then(() => {
                        this.setState({ username, image });
                    })}
                }
            }
        }
    }

    ownerEdit() {
        if (this.props.currentUser.id === parseInt(this.props.match.params[0])) {
            this.props.openModal('editProfile')
        }
    }

    render() {

        const playlistsIndex = this.state.playlists ? Object.values(this.state.playlists).map(playlist => <PlaylistCard key={`playlist-${playlist.id}`} id={playlist.id} title={playlist.title} image={playlist.image_url} creator={playlist.creator_name} creator_id={playlist.creator_id} />) : ("")

        const img = this.state.image ? this.state.image : window.profiles;

        return (
            <div className="search">
                <div className="playlist-display-header">
                    <img src={img} alt="" className='profile-cover' onClick={this.ownerEdit} />
                    <div className="playlist-info">
                        <h3 className="content-type">PROFILE</h3>
                        <h1 className="playlist-title" onClick={this.ownerEdit} >{this.state.username}</h1>
                        <div className="playlist-metadata">
                            <h2>{playlistsIndex.length > 0 ? `${playlistsIndex.length} Playlists` : ''}</h2>
                        </div>
                    </div>
                </div>
                < h2 className="items-header">{playlistsIndex.length > 0 ? `Playlists Created`: ''}</h2 >
                <div className="albums-sideways">
                    {playlistsIndex}
                </div>
            </div>
        )
    }
}