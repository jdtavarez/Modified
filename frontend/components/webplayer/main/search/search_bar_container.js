import { connect } from "react-redux";
import SearchBar from "./search_bar";
import { fetchSearchContents } from "../../../../actions/search_actions";


const mSTP = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        playlist: state.entities.contents.playlist,
        contents: state.entities.contents,
        categories: state.ui.search.categories,
        searchContents: state.ui.search.searchContents
    })
}

const mDTP = (dispatch) => ({
    fetchCategories: () => dispatch(fetchCategories()),
    fetchCategory: (categoryId) => dispatch(fetchCategory(categoryId)),
    fetchSearchContents: () => dispatch(fetchSearchContents())
})

export default connect(mSTP, mDTP)(SearchBar);