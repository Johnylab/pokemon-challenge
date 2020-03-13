import React from 'react';
import './ResultView.css';
import { Link } from 'react-router-dom';

const ResultItemView = ({ result }) => {
  if (!result) {
    return null;
  }

  const {
    id, name, sprites, height, weight,
  } = result;

  const imageSource = sprites.front_default.replace('/pokemon/', '/pokemon/other-sprites/official-artwork/');

  return (
    <div className="Result">
      <div>
        <img src={imageSource} alt={name} />
      </div>
      <div>
        <p><strong>{`${name[0].toUpperCase()}${name.substr(1)}`}</strong></p>
        <p>Id: {id}</p>
        <p>Peso: {weight}</p>
        <p>Altura: {height}</p>
        <p><Link to={`/pokemon/${name}`}>Mais sobre o {name}</Link></p>
      </div>
    </div>
  );
};

const ResultListView = ({ results }) => {
  if (!(results instanceof Array) || !results.length) {
    return null;
  }

  console.log(results);

  const pokemons = results
    .filter(({ is_hidden }) => !is_hidden)
    .map(({ pokemon }) => pokemon);

  return (
    <>
      {pokemons.map(({ name, url }) => (
        <p key={url} className="Result-item">
          <Link to={`/pokemon/${name}`} className="Result-link">
            {`${name[0].toUpperCase()}${name.substr(1)}`}
          </Link>
        </p>
      ))}
    </>
  );
};

const ResultView = ({ result }) => {
  if (!result) {
    return null;
  }

  if (result instanceof Array) {
    return (
      <ResultListView results={result} />
    );
  }

  return (
    <ResultItemView result={result} />
  );
};

export default ResultView;
