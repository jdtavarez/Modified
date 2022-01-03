import React from "react";
import { Link } from "react-router-dom";

export default class NavBar extends React.Component {

    render() {
        const display = this.props.currentUser ? (
            <nav>
                <img id="logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="modified logo"/>
                <div id="links">
                    <Link to="/" className="nav-link">LEFT</Link>
                    <p>|</p>
                    <h1>Welcome {this.props.currentUser.username}</h1>
                    <button onClick={this.props.logout}>logout</button>
                </div>
            </nav>
        ) : (
            <nav>
                <img id="logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="modified logo"/>
                <div id="links">
                    {/* <Link to="/" className="nav-link">LEFT</Link> */}
                    <p className="divider">|</p>
                    <Link to="/signup" className="nav-link">Sign up</Link>
                    <Link to="/login" className="nav-link">Log in</Link>
                </div>
            </nav>
        )
        return (
            <header>
                {display}
            </header>
        )
    }
}