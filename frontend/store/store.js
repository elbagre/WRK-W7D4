import { createStore, applyMiddleware } from 'redux';
import PokemonMiddleware from '../middleware/pokemon_middleware.js';
import PokemonReducer from '../reducers/pokemon_reducer.js';

const configureStore = () => (
  createStore(PokemonReducer, applyMiddleware(PokemonMiddleware))
);

export default configureStore;
