import { CLEAR_ERRORS, RECEIEVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions'

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIEVE_CURRENT_USER: 
            return [];
        case CLEAR_ERRORS: 
            return [];
        case RECEIVE_ERRORS:
            return action.errors
        default:
            return state
    }
}

export default sessionErrorsReducer