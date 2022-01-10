import * as PlaylistAPIUtil from '../util/playlist_util'

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS"
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST"
export const UPDATE_PLAYLIST = "UPDATE_PLAYLIST"
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
        (response instanceof Array) ?
        dispatch(receiveErrors(response)) :
        dispatch(receivePlaylist(response))
    })
)

export const fetchPlaylist = (playlistId) => (dispatch) => (
    PlaylistAPIUtil.fetchPlaylist(playlistId).then(response => {
        (response instanceof Array) ?
        dispatch(receiveErrors(response)) :
        dispatch(receivePlaylist(response))
    })
)

export const receivePlaylist = (playlist) => ({
    type: RECEIVE_PLAYLIST,
    playlist
})

export const updatePlaylist = (playlistId) => (dispatch) => (
    PlaylistAPIUtil.updatePlaylist(playlistId).then(response => {
        (response instanceof Array) ?
        dispatch(receiveErrors(response)) :
        dispatch(receivePlaylist(response))
    })
)

export const deletePlaylist = () => (dispatch) => (
    PlaylistAPIUtil.deletePlaylist().then(() => {
        dispatch(removePlaylist())
    })
)

export const removePlaylist = () => ({
    type: REMOVE_PLAYLIST
})
