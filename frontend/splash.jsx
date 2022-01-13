import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {


    const preloadedState = {
        entities: {
            users: { 1: { username: "demouser", id: 1 } }
        },
        session: { id: 1 }
    };

    

    const store = configureStore(preloadedState);
    window.getState = store.getState;
    window.dispatch = store.dispatch;



    ReactDOM.render(<Root store={store} />, document.getElementById('root'));
})