const URL_BASE = 'https://pokeapi.co/api/v2/ability/{id or name}/';

export function fetchAllPokemon() {
  fetch(URL_BASE).then(response => {
    console.log(response);
    if (!response.ok) {
      throw new Error('Ups, something going wrong');
    }
  });
}
