import { RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST, UPDATE_PLAYLIST, REMOVE_PLAYLIST } from '../actions/playlist_actions'

const playlistsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_PLAYLISTS:
            const playlist_ids = Object.keys(action.playlists)
            return Object.assign({}, action.playlists, { playlist_ids: playlist_ids});
        case RECEIVE_PLAYLIST:
            const content_ids = Object.key(action.playlist_info.contents)
            return Object.assign({}, { [action.playlist_info.playlist.id]: action.playlist_info.playlist }, { ['contents']: action.playlist_info.contents }, { content_ids: content_ids }, { ['order']: action.playlist_info.order });
        case UPDATE_PLAYLIST:
            return Object.assign({}, { [action.playlist.id]: action.playlist });
        case REMOVE_PLAYLIST:
            return {};
        default:
            return state;
    }
}

export default playlistsReducer