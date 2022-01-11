import { RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST, REMOVE_PLAYLIST } from '../actions/playlist_actions'

const playlistsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_PLAYLISTS:
            const playlist_ids = Object.keys(action.playlists)
            return Object.assign({}, action.playlists, { playlist_ids: playlist_ids});
        case RECEIVE_PLAYLIST:
            return Object.assign({}, { [action.playlist.id]: action.playlist });
        case REMOVE_PLAYLIST:
            return {};
        default:
            return state;
    }
}

export default playlistsReducer