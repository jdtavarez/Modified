import React from "react";
import ArtistCard from '../cards/artist_card'
import AlbumCard from '../cards/album_card'

export default class Category extends React.Component {
    constructor(props) {
        super(props)

        this.categoryHelper = this.categoryHelper.bind(this);
    }

    componentDidMount() {
        const categoryId = this.categoryHelper();
        this.props.fetchCategory(categoryId);   
    }

    componentWillUnmount() {
        this.props.clearCategory();
    }

    categoryHelper() {
        const genre = this.props.history.location.pathname.slice(11);
        let categoryId;
        const categories = this.props.categories
        const max = categories.length;
        for (let i = 0; i < max; i++) {
            if (categories[i].genre === genre) {
                categoryId = categories[i].id;
                break;
            }
        }
        return categoryId;
    }

    render() {
        let category = ''; let albums; let artists;

        if (this.props.category) {
            category = this.props.category.category
            albums = this.props.category.albums;
            artists = this.props.category.artists;
        }

        const albums_index =  albums ?
            Object.values(albums).map(album => {
                const artist_name = artists[album.artist_id].artist_name;
                return (<AlbumCard key={`album-${album.id}`} id={album.id} title={album.title} artist_name={artist_name} image={album.image_url} artist_id={album.artist_id}/>)
            }) : ("")


        const artists_index = artists ?
            Object.values(artists).map(artist => (<ArtistCard key={`artist-${artist.id}`} id={artist.id} artist_name={artist.artist_name} />)
            ) : ("")

        return(
            <div className="search">
                <h1 className={`genre-header ${category.genre}`}>{category.genre}</h1>
                <h2 className="items-header">Artists</h2>
                <div className="artists-sideways">
                    {artists_index}
                </div>
                <h2 className="items-header">Albums</h2>
                <div className="albums-sideways">
                   {albums_index}
               </div>
            </div>
        )
    }
}