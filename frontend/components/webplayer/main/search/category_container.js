import { connect } from "react-redux";
import { withRouter } from 'react-router';
import Category from "./category";
import { fetchCategory, clearCategory } from "../../../../actions/search_actions";


const mSTP = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        playlist: state.entities.contents.playlist,
        contents: state.entities.contents,
        categories: state.ui.search.categories,
        category: state.ui.search.category
    })
}

const mDTP = (dispatch) => ({
    fetchCategory: (categoryId) => dispatch(fetchCategory(categoryId)),
    clearCategory: () => dispatch(clearCategory())
})

export default withRouter(connect(mSTP, mDTP)(Category));