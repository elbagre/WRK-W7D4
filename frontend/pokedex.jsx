import Root from './util/root.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { fetchAllPokemon } from './util/api_util.js';
import { receiveAllPokemon, RECEIVE_ALL_POKEMON } from './actions/pokemon_actions.js';

// const fetchSuccess = pokemon => console.log(receiveAllPokemon(pokemon));



document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});
