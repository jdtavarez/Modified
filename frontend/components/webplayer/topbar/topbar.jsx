import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../../actions/session_actions";
import { clearPlaylists } from "../../../actions/playlist_actions";
import { Link } from 'react-router-dom'


class TopBar extends React.Component {
    constructor(props) {
        super(props)

        this.goBack = this.goBack.bind(this);
        this.goForward = this.goForward.bind(this);
        this.handleNavClick = this.handleNavClick.bind(this);
    }

    componentWillUnmount() {
        this.props.clearPlaylists();
    }

    goBack() {
        this.props.history.goBack();
    }

    goForward() {
        this.props.history.goForward();
    }

    handleNavClick(e) {
        e.stopPropagation();
        const arrow = document.getElementById("pro-arrow");
        if (arrow.className === 'fas fa-angle-up') {
            document.removeEventListener("click", this.handleNavClick);
            arrow.className = 'fas fa-angle-down'
            const container = document.getElementsByClassName("pro-dropdown-content")[0];
            container.classList.remove("display-items");
            
        } else {
            document.addEventListener("click", this.handleNavClick);
            arrow.className = 'fas fa-angle-up';
            const container = document.getElementsByClassName("pro-dropdown-content")[0];
            container.classList.add("display-items");
        }
    }

    render() {
        return (
            <div id="web-top-bar" onScroll={this.handleScroll}>
                <div id="top-container">
                    <div id="navigate-buttons">
                        <i onClick={this.goBack} className="fas fa-chevron-left"></i>
                        <i onClick={this.goForward} className="fas fa-chevron-right"></i>
                    </div>
                    <div className="profile-dropdown">
                        <div id="profile-button" onClick={this.handleNavClick}>
                            <img className="top-profile-photo" src={window.profiles} />
                            <p className="top-username">{this.props.currentUser.username}</p>
                            <i className="fas fa-angle-down" id="pro-arrow"></i>
                        </div>
                        <div className="pro-dropdown-content">
                            <div className="pro-options-list">
                                <Link to={`/web/users/${this.props.currentUser.id}`}>Profile</Link>   
                                <a onClick={this.props.logout}>Log out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
})

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    clearPlaylists: () => dispatch(clearPlaylists())
})



export default withRouter(connect(mSTP, mDTP)(TopBar));