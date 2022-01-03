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
        let category = e.target.name.slice(4)
        category = category.slice(1,-1)
        this.setState({ [category]: e.target.value })
    }

    render () {
        const errors = this.props.errors ? 
        this.props.errors.map(e => (<p className="error" key={e}>{e}</p> )) : "";
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>

                    <img src="" alt="" />

                    <span className="separator"></span>

                    <p>To continue, log in to Modified.</p>
                    {errors}
                    <button className="large-button" id="demo-user" onClick={this.handleDemo}>CONTINUE WITH DEMO USER</button>
                    <label className="input-header">Email address or username</label>
                    <input placeholder="Email address or username" type="text" value={this.state.username} onChange={this.updateInput} name="user[username]"/>
                    <label className="input-header">Password</label>
                    <input placeholder="Password" type="text" value={this.state.password} onChange={this.updateInput} name="user[password]"/>
                    
                    <div className="submit-area">
                        <input className="small-button" id="login" type="submit" value="LOG IN" />
                    </div>
                    <p>Don't have an account?</p>
                    <Link className="large-button" id="signup-login" to="/signup">SIGN UP FOR MODIFIED</Link>
                </form>
            </div>
        )
    }
}
