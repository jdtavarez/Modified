import { CLEAR_ERRORS, RECEIVE_ERRORS } from '../actions/session_actions'

const playlistErrorsReducer = (state = [], action) => {
    Object.freeze(state)
    switch (action.type) {
        case CLEAR_ERRORS:
            return [];
        case RECEIVE_ERRORS:
            return action.errors
        default:
            return state
    }
}

export default playlistErrorsReducer