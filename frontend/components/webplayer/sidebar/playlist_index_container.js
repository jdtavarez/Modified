import { connect } from "react-redux";
import PlaylistIndex from "./playlist_index";
import { fetchCreatorPlaylists } from "../../../actions/playlist_actions";


const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    playlists: state.entities.playlists,
})

const mDTP = (dispatch) => ({
    fetchCreatorPlaylists: (creator, id) => dispatch(fetchCreatorPlaylists(creator, id))
})

export default connect(mSTP, mDTP)(PlaylistIndex);