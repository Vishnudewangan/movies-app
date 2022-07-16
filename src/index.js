import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore , applyMiddleware} from 'redux';// createStore deprecated thats I am using configureStore instead
//import { configureStore } from '@reduxjs/toolkit'; // in place of createStore

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

// fuction logger (obj, next, action) ==> logger(obj)(next)(action)
// logger(obj)
// const logger = function({dispatch , getState})
// {
//     return function (next)
//     {
//         return function (action)
//         {
//             // middleware code 

//             console.log('ACTION_TYPE', action.type);
//             next(action);
//         }
//     }
// }

const logger =({dispatch , getState}) => (next) => (action) =>{
    // logger code

    console.log('ACTION_TYPE', action.type);
    next(action);
}



//const store = configureStore(movies); // reducer is the function that returns the state // movies is the initial state // createStore is a function that takes a reducer and returns a store// createStore deprecated in favor of configureStore
const store = createStore(rootReducer , applyMiddleware(logger)); // reducer is the function that returns the state // movies is the initial state // createStore is a function that takes a reducer and returns a store
console.log('store', store);
// console.log('BEFORE STATE', store.getState());

// store.dispatch({
//     type: 'ADD_MOVIES',
//      movies: [{ name: 'Superman'}]
// });

// console.log('AFTER STATE', store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App store={store} />
);
