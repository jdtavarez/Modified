import React from "react"

export default class SearchComp extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const topbar = document.getElementById('navigate-buttons');
        topbar.style.width = '299px';
        const searchBar = document.createElement("INPUT");
        searchBar.style.marginLeft = '15px';
        searchBar.id = "search-bar"
        searchBar.type = "text";
        topbar.append(searchBar);
    }

    componentWillUnmount() {
        const topbar = document.getElementById('navigate-buttons');
        topbar.style.width = '90px';
        const searchBar = document.getElementById('search-bar');
        searchBar.remove();
    }

    render() {
        return (
            <div className="search">
            </div>
        )
    }
}