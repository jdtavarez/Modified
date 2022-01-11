import { connect } from "react-redux";
import Album from "./album";
import { fetchAlbumContents } from "../../../actions/content_actions";

const mSTP = (state) => {
    return ({
    currentUser: state.entities.users[state.session.id],
    albums: state.entities.albums,
    contents: state.entities.contents
}) }

const mDTP = (dispatch) => ({
    fetchAlbumContents: (albumId) => dispatch(fetchAlbumContents(albumId))
})

export default connect(mSTP, mDTP)(Album);