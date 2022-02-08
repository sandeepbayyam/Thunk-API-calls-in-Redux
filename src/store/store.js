import booksReducer from './books.reducer';
import {createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
const store = new createStore(booksReducer,applyMiddleware(thunk));
export default store;