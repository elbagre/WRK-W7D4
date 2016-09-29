import React from 'react';
import { requestAllPokemon } from '../actions/pokemon_actions.js';
import { Provider } from 'react-redux';
import Container from '../components/pokemon/pokemon_index_container.js';
import { Router, Route, hashHistory } from 'react-router';

const Root = ({ store }) => {
  const requestAllPokemonOnEnter = () => {
    store.dispatch(requestAllPokemon());
  }
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={Container} onEnter={requestAllPokemonOnEnter}/>
      </Router>
    </Provider>
  );
};

export default Root;
