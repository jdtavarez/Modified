import React from "react";
import { Link } from "react-router-dom";

export default class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const nav_display = this.props.currentUser ? (
            <div className="splash-links">
                <p className="divider">|</p>
                <div className="profile-container">
                    <i className="far fa-user"></i>
                    <p>Profile</p>
                </div>
                <button onClick={this.props.logout}>logout</button>
            </div>
        ) : (
            <div className="splash-links">
                <p className="divider">|</p>
                <Link to="/signup" className="nav-link">Sign up</Link>
                <Link to="/login" className="nav-link">Log in</Link>
            </div>
        )
        return (
            <header>
                <nav id="nav-bar">
                    <div className="splash-logo-container">
                        <img src={window.logoWhite} alt="modified logo" id="splash-logo" />
                        <p id="logo">Modified</p>
                    </div>
                    {nav_display}
                </nav>
            </header>
        )
    }
}