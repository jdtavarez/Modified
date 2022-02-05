import React from "react";
import SearchContentIndexItem from "./search_content_container";
import ArtistCard from "../cards/artist_card";
import AlbumCard from "../cards/album_card";
import PlaylistCard from "../cards/playlist_card";

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            allStrings: null,
            contents: null,
            artists: null,
            albums: null, 
            playlists: null,
            matchContents: null,
            matchArtists: null,
            matchAlbums: null,
            matchPlaylists: null,
        }

        this.onInput = this.onInput.bind(this);
        this.formatSearchStrings = this.formatSearchStrings.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
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
        searchBar.addEventListener("input", this.onInput);
        this.formatSearchStrings();
    }

    componentWillUnmount() {
        const topbar = document.getElementById('navigate-buttons');
        topbar.style.width = '90px';
        const searchBar = document.getElementById('search-bar');
        searchBar.removeEventListener("input", this.onInput);
        searchBar.remove();
    }

    formatSearchStrings() {
        const { contents, artists, albums, playlists } = this.props.searchContents;
        const contentsStrings = Object.keys(contents);
        const artistsStrings = Object.keys(artists);
        const albumsStrings = Object.keys(albums);
        const playlistsStrings = Object.keys(playlists);
        const allStrings = [contentsStrings, artistsStrings, albumsStrings, playlistsStrings].flat();
        this.setState({ allStrings, contents, artists, albums, playlists });
    }

    onInput(e) {
        const genres = document.getElementById('browse-container');
        const results = document.getElementById('search-results');
        const searchString = e.target.value;
        if (searchString === '') {
            genres.style.display = 'block';
            results.style.display = 'none';
        } else {
            results.style.display = 'block';
            genres.style.display = 'none';
            this.handleSearch(searchString)
        }
    }

    handleSearch(searchString) {
        let matches = [];

        this.state.allStrings.forEach(string => {
            if (string.includes(searchString)) {
                matches.push(string)
            }
        })
        
        let matchContents = {};
        let matchArtists = {};
        let matchAlbums = {};
        let matchPlaylists = {};
        let id;

        const contents = this.state.contents;
        const artists = this.state.artists;
        const albums = this.state.albums;
        const playlists = this.state.playlists;

        matches.forEach(match => {
            if (contents[match]) {
                id = contents[match].id;
                matchContents[id] = contents[match];
            } 
            if (this.state.artists[match]) {
                id = artists[match].id;
                matchArtists[id] = artists[match];
            }
            if (this.state.albums[match]) {
                id = albums[match].id;
                matchAlbums[id] = albums[match];
            }
            if (this.state.playlists[match]) {
                id = playlists[match].id;
                matchPlaylists[id] = playlists[match];
            }
        })

        this.setState({ matchContents, matchArtists, matchAlbums, matchPlaylists})
    }

    render() {
        let contentsIndex; let artistsIndex; let albumsIndex; let playlistsIndex;

        const artistNames = this.props.searchContents.artist_names

        contentsIndex = this.state.matchContents ? Object.values(this.state.matchContents).map(content => <SearchContentIndexItem key={content.id} 
        artist={{ name: content.artist_name, id: content.artist_id }} album={{ title: content.album_title, id: content.album_id }} content={content}/>) : ("");

        artistsIndex = this.state.matchArtists ? Object.values(this.state.matchArtists).map(artist => (<ArtistCard key={`artist-${artist.id}`} id={artist.id} artist_name={artist.artist_name} />)
        ) : ("");

        albumsIndex = this.state.matchAlbums ? Object.values(this.state.matchAlbums).map(album => {
            let artist_name = artistNames[album.artist_id].artist_name;
            return (<AlbumCard key={`album-${album.id}`} id={album.id} title={album.title} artist_name={artist_name} image={album.image_url} />)
        }) : ("")

        playlistsIndex = this.state.matchPlaylists ? Object.values(this.state.matchPlaylists).map(playlist => <PlaylistCard key={`playlist-${playlist.id}`} id={playlist.id} title={playlist.title} image={playlist.image_url} creator={playlist.creator_name} creator_id={playlist.creator_id} />) : ("")


        const contentDiv = contentsIndex.length === 0 ? '' : (
            <div>
                <h2 className="items-header">Songs</h2>
                <div className="search-content-index">
                    {contentsIndex}
                </div>
            </div>
        )

        const artistDiv = artistsIndex.length === 0 ? '' : (
            <div>
                <h2 className="items-header">Artists</h2>
                <div className="artists-sideways">
                    {artistsIndex}
                </div>
            </div>
        )

        const albumDiv = albumsIndex.length === 0 ? '' : (
            <div>
                <h2 className="items-header">Albums</h2>
                <div className="albums-sideways">
                    {albumsIndex}
                </div>
            </div>
        )

        const playlistsDiv = playlistsIndex.length === 0 ? '' : (
            <div>
                <h2 className="items-header">Playlists</h2>
                <div className="albums-sideways">
                    {playlistsIndex}
                </div>
            </div>
        )

        let results;

        if (contentDiv === ''
        && artistDiv === ''
        && albumDiv === ''
        && playlistsDiv  === '') {
            results = (
            <div id="search-results" hidden>
                <h2 className="items-header">No results found</h2>
            </div>
            )
        } else {
            results = (
                <div id="search-results" hidden>
                    {contentDiv}
                    {artistDiv}
                    {albumDiv}
                    {playlistsDiv}
                </div>
            )
        }

        return (
            <div>
                {results}
            </div>
        )
    }
}