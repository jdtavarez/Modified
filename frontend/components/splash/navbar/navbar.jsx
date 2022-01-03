import React from "react";
import { Link } from "react-router-dom";

export default class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const nav_display = this.props.currentUser ? (
            <nav>
                <div>LOGO</div>
                <div id="links">
                    <p>|</p>
                    <button onClick={this.props.logout}>logout</button>
                </div>
            </nav>
        ) : (
            <nav>
                <div>LOGO</div>
                <div id="links">
                    <p className="divider">|</p>
                    <Link to="/signup" className="nav-link">Sign up</Link>
                    <Link to="/login" className="nav-link">Log in</Link>
                </div>
            </nav>
        )
        return (
            <header>
                {nav_display}
            </header>
        )
    }
}