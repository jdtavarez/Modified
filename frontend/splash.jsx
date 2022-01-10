import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchCreatorPlaylists, fetchPlaylist } from "./actions/playlist_actions";

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch
    window.fetchCreatorPlaylists = fetchCreatorPlaylists
    window.fetchPlaylist = fetchPlaylist
    ReactDOM.render(<Root store={store} />, document.getElementById('root'));
})