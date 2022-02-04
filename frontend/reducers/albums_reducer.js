import { RECEIVE_ALBUMS, RECEIVE_ALBUM, CLEAR_ALBUM } from '../actions/album_actions'

const albumsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALBUMS:
            const albumIds = Object.keys(action.albums)
            return Object.assign({}, state, action.albums, { albumIds: albumIds });
        case RECEIVE_ALBUM:
            return Object.assign({}, state, { [action.album.id]: action.album });
        case CLEAR_ALBUM:
            return Object.assign({});
        default:
            return state;
    }
}

export default albumsReducer