import { RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST, REMOVE_PLAYLIST, CLEAR_PLAYLISTS } from '../actions/playlist_actions'

const playlistsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_PLAYLISTS:
            const playlistIds = Object.keys(action.playlists)
            return Object.assign({}, state, action.playlists, { playlistIds: playlistIds});
        case RECEIVE_PLAYLIST:
            return Object.assign({}, { [action.playlist.id]: action.playlist }, state);
        case CLEAR_PLAYLISTS:
            return Object.assign({})
        case REMOVE_PLAYLIST:
            const id = action.playlistId;
            let newState = Object.assign({}, state);
            delete newState[id];
            return newState;
        default:
            return state;
    }
}

export default playlistsReducer