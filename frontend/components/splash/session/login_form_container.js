import { connect } from "react-redux"
import { login, clearErrors } from "../../../actions/session_actions"
import LoginForm from './login_form'

const mSTP = (state) => ({
    errors: state.errors.session
})

const mDTP = (dispatch) =>({
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
})

export default connect(mSTP, mDTP)(LoginForm);