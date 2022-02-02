import { CLEAR_QUEUE, RECEIVE_QUEUE, RECEIEVE_CURRENT_CONTENT, PLAY, PAUSE } from '../actions/play_actions'

const playbarReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_QUEUE: 
            const queueIds = Object.keys(action.queue)
            return Object.assign({}, {queue: action.queue}, {queueIds: queueIds})
        case CLEAR_QUEUE:
            return Object.assign({}, state)
        case RECEIEVE_CURRENT_CONTENT:
            return Object.assign({}, state, {currentContent: action.contentId})
        case PLAY:
            return Object.assign({}, state, {playing: action.playBool})
        default: 
            return state;
    }
}

export default playbarReducer