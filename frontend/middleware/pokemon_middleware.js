import * as ACTS from '../actions/pokemon_actions.js';
import { fetchAllPokemon } from '../util/api_util.js';

export default ({ dispatch }) => next => action => {
  switch (action.type) {
    case ACTS.REQUEST_ALL_POKEMON:
      const success = (pokemon) => dispatch(ACTS.receiveAllPokemon(pokemon));
      fetchAllPokemon(success);
    default:
      return next(action);
  }
}
