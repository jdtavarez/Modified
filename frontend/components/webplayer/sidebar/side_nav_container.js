import { connect } from "react-redux";
import { withRouter } from "react-router";
import SideNav from "./side_nav";
import { createPlaylist, fetchCreatorPlaylists } from "../../../actions/playlist_actions";

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    playlists: state.entities.playlists,
})

const mDTP = (dispatch) => ({
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
    fetchCreatorPlaylists: (creator, id) => dispatch(fetchCreatorPlaylists(creator, id))
})

export default withRouter(connect(mSTP, mDTP)(SideNav));