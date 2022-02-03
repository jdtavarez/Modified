import React from "react";
import { withRouter } from "react-router-dom";


class TopBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="web-top-bar">
            </div>
        )
    }
}

export default withRouter(TopBar);