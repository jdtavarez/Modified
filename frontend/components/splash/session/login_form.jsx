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
        this.updateInput = this.updateInput.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
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
                    <p>To continue, log in to Modified.</p>
                    {errors}
                    <Link className="large-button" id="demo-user"  to="/signup">CONTINUE WITH DEMO USER</Link>
                    <label className="input-header">Email address or username</label>
                    <input type="text" value={this.state.username} onChange={this.updateInput} name="user[username]"/>
                    <label className="input-header">Password</label>
                    <input type="text" value={this.state.password} onChange={this.updateInput} name="user[password]"/>
                    
                    <div className="submit-area">
                        <input className="small-button" id="login" type="submit" value="LOG IN" />
                    </div>
                    <p>Don't have an account?</p>
                    <Link className="large-button" id="signup" to="/signup">SIGN UP FOR SPOTIFY</Link>
                </form>
            </div>
        )
    }
}
