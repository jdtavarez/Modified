import React from 'react';
import ArtistIndexItem from "./content_item/artist_content_container";
import AlbumCard from './albums/album_card';
import PlaylistCard from "../cards/playlist_card";

export default class Artist extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            fetched: false,
            contents: null,
            playlists: null,
            albums: null,
        }
    }

    componentDidMount() {
        const id = parseInt(this.props.match.params[0])
        this.props.fetchArtist(id).then(() => {
            const { artist, contents, albums, featured_playlists } = this.props.artist;
            this.props.receiveContents({contents: contents});
            this.setState({ fetched: true, artist, contents, albums, featured_playlists });
            
        });
    }

    componentWillUnmount() {
        this.props.clearArtist();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params[0] !== prevProps.match.params[0]) {
            const id = parseInt(this.props.match.params[0])
            this.props.fetchArtist(id).then(() => {
                const { artist, contents, albums, featured_playlists } = this.props.artist;
                this.setState({ artist, contents, albums, featured_playlists });
            });
        }
    }

    render () {

        let artist;
        let bgImg = '';

        this.props.artist.artist ? artist = this.props.artist.artist.artist_name : artist = '';

        let contentsIndex = this.state.contents ? Object.values(this.state.contents).map((content, idx) => <ArtistIndexItem key={content.id} position={idx + 1} artist={{ name: content.artist_name, id: content.artist_id }} album={{ title: content.album_title, id: content.album_id }} content={content} />).reverse() : ("");

        if (contentsIndex.length > 5) {
            contentsIndex = contentsIndex.slice(0, 5) 
        }

        const albumsIndex = this.state.albums ? Object.values(this.state.albums).map((album,idx) => {
            if (Object.values(this.state.albums).length > 1) {
                bgImg = (Object.values(this.state.albums))[1].image_url
            } else if (idx === 0) {
                bgImg = album.image_url
            }
            return (<AlbumCard key={`album-${album.id}`} id={album.id} title={album.title} release_year={album.release_year} image={album.image_url} />)
        }).reverse() : ("")

        const playlistsIndex = this.state.featured_playlists ? Object.values(this.state.featured_playlists).map(playlist => <PlaylistCard key={`playlist-${playlist.id}`} id={playlist.id} title={playlist.title} image={playlist.image_url} creator={playlist.creator_name} creator_id={playlist.creator_id} />).reverse() : ("")


        return (
            <div className="search">
                <h1 className="artist-header">
                    <div className='header-title'>
                        {artist}
                    </div>
                    <img className="header-img" src={bgImg} />
                </h1>
                <h2 className="items-header">Songs</h2>
                <div className="search-content-index">
                    {contentsIndex}
                </div>
                <h2 className="items-header">Albums</h2>
                <div className="albums-sideways">
                    {albumsIndex}
                </div>
                <h2 className="items-header">Featured In</h2>
                <div className="albums-sideways">
                    {playlistsIndex}
                </div>
            </div>
        )
    }
}