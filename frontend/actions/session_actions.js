import * as SessionAPIUtil from '../util/session_api_util'

export const RECEIEVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"
export const CLEAR_ERRORS = " CLEAR_ERRORS"

export const login = (user) => (dispatch) => (
    SessionAPIUtil.login(user).then(response => {
        (response instanceof Array) ? 
        dispatch(receiveErrors(response)) :
        dispatch(receiveCurrentUser(response))    
}));

export const logout = () => (dispatch) => (
    SessionAPIUtil.logout().then(response => {
        (response instanceof Array) ?
        dispatch(receiveErrors(response)) :
        dispatch(logoutCurrentUser())
}));

export const signup = (user) => (dispatch) => (
    SessionAPIUtil.signup(user).then(response => {
        (response instanceof Array) ?
        dispatch(receiveErrors(response)) :
        dispatch(receiveCurrentUser(response))
}));

export const receiveCurrentUser = (user) => ({
    type: RECEIEVE_CURRENT_USER,
    user
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})
