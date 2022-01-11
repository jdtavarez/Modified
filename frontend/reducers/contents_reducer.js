import { RECEIVE_CONTENTS } from "../actions/content_actions";
import { RECEIVE_PLAYLISTS } from "../actions/playlist_actions";

const contentsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CONTENTS:
            let content_ids
            action.contents.contents ? content_ids = Object.keys(action.contents.contents) : content_ids = null
            return Object.assign({}, action.contents, {content_ids: content_ids}) 
        case RECEIVE_PLAYLISTS:
            return Object.assign({})
        default:
            return state;
    }
}

export default contentsReducer