import React from "react";
import { Link } from "react-router-dom";

export default class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.handleNavClick = this.handleNavClick.bind(this)
    }

    handleNavClick() {
        const arrow = document.getElementById("arrow");
        if (arrow.className === 'fas fa-angle-up') {
            arrow.className = 'fas fa-angle-down'
            const container = document.getElementsByClassName("nav-dropdown-content")[0];
            container.classList.remove("display-items")
        } else {  
            arrow.className = 'fas fa-angle-up'; 
            const container = document.getElementsByClassName("nav-dropdown-content")[0];
            container.classList.add("display-items")
        }
    }

    render() {
        const nav_display = this.props.currentUser ? (
            <div className="splash-links">
                <p className="divider">|</p>
                <div className="nav-dropdown">
                    <div className="nav-btn" onClick={this.handleNavClick}>
                        <i className="far fa-user"></i>
                        <p>Profile</p>
                        <i className="fas fa-angle-down" id="arrow"></i>
                    </div>
                    <div className="nav-dropdown-content">
                        <a onClick={this.props.logout}>Log out</a>
                    </div>
                </div>
                
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