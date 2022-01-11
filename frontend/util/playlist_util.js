export const createPlaylist = (playlist) => (
    $.ajax({
        method: "POST",
        url: "/api/playlists/",
        data: { playlist }
    })
)

export const updatePlaylist = (playlist) => (
    $.ajax({
        method: "PATCH",
        url: `/api/playlists/${playlist.id}`,
        data: { playlist }
    })
)

export const deletePlaylist = (playlistId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/playlists/${playlistId}`
    })
)

export const fetchCreatorPlaylists = (creator, id) => (
    $.ajax({
        method: "GET",
        url: `/api/${creator}/${id}/playlists/`
    })
)