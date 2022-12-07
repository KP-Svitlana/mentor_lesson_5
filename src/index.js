import { getRefs } from './JS/getRefs';
import { fetchAllPokemon } from './JS/pokemonAPI';

const refs = getRefs();
refs.buttonFetch.addEventListener('click', onButtonFetckClick);

function onButtonFetckClick(evt) {
  fetchAllPokemon();
}
