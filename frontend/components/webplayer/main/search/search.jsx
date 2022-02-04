import React from "react"
import SearchBar from "./search_bar_container";
import { Route } from 'react-router';
import { Link } from "react-router-dom";

export default class SearchComp extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchCategories();
    }

    render() {
        const genres = this.props.categories ? 
        this.props.categories.map(genre => (
            <Link to={`/web/genre/${genre.genre}`} state={{ test: 'test' }} key={genre.id + genre.genre} className={`genre ${genre.genre}`}>{genre.genre}</Link>
        )) : ('')

        const genreContainer = <div id="genre-container">{genres}</div>
        return (
            <div className="search">
                <Route exact path="/web/search/" component={SearchBar} />
                <div id='browse-container'>
                    <div className="browse-all">Browse All</div>
                    {genreContainer}
                </div>
            </div>
        )
    }
}

    