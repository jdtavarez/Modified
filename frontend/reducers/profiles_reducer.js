import { RECEIVE_USER, CLEAR_USER } from '../actions/user_actions'

const profilesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_USER:
            return Object.assign({}, state, {[action.profile.user.id]: action.profile });
        case CLEAR_USER:
            return Object.assign({});
        default:
            return state;
    }
}

export default profilesReducer