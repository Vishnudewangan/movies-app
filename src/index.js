import React from 'react';
import ReactDOM from 'react-dom/client';
//import { createStore } from 'redux';// createStore deprecated thats I am using configureStore instead
import { configureStore } from '@reduxjs/toolkit'; // in place of createStore

import './index.css';
import App from './components/App';
import reducer from './reducers';
import movies from './reducers';

;
const store = configureStore(movies); // reducer is the function that returns the state // movies is the initial state // createStore is a function that takes a reducer and returns a store// createStore deprecated in favor of configureStore
console.log('store', store);
console.log('STATE', store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <App />
 
);
