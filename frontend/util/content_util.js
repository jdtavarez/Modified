export const fetchPlaylistContents = (playlistId) => (
    $.ajax({
        method: "GET",
        url: `/api/playlists/${playlistId}/playlist_contents`
    })
)
