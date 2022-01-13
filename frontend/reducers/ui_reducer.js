import { combineReducers } from "redux";
import playsReducer from "./plays_reducer"
import modalsReducer from "./modals_reducer";

const uiReducer = (
    combineReducers({
        modals: modalsReducer,
        plays: playsReducer
    })
)

export default uiReducer