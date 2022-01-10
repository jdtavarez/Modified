export const createPlaylist = (playlist) => (
    $.ajax({
        method: "POST",
        url: "/api/playlists/",
        data: { playlist }
    })
) 

export const fetchPlaylist = (playlistId) => (
    $.ajax({
        method: "GET",
        url: `/api/playlists/${playlistId}`
    })
)

export const updatePlaylist = (playlistId) => (
    $.ajax({
        method: "PATCH",
        url: `/api/playlists/${playlistId}`
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