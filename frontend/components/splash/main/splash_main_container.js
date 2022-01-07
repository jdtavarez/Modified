import { connect } from "react-redux";
import SplashMain from './splash_main'

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

export default connect(mSTP, null)(SplashMain);