import { RECEIVE_CONTENTS, RECEIVE_CONTENTS_STABLE } from "../actions/content_actions";
import { RECEIVE_PLAYLISTS } from "../actions/playlist_actions";

const contentsReducer = (state = {}, action) => {
    Object.freeze(state)
    let contentIds
    switch (action.type) {
        case RECEIVE_CONTENTS:
            if (action.contents.contents) {
                contentIds = Object.keys(action.contents.contents)
            } else if (action.contents) {
                contentIds = Object.keys(action.contents)
            } else {
                contentIds = null
            }
            return Object.assign({}, action.contents, {contentIds: contentIds})
        case RECEIVE_CONTENTS_STABLE:
            action.contents.contents ? contentIds = Object.keys(action.contents.contents) : contentIds = null
            return Object.assign({}, action.contents, { contentIds: contentIds }, state)
        case RECEIVE_PLAYLISTS:
            return Object.assign({}, state)
        default:
            return state;
    }
}

export default contentsReducer