import { connect } from "react-redux";
import User from './user'
import { fetchUser, clearUser } from "../../../../actions/user_actions";
import { openModal } from "../../../../actions/modal_actions";
import { withRouter } from 'react-router';

const mSTP = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        playlist: state.entities.contents.playlist,
        profile: state.entities.profiles
    })
}

const mDTP = (dispatch) => ({
    fetchCreatorPlaylists: (creator, id) => dispatch(fetchCreatorPlaylists(creator, id)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    clearUser: () => dispatch(clearUser()),
    openModal: (modal) => dispatch(openModal(modal))
})

export default withRouter(connect(mSTP, mDTP)(User));