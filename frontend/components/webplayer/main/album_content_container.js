import { connect } from "react-redux";
import AlbumContentIndexItem from "./album_content_index_item";
import { receiveQueue, clearQueue } from "../../../actions/play_actions";

const mSTP = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        album: state.entities.contents.album,
        contents: state.entities.contents
    })
}

const mDTP = (dispatch) => ({
    receiveQueue: (queue) => dispatch(receiveQueue(queue)),
    clearQueue: () => dispatch(clearQueue())
})

export default connect(mSTP, mDTP)(AlbumContentIndexItem);