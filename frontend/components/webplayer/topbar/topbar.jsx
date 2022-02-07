import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../../actions/session_actions";
import { clearPlaylists } from "../../../actions/playlist_actions";
import { Link } from 'react-router-dom';
import { fetchUser } from "../../../actions/user_actions";


class TopBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            image: null,
            username: ''
        }

        this.goBack = this.goBack.bind(this);
        this.goForward = this.goForward.bind(this);
        this.handleNavClick = this.handleNavClick.bind(this);
    }

    componentDidMount() {
        if (this.props.profile[this.props.currentUser.id]) {
            const currentUser = this.props.profile[this.props.currentUser.id].user;
            this.setState({ image: currentUser.image_url, username: currentUser.username })
        } else {
            this.props.fetchUser(this.props.currentUser.id).then(() => {
                const currentUser = this.props.profile[this.props.currentUser.id].user;
                this.setState({ image: currentUser.image_url, username: currentUser.username })
            })
        }
    }

    componentDidUpdate(prevProps) {
        const id = this.props.currentUser.id;
        if (this.props.profile[id]) {
            const { user } = this.props.profile[id];
            const image = user.image_url;
            const username = user.username;

            if (prevProps.profile[id]) {
                const oldUser = prevProps.profile[id].user;
                const oldUsername = oldUser.username;
                const oldImage = oldUser.image_url;

                if (image !== oldImage || username !== oldUsername) {
                    this.props.fetchUser(id).then(() => {
                        this.setState({ image, username });
                    })
                }
            }
        }
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
                            <img className="top-profile-photo" src={
                                this.state.image ? this.state.image : window.profiles} />
                            <p className="top-username">{this.state.username}</p>
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
    profile: state.entities.profiles
})

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    clearPlaylists: () => dispatch(clearPlaylists()),
    fetchUser: (userId) => dispatch(fetchUser(userId))
})



export default withRouter(connect(mSTP, mDTP)(TopBar));