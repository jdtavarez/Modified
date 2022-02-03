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

export const createPlaylistContent = (playlist_id, content_id) => (
    $.ajax({
        method: "POST",
        url: `api/playlist_contents`,
        data: { playlist_id, content_id }
    })
)

export const deletePlaylistContent = (playlist_content_id) => (
    $.ajax({
        method: "DELETE",
        url: `api/playlist_contents/${playlist_content_id}`
    })
)