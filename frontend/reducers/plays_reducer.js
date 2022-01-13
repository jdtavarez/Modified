import { CLEAR_QUEUE, RECEIVE_QUEUE } from '../actions/play_actions'

const playsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_QUEUE: 
            const queueIds = Object.keys(action.queue)
            return Object.assign({}, action.queue, { queueIds: queueIds })
        case CLEAR_QUEUE:
            return Object.assign({}, state)
        default: 
            return state;
    }
}

export default playsReducer