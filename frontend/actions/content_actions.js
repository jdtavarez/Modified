import * as ContentAPIUtil from '../util/content_util'

export const RECEIVE_CONTENTS = "RECEIVE_CONTENTS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS" 

export const receiveContents = (contents) => ({
    type: RECEIVE_CONTENTS,
    contents 
})

export const RECEIVE_CONTENTS_STABLE = "RECEIVE_CONTENTS_STABLE";

export const receiveContentsStable = (contents) => ({
    type: RECEIVE_CONTENTS_STABLE,
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

export const receieveContent = (content) => ({
    type: RECEIVE_CONTENT,
    content
})

export const fetchContent = (contentId) => (dispatch) => (
    ContentAPIUtil.fetchContent(contentId).then(response => {
        (response instanceof Array) ?
            dispatch(receiveErrors(response)) :
            dispatch(receiveContent(response))
    })
)

export const createPlaylistContent = (playlistId, contentId) => (dispatch) => (
    ContentAPIUtil.createPlaylistContent(playlistId, contentId).then(response => {(response instanceof Array) ?
        dispatch(receiveErrors(response)) :
        dispatch(receiveContents(response))
    })
)

export const createPlaylistContentStable = (playlistId, contentId) => (dispatch) => (
    ContentAPIUtil.createPlaylistContent(playlistId, contentId).then(response => {
        (response instanceof Array) ?
        dispatch(receiveErrors(response)) :
        dispatch(receiveContentsStable(response))
    })
)

export const deletePlaylistContent = (playlist_content_id) => (dispatch) => (
    ContentAPIUtil.deletePlaylistContent(playlist_content_id).then(response => {
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
