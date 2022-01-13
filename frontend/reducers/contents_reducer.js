import { RECEIVE_CONTENTS } from "../actions/content_actions";
import { RECEIVE_PLAYLISTS } from "../actions/playlist_actions";

const contentsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CONTENTS:
            let contentIds
            action.contents.contents ? contentIds = Object.keys(action.contents.contents) : contentIds = null
            return Object.assign({}, action.contents, {contentIds: contentIds}) 
        case RECEIVE_PLAYLISTS:
            return Object.assign({})
        default:
            return state;
    }
}

export default contentsReducer