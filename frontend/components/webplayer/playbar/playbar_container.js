import { connect } from "react-redux";
import PlayBar from "./playbar";
import { fetchPlaylistContents } from "../../../actions/content_actions";
import { receiveCurrentContent, play } from "../../../actions/play_actions";

const mSTP = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        playlist: state.entities.contents.playlist,
        contents: state.entities.contents,
        albums: state.entities.contents.album,
        queue: state.ui.playbar.queue,
        queueIds: state.ui.playbar.queueIds,
        currentContent: state.ui.playbar.currentContent,
        playing: state.ui.playbar.playing
    })
}

const mDTP = (dispatch) => ({
    fetchPlaylistContents: (playlistId) => dispatch(fetchPlaylistContents(playlistId)),
    receiveCurrentContent: (contentId) => dispatch(receiveCurrentContent(contentId)),
    play: (playBool) => dispatch(play(playBool)),
})

export default connect(mSTP, mDTP)(PlayBar);