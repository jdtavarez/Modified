import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import playlistsReducer from "./playlists_reducer";
import albumsReducer from "./albums_reducer";
import contentsReducer from "./contents_reducer";
import artistsReducer  from "./artists_reducer";
import profilesReducer from "./profiles_reducer";


const entitiesReducer = (
    combineReducers({
        users: usersReducer,
        playlists: playlistsReducer,
        albums: albumsReducer,
        contents: contentsReducer,
        artists: artistsReducer, 
        profiles: profilesReducer,
    })
)

export default entitiesReducer