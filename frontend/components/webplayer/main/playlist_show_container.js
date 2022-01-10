import { connect } from "react-redux";
import PlaylistShow from "./playlist_show";
import { fetchPlaylist } from "../../../actions/playlist_actions";

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    playlists: state.entities.playlists,
    contents: state.entities.contents,
    order: state.entities.order
})

const mDTP = (dispatch) => ({
    fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId))
})

export default connect(mSTP, mDTP)(PlaylistShow);