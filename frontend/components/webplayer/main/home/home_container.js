import { connect } from "react-redux";
import Home from "./home";
import { openModal } from "../../../../actions/modal_actions";

const mSTP = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        searchContents: state.ui.search.searchContents
    })
}

// const mDTP = (dispatch) => ({
//     fetchPlaylistContents: (playlistId) => dispatch(fetchPlaylistContents(playlistId)),
//     openModal: (modal) => dispatch(openModal(modal))
// })

export default connect(mSTP, null)(Home);