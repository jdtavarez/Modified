import * as UsersAPIUtil from '../util/users_util'

export const RECEIVE_USER = "RECEIVE_USER";
export const CLEAR_USER = "CLEAR_USER";

export const receiveUser = (profile) => ({
    type: RECEIVE_USER,
    profile
})

export const fetchUser = (userId) => (dispatch) => (
    UsersAPIUtil.fetchUser(userId).then(response => {
        dispatch(receiveUser(response))
    })
)

export const clearUser = () => ({
    type: CLEAR_USER
})

export const updateUser = (user, userId) => (dispatch) => (
    UsersAPIUtil.updateUser(user, userId).then(response => {
        (response instanceof Array) ?
            dispatch(receiveErrors(response)) :
            dispatch(receiveUser(response))
    })
)