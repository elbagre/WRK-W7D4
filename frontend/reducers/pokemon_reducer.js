import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions.js';
import merge from 'lodash/merge';


const PokemonReducer = (oldState = { pokemon: [] }, action) => {
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      const newState = merge(
        {},
        oldState,
        { pokemon: [
          ...oldState.pokemon,
          ...action.pokemon
        ]
       });
      return newState;
    default:
      return oldState;
  }
};

export default PokemonReducer;
