import { RECEIVE_CATEGORIES, RECEIVE_CATEGORY, RECEIEVE_SEARCH_CONTENT, CLEAR_CATEGORY } from '../actions/search_actions'

const searchReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            const categoryIds = Object.keys(action.categories)
            return Object.assign({}, state, { categories: action.categories }, { categoryIds: [...categoryIds]})
        case RECEIVE_CATEGORY:
            return Object.assign({}, state, { category: action.category })
        case RECEIEVE_SEARCH_CONTENT:
            return Object.assign({}, state, { searchContents: action.results })
        case CLEAR_CATEGORY: 
            return Object.assign({}, state, { category: null })
        default:
            return state;
    }
}

export default searchReducer