import * as ArtistsAPIUtil from '../util/artists_util'

export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const CLEAR_ARTIST = "CLEAR_ARTIST";

export const receiveArtist = (artist) => ({
    type: RECEIVE_ARTIST,
    artist
})

export const fetchArtist = (artistId) => (dispatch) => (
    ArtistsAPIUtil.fetchArtist(artistId).then(response => {
        dispatch(receiveArtist(response))
    })
)

export const clearArtist = () => ({
    type: CLEAR_ARTIST
})