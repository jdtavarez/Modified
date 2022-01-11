import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import playlistsReducer from "./playlists_reducer";
import contentsReducer from "./contents_reducer";

const entitiesReducer = (
    combineReducers({
        users: usersReducer,
        playlists: playlistsReducer,
        contents: contentsReducer
    })
)

export default entitiesReducer