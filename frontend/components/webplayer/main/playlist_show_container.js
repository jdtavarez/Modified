import { connect } from "react-redux";
import PlaylistShow from "./playlist_show";
import { fetchContents } from "../../../actions/content_actions";

const mSTP = (state) => {
    return ({
    currentUser: state.entities.users[state.session.id],
    playlist: state.entities.contents.playlist,
    contents: state.entities.contents
}) }

const mDTP = (dispatch) => ({
    fetchContents: (playlistId) => dispatch(fetchContents(playlistId))
})

export default connect(mSTP, mDTP)(PlaylistShow);