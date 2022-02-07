export const createPlaylist = (playlist) => (
    $.ajax({
        method: "POST",
        url: "/api/playlists/",
        data: { playlist }
    })
)

export const updatePlaylist = (playlist, playlistId) => {
    return $.ajax({
        method: "PATCH",
        url: `api/playlists/${playlistId}`,
        data: playlist,
        contentType: false,
        processData: false
    })
};

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