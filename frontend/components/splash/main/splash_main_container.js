import { connect } from "react-redux";
import SplashMain from './splash_main'
import { fetchSearchContents } from "../../../actions/search_actions";
import { fetchUser } from "../../../actions/user_actions";

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = (dispatch) => ({
    fetchSearchContents: () => dispatch(fetchSearchContents()),
    fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default connect(mSTP, mDTP)(SplashMain);