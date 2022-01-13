import { connect } from "react-redux";
import PlayBar from "./playbar";
import { fetchPlaylistContents } from "../../../actions/content_actions";

const mSTP = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        playlist: state.entities.contents.playlist,
        contents: state.entities.contents,
        albums: state.entities.contents.album,
        queue: state.ui.plays
    })
}

const mDTP = (dispatch) => ({
    fetchPlaylistContents: (playlistId) => dispatch(fetchPlaylistContents(playlistId))
})

export default connect(mSTP, mDTP)(PlayBar);