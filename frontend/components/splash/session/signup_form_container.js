import { signup, clearErrors } from "../../../actions/session_actions"
import { connect } from "react-redux"
import SignUpForm from './signup_form'

const mSTP = (state) => ({
    errors: state.errors.session
})

const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mSTP, mDTP)(SignUpForm);