import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchContents } from "./actions/content_actions";

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchContents = fetchContents;
    ReactDOM.render(<Root store={store} />, document.getElementById('root'));
})