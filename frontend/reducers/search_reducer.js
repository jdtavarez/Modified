import { RECEIVE_CATEGORIES, RECEIVE_CATEGORY, RECEIEVE_SEARCH_CONTENT } from '../actions/search_actions'

const playlistsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CATEGORIES:
        case RECEIVE_CATEGORY:
        case RECEIEVE_SEARCH_CONTENT:
        default:
            return state;
    }
}

export default searchReducer