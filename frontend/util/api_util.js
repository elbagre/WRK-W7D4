export const fetchAllPokemon = (success) => {
  $.ajax ({
    method: 'GET',
    url: '/api/pokemon',
    success,
    error(e) { alert(e); }
  });
};
