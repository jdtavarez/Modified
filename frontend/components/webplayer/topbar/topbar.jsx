import React from "react";
import { withRouter } from "react-router-dom";


class TopBar extends React.Component {
    constructor(props) {
        super(props)

        this.goBack = this.goBack.bind(this);
        this.goForward = this.goForward.bind(this);
    }

    goBack() {
        this.props.history.goBack();
    }

    goForward() {
        this.props.history.goForward();
    }

    render() {
        return (
            <div id="web-top-bar">
                <div id="top-container">
                    <div id="navigate-buttons">
                        <i onClick={this.goBack} className="fas fa-chevron-left"></i>
                        <i onClick={this.goForward} className="fas fa-chevron-right"></i>
                    </div>
                    <div id="profile-button">
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(TopBar);