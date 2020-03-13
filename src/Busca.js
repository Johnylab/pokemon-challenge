import React, { useState } from 'react';
import './Busca.css';
import ResultView from './ResultView';
import { fetchPokeAPI } from './constants';

const pathes = {
  'pokemon': 'pokemon',
  'habilidade': 'ability',
};

const Busca = () => {
  const [tipo, setTipo] = useState('pokemon');
  const [busca, setBusca] = useState('');
  const [result, setResults] = useState(null);

  const searchPokemons = async (e) => {
    e.preventDefault();
    if (!busca) {
      return;
    }

    const path = pathes[tipo];
    setResults(null);

    const data = await fetchPokeAPI(`${path}/${busca}`);

    if (tipo === 'pokemon') {
      setResults(data);
    } else {
      setResults(data.pokemon);
    }
  };

  return (
    <div className="Busca">
      <header className="Busca-heading">
        <h1>
          Busca <small>Pokémons</small>
        </h1>
      </header>
      <form onSubmit={searchPokemons}>
        <p>
          <input type="radio" name="busca-tipo"
            id="pokemon" value="pokemon"
            checked={tipo === 'pokemon'}
            onChange={({ target }) => {
              if (target.checked) {
                setTipo(target.value);
              }
            }} />
          <label className="Busca-label"
            htmlFor="pokemon">Nome ou número</label>
          <input type="radio" name="busca-tipo"
            id="habilidade" value="habilidade"
            checked={tipo === 'habilidade'}
            onChange={({ target }) => {
              if (target.checked) {
                setTipo(target.value);
              }
            }} />
          <label className="Busca-label"
            htmlFor="habilidade">Habilidade</label>
        </p>
        <p className="Busca-input">
          <input type="text" name="busca"
            onChange={({ target }) => setBusca(target.value)}
            placeholder={`Busca por ${tipo}`} />
          <button>Buscar</button>
        </p>
      </form>

      <ResultView result={result} />
    </div>
  );
};

export default Busca;
