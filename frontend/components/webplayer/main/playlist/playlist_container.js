import { connect } from "react-redux";
import Playlist from "./playlist";
import { fetchPlaylistContents } from "../../../../actions/content_actions";
import { openModal } from "../../../../actions/modal_actions";

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    playlist: state.entities.contents.playlist,
    contents: state.entities.contents
})

const mDTP = (dispatch) => ({
    fetchPlaylistContents: (playlistId) => dispatch(fetchPlaylistContents(playlistId)),
    openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(Playlist);