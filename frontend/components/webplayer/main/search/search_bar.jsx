import React from "react"

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.onInput = this.onInput.bind(this);
    }

    componentDidMount() {
        const topbar = document.getElementById('navigate-buttons');
        topbar.style.width = '455px';
        const searchBar = document.createElement("INPUT");
        searchBar.style.marginLeft = '15px';
        searchBar.id = "search-bar"
        searchBar.type = "text";
        searchBar.placeholder = "Songs, artists, albums, or playlists";
        topbar.append(searchBar);
        searchBar.addEventListener("input", this.onInput)
        this.props.fetchSearchContents();
    }

    componentWillUnmount() {
        const topbar = document.getElementById('navigate-buttons');
        topbar.style.width = '90px';
        const searchBar = document.getElementById('search-bar');
        searchBar.removeEventListener("input", this.onInput);
        searchBar.remove();
    }

    onInput(e) {
        const genres = document.getElementById('browse-container');
        const searchString = e.target.value;
        if (searchString === '') {
            genres.style.display = 'block';
        } else {
            genres.style.display = 'none';
        }
    }



    render() {
        return (
            ''
        )
    }
}