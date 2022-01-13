import { connect } from "react-redux";
import PlaylistContentIndexItem from "./playlist_content_index_item";
import { receiveQueue, clearQueue } from "../../../actions/play_actions";

const mSTP = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        playlist: state.entities.contents.playlist,
        contents: state.entities.contents
    })
}

const mDTP = (dispatch) => ({
    receiveQueue: (queue) => dispatch(receiveQueue(queue)),
    clearQueue: () => dispatch(clearQueue())
})

export default connect(mSTP, mDTP)(PlaylistContentIndexItem);