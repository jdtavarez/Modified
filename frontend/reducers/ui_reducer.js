import { combineReducers } from "redux";
import playbarReducer from "./playbar_reducer"
import modalsReducer from "./modals_reducer";

const uiReducer = (
    combineReducers({
        modals: modalsReducer,
        playbar: playbarReducer
    })
)

export default uiReducer