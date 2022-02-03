import { connect } from "react-redux";
import PlaylistContentIndexItem from "./playlist_content_index_item";
import { receiveQueue, clearQueue, receiveCurrentContent, play } from "../../../../actions/play_actions";
import { createPlaylistContent, createPlaylistContentStable, deletePlaylistContent } from "../../../../actions/content_actions"

const mSTP = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        playlist: state.entities.contents.playlist,
        contents: state.entities.contents,
        currentContent: state.ui.playbar.currentContent,
        playlists: state.entities.playlists,
        playing: state.ui.playbar.playing
    })
}

const mDTP = (dispatch) => ({
    receiveQueue: (queue) => dispatch(receiveQueue(queue)),
    clearQueue: () => dispatch(clearQueue()),
    receiveCurrentContent: (contentId) => dispatch(receiveCurrentContent(contentId)),
    play: (playBool) => dispatch(play(playBool)),
    createPlaylistContent: (playlistId, contentId) => dispatch(createPlaylistContent(playlistId, contentId)),
    createPlaylistContentStable: (playlistId, contentId) => dispatch(createPlaylistContentStable(playlistId, contentId)),
    deletePlaylistContent: (playlist_content_id) => dispatch(deletePlaylistContent(playlist_content_id))
})

export default connect(mSTP, mDTP)(PlaylistContentIndexItem);