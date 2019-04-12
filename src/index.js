import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/rootReducer';
import * as serviceWorker from './serviceWorker';

const appTitle = "Google Maps";
const middlewares = applyMiddleware(thunk);

const initialState = {usersList:[],cordinates:null };
const store = createStore(reducers, initialState, middlewares);

ReactDOM.render(
    <Provider store={store}>
        <App pageTitle={appTitle} />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
