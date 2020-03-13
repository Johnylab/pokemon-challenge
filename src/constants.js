export const fetchPokeAPI = (path) => fetch(`https://pokeapi.co/api/v2/${path}`)
  .then(resp => resp.ok && resp.json())
  .catch(error => console.trace(error));
