import { combineReducers } from "redux";
import playbarReducer from "./playbar_reducer";
import searchReducer from "./search_reducer";
import modalsReducer from "./modals_reducer";

const uiReducer = (
    combineReducers({
        modals: modalsReducer,
        playbar: playbarReducer,
        search: searchReducer
    })
)

export default uiReducer