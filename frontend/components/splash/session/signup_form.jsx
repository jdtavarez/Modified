import React from "react";
import { Link } from "react-router-dom";

export default class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateInput = this.updateInput.bind(this)
    }

handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
}

updateInput(e) {
    let category = e.target.name.slice(4)
    category = category.slice(1, -1)
    this.setState({ [category]: e.target.value })
}

render() {
    const errors = this.props.errors ?
        this.props.errors.map(e => (<p className="error" key={e}>{e}</p>)) : "";
    return (
        <div>
            <form className="form" onSubmit={this.handleSubmit}>
                <h1>Sign up for free to start listening.</h1>
                {errors}
                <Link className="small-button" id="demo-user-fb" to="/signup">Sign up with Facebook</Link>
                <label className="input-header">What's your email?</label>
                <input type="text" value={this.state.email} onChange={this.updateInput} name="user[email]" />

                <label className="input-header">Confirm your email</label>
                <input type="text" name="user[email]" />

                <label className="input-header">Create a password</label>
                <input type="text" value={this.state.password} onChange={this.updateInput} name="user[password]" />

                <label className="input-header">What should we call you?</label>
                <input type="text" value={this.state.username} onChange={this.updateInput} name="user[username]" />

                <div className="submit-area">
                    <input className="small-button" id="signup" type="submit" value="Sign Up"/>
                </div>
                <p>Have an account? <Link to="/login">Log in</Link></p>
            </form>
        </div>
    )
}
}
