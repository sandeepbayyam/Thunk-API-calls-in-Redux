import React from 'react';
import './style.css';
import store from './store/store';
import {Provider } from 'react-redux'
import Books from './Books'
export default function App() {
  
  return (
    <Provider store={store}>
    <div>
        <Books></Books>
    </div>
    </Provider>
  );
}
