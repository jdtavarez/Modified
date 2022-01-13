export const fetchPlaylistContents = (playlistId) => (
    $.ajax({
        method: "GET",
        url: `/api/playlists/${playlistId}/playlist_contents`
    })
)

export const fetchAlbumContents = (albumId) => (
    $.ajax({
        method: "GET",
        url: `/api/albums/${albumId}/contents`
    })
)

export const fetchContent = (contentId) => (
    $.ajax({
        method: "GET", 
        url: `api/contents/${contentId}`
    })
)