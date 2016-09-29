import { connect } from 'react-redux';
import PokemonIndex from './pokemon_index.jsx';
import { requestAllPokemon } from '../../actions/pokemon_actions';

const mapStatetoProps = state => ({
  pokemon: state.pokemon
});

export default connect(mapStatetoProps)(PokemonIndex);
