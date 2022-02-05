import React from 'react';
import { Link } from 'react-router-dom'
import AlbumContentIndexItem from './album_content_container'

export default class Album extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hash_location: props.match.params[0]
        }
    }

    componentDidMount () {
        const hash_location = this.props.match.params[0]
        const id = parseInt(hash_location)
        this.props.fetchAlbumContents(id)
        this.setState({ hash_location })
    }

    componentDidUpdate (prevProps) {
        if (this.props.match.params[0] !== prevProps.match.params[0]) {
            const id = parseInt(this.props.match.params[0])
            this.props.fetchAlbumContents(id)
        }
    }

    componentWillUnmount () {
        this.props.clearAlbum();
    }

    render () {
        let album;
        let creator;
        let creator_id;

        if (this.props.contents.album) {
            album = this.props.contents.album
            creator = this.props.contents.album.artist_name
            creator_id = this.props.contents.album.artist_id
        } else {
            album = ""
            creator = ""
            creator_id = ""
        }

        let total_duration = 0;
        const content_index = this.props.contents.album && this.props.contents.contents ? 
        Object.values(this.props.contents.contents).map((content,idx) => {
            total_duration += content.length;
            return (<AlbumContentIndexItem key={content.id} content={content} position={idx+1} creator={creator} creator_id={creator_id}/>)
        }) : ("")

        total_duration = Math.floor(total_duration / 60);
        const total_items = content_index.length

        return(
        <div id="playlist-container">
            <div className="playlist-display-header">
                <img  src={album.url} className='playlist-cover' />
                <div className="playlist-info">
                    <h3 className="content-type">ALBUM</h3>
                    <h1 onClick={this.handleClick} className="album-title">{album.title}</h1>
                    <div className="playlist-metadata">
                            <Link className="creator-info" to={`/web/artists/${creator_id}`}>
                            <h2>{creator}</h2>
                        </Link>
                        <h2> • {album.release_year} • {total_items} songs, {total_duration} mins</h2>
                    </div>
                </div>
            </div>
            <div className="playlist-contents">
                <div className="playlist-tools">
                </div>
                <div className="content-index">
                        <div className="content-index-header">
                            <div className="position">#</div>
                            <div className="title">TITLE</div>
                            <div className="album"></div>
                            <div className="date-added"></div>
                            <div className="duration"><i className="far fa-clock"></i></div>
                            <div className="index-options-container"></div>
                        </div>
                    {content_index}
                </div>
            </div>
            
        </div>
        )
    }
};