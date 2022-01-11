export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS"
export const RECEIVE_ALBUM = "RECEIVE_ALBUM"

export const receiveAlbums = (albums) => ({
    type: RECEIVE_ALBUMS,
    albums
})

export const receiveAlbum = (album) => ({
    type: RECEIVE_ALBUM,
    album
})