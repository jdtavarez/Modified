import { connect } from "react-redux";
import { withRouter } from 'react-router';
import SearchComp from "./search";
import { fetchCategories, fetchCategory, fetchSearchContents } from "../../../../actions/search_actions";


const mSTP = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        playlist: state.entities.contents.playlist,
        contents: state.entities.contents,
        categories: state.ui.search.categories
    })
}

const mDTP = (dispatch) => ({
    fetchCategories: () => dispatch(fetchCategories()),
    fetchCategory: (categoryId) => dispatch(fetchCategory(categoryId)),
    fetchSearchContents: () => dispatch(fetchSearchContents())
})

export default withRouter(connect(mSTP, mDTP)(SearchComp));