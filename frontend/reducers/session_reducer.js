import { RECEIEVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'

const sessionReducer = (state = {id: null}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIEVE_CURRENT_USER:
            return Object.assign({}, { id: action.user.id });
        case LOGOUT_CURRENT_USER: 
            return Object.assign({}, { id: null });
        default: 
            return state;
    }
}

export default sessionReducer