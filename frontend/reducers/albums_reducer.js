import { RECEIVE_ALBUMS, RECEIVE_ALBUM } from '../actions/album_actions'

const albumsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALBUMS:
            const album_ids = Object.keys(action.albums)
            return Object.assign({}, action.albums, { album_ids: album_ids });
        case RECEIVE_ALBUM:
            return Object.assign({}, { [action.album.id]: action.album });
        default:
            return state;
    }
}

export default albumsReducer