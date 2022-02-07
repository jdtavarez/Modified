import * as PlaylistAPIUtil from '../util/playlist_util'

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS"
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST"
export const CLEAR_PLAYLISTS = "CLEAR_PLAYLISTS"
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"
export const CLEAR_ERRORS = " CLEAR_ERRORS"

export const fetchCreatorPlaylists = (creator, id) => (dispatch) => (
    PlaylistAPIUtil.fetchCreatorPlaylists(creator, id).then(response => {
        (response instanceof Array) ?
        dispatch(receiveErrors(response)) :
        dispatch(receivePlaylists(response))
    })
)

export const receivePlaylists = (playlists) => ({
    type: RECEIVE_PLAYLISTS,
    playlists
})

export const createPlaylist = (playlist) => (dispatch) => (
    PlaylistAPIUtil.createPlaylist(playlist).then(response => {
        dispatch(receivePlaylist(response))
    })
)

export const receivePlaylist = (playlist) => ({
    type: RECEIVE_PLAYLIST,
    playlist
})

export const clearPlaylists = () => ({
    type: CLEAR_PLAYLISTS 
})

export const updatePlaylist = (playlist, playlistId) => (dispatch) => (
    PlaylistAPIUtil.updatePlaylist(playlist, playlistId).then(response => {
        (response instanceof Array) ?
        dispatch(receiveErrors(response)) :
        dispatch(receivePlaylist(response))
    })
)

export const deletePlaylist = (playlistId) => (dispatch) => (
    PlaylistAPIUtil.deletePlaylist(playlistId).then((response) => {
        dispatch(removePlaylist(response))
    })
)

export const removePlaylist = (playlistId) => ({
    type: REMOVE_PLAYLIST,
    playlistId
})

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})
