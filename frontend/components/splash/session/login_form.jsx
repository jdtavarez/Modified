import React from "react";
import { Link } from "react-router-dom";

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDemo = this.handleDemo.bind(this)
        this.updateInput = this.updateInput.bind(this)

        this.errors = {
            username: false,
            username_error: "Please enter your Modified username or email address.",
            password: false,
            password_error: "Please enter your password."
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    handleDemo(e) {
        e.preventDefault();
        this.props.processForm({
            username: "demouser",
            password: "password"
        });
    }

    updateInput(e) {
        const category = e.target.name.slice(5, -1);
        if (e.target.value === '') {
            e.target.classList.add("login-error")
            this.errors[category] = true;
        } else {
            e.target.classList.remove("login-error") 
            this.errors[category] = false;
        }

        this.setState({ [category]: e.target.value });
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    render () {
        const backend_error = this.props.errors ? 
        this.props.errors.map(e => (<p className="back-error" key={e}>{e}</p> )) : "";

        const username_error = this.errors.username ? <p className="front-error">{this.errors.username_error}</p> : "";

        const password_error = this.errors.password ? <p className="front-error">{this.errors.password_error}</p> : "";

        return (
            <div className="form-container">
                {window.authToken}
                <div className='form-header'>
                    <div className="form-logo-container">
                        <Link id="form-logo" to="/">
                            <img src={window.logoBlack} alt="modified logo" />
                        </Link>
                        <p id="logo">Modified</p>
                    </div>
                </div>

                <form onSubmit={this.handleSubmit}>

                    <p className="login-text-top">To continue, log in to Modified.</p>
                    {backend_error}
                    <div id="login-buttons">
                        <a className="large-button" id="demo-user-fb" onClick={this.handleDemo}>
                            <img src={window.fLogo} />
                            CONTINUE WITH DEMO USER
                        </a>

                        <a className="large-button" id="demo-user-aapl" onClick={this.handleDemo}>
                            <img src={window.aLogo} />
                            CONTINUE WITH DEMO USER
                        </a>

                        <a className="large-button" id="demo-user-goog" onClick={this.handleDemo}>
                            <img src={window.gLogo} />
                            CONTINUE WITH DEMO USER
                            </a>
                    </div>

                    <div id="option-divider">
                        <span>OR</span>
                    </div>
                    
                    <div id="username-box">
                        <label className="login-input-header">Email address or username</label>
                        <input className="login-input" placeholder="Email address or username" type="text" value={this.state.username} onChange={this.updateInput} name="user[username]" />
                        {username_error}
                    </div>
                   
                    <div id="password-box">
                        <label className="login-input-header">Password</label>
                        <input className="login-input" placeholder="Password" type="text" value={this.state.password} onChange={this.updateInput} name="user[password]"/>
                        {password_error}
                    </div>

                    
                    
                    <div className="login-submit-area">
                        <label id="remember-box">
                            <input type="checkbox" />
                            Remember me    
                        </label>
                        <input className="small-button" id="login" type="submit" value="LOG IN" />
                    </div>
                    
                </form>

                <div id="login-signup-info">
                    <p className="login-text-bottom">Don't have an account?</p>
                    <Link className="large-button" id="signup-login" to="/signup">SIGN UP FOR MODIFIED</Link>
                </div>
            </div>
        )
    }
}
