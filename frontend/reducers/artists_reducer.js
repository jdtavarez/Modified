import { RECEIVE_ARTIST, CLEAR_ARTIST } from '../actions/artist_actions'

const artistsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ARTIST:
            return Object.assign({}, action.artist);
        case CLEAR_ARTIST:
            return Object.assign({});
        default:
            return state;
    }
}

export default artistsReducer