import { connect } from "react-redux";
import ArtistIndexItem from "./artist_index_item";
import { receiveQueue, clearQueue, receiveCurrentContent, play } from "../../../../../actions/play_actions";
import { createPlaylistContentStable } from "../../../../../actions/content_actions"

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    contents: state.entities.contents,
    currentContent: state.ui.playbar.currentContent,
    playlists: state.entities.playlists,
    playing: state.ui.playbar.playing
})

const mDTP = (dispatch) => ({
    receiveQueue: (queue) => dispatch(receiveQueue(queue)),
    clearQueue: () => dispatch(clearQueue()),
    receiveCurrentContent: (contentId) => dispatch(receiveCurrentContent(contentId)),
    play: (playBool) => dispatch(play(playBool)),
    createPlaylistContentStable: (playlistId, contentId) => dispatch(createPlaylistContentStable(playlistId, contentId)),
})

export default connect(mSTP, mDTP)(ArtistIndexItem);