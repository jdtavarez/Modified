import * as ContentAPIUtil from '../util/content_util'

export const RECEIVE_CONTENTS = "RECEIVE_CONTENTS"

export const receiveContents = (contents) => ({
    type: RECEIVE_CONTENTS,
    contents 
})

export const fetchPlaylistContents = (playlistId) => (dispatch) => (
    ContentAPIUtil.fetchPlaylistContents(playlistId).then(response => {
        (response instanceof Array) ?
            dispatch(receiveErrors(response)) :
            dispatch(receiveContents(response))
    })
)

export const fetchAlbumContents = (albumId) => (dispatch) => (
    ContentAPIUtil.fetchAlbumContents(albumId).then(response => {
        (response instanceof Array) ?
            dispatch(receiveErrors(response)) :
            dispatch(receiveContents(response))
    })
)

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})
