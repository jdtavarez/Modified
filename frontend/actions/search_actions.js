import * as SearchAPIUtil from '../util/search_util'

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

export const receiveCategories = (categories) => ({
    type: RECEIVE_CATEGORIES,
    categories
});

export const fetchCategories = () => (dispatch) => (
    SearchAPIUtil.fetchCategories().then(response => {
        dispatch(receiveCategories(response))
    })
)

export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY"

export const receiveCategories = (category) => ({
    type: RECEIVE_CATEGORY,
    category
});

export const fetchCategory = (categoryId) => (dispatch) => (
    SearchAPIUtil.fetchCategory(categoryId).then(response => {
        dispatch(receiveCategory(response))
    })
)

export const RECEIEVE_SEARCH_CONTENT = "RECEIEVE_SEARCH_CONTENT"

export const receiveSearchContent= (results) => ({
    type: RECEIEVE_SEARCH_CONTENT,
    results
});

export const fetchSearchContents = () => (dispatch) => (
    SearchAPIUtil.fetchSearchContents().then(response => {
        dispatch(receiveSearchContent(response))
    })
)
