import { connect } from "react-redux";
import PlaylistContentIndexItem from "./playlist_content_index_item";
import { receiveQueue, clearQueue, receiveCurrentContent, play } from "../../../../actions/play_actions";

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
    play: (playBool) => dispatch(play(playBool))
})

export default connect(mSTP, mDTP)(PlaylistContentIndexItem);