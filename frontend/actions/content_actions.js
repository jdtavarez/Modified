import * as ContentAPIUtil from '../util/content_util'

export const RECEIVE_CONTENTS = "RECEIVE_CONTENTS"

export const receiveContents = (contents) => ({
    type: RECEIVE_CONTENTS,
    contents 
})

export const fetchContents = (playlistId) => (dispatch) => (
    ContentAPIUtil.fetchPlaylistContents(playlistId).then(response => {
        (response instanceof Array) ?
            dispatch(receiveErrors(response)) :
            dispatch(receiveContents(response))
    })
)