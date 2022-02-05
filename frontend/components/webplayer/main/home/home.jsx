import React from "react";
import ArtistCard from "../cards/artist_card";
import AlbumCard from "../cards/album_card";

export default class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            greeting: '',
            artContent: null,
            alContent: null,
        }

        this.formatFeatures = this.formatFeatures.bind(this);
        this.selectFeatures = this.selectFeatures.bind(this);
    }

    componentDidMount() {
        let featureInfo;
        if (!this.props.searchContents) {
            this.props.fetchSearchContents().then(() => {
                featureInfo = this.formatFeatures();

                const [artContent, alContent] = featureInfo;

                const date = new Date();
                const hours = date.getHours();
                let greeting;

                if (hours > 0 && hours < 11) {
                    greeting = 'Good morning'
                } else if (hours < 18) {
                    greeting = 'Good afternoon'
                } else {
                    greeting = 'Good evening'
                }
                this.setState({ greeting, artContent, alContent })
            })
        } else {
            featureInfo = this.formatFeatures();

            const [artContent, alContent] = featureInfo;

            const date = new Date();
            const hours = date.getHours();
            let greeting;

            if (hours > 0 && hours < 11) {
                greeting = 'Good morning'
            } else if (hours < 18) {
                greeting = 'Good afternoon'
            } else {
                greeting = 'Good evening'
            }
            this.setState({ greeting, artContent, alContent })
        }
    }

    formatFeatures() {
        const { artists, albums } = this.props.searchContents;
        const artistsStrings = this.selectFeatures(Object.keys(artists));
        const albumsStrings = this.selectFeatures(Object.keys(albums));
        const artContent = {};
        const alContent ={};
        for (let i = 0; i < 4; i++) {
            const artKey = artistsStrings[i];
            const artist = artists[artKey];
            let id = artist.id;
            artContent[id] = artist;

            const alKey = albumsStrings[i];
            const album = albums[alKey];
            id = album.id;
            alContent[id] = album;
        }

        return [artContent, alContent];
    }

    selectFeatures(array) {
        let shuffled = array.map(id => ({ id, sortKey: Math.random() })).sort((x, y) => (x.sortKey - y.sortKey)).map(idObject => idObject.id)
        return shuffled.length > 4 ? shuffled.slice(0,4) : shuffled;
    }

    render() {

        let artistsIndex; let albumsIndex;

        const artistNames = this.props.searchContents ? this.props.searchContents.artist_names : '';

        artistsIndex = this.state.artContent ? Object.values(this.state.artContent).map(artist => (<ArtistCard key={`artist-${artist.id}`} id={artist.id} artist_name={artist.artist_name} />)
        ) : ("");

        albumsIndex = this.state.alContent ? Object.values(this.state.alContent).map(album => {
            let artist_name = artistNames[album.artist_id].artist_name;
            return (<AlbumCard key={`album-${album.id}`} id={album.id} title={album.title} artist_name={artist_name} image={album.image_url} />)
        }) : ("");

        const artistDiv = (
            <div>
                <h2 className="items-header">Featured Artists</h2>
                <div className="artists-sideways">
                    {artistsIndex}
                </div>
            </div>
        );

        const albumDiv = (
            <div>
                <h2 className="items-header">Featured Albums</h2>
                <div className="albums-sideways">
                    {albumsIndex}
                </div>
            </div>
        );        

        return (
            <div className="home">
                <h1 className={`home-header ${this.state.greeting}`}>{this.state.greeting}</h1>
                {artistDiv}
                {albumDiv}
            </div>
        )
    }
}