import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPokeAPI } from './constants';
import './Pokemon.css';

const Pokemon = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetchPokeAPI(`pokemon/${name}`)
      .then(setPokemon);
  }, [name, setPokemon]);

  if (!pokemon) {
    return null;
  }

  const {
    id, sprites, height, weight,
  } = pokemon;

  const imageSource = sprites.front_default.replace('/pokemon/', '/pokemon/other-sprites/official-artwork/');

  return (
    <div className="Pokemon">
      <div>
        <img src={imageSource} alt={name} />
      </div>
      <div>
        <p>
          {Object.entries(sprites).filter(([key, val]) => !!val).map(([alt, src]) => (
            <img key={alt} src={src} alt={alt} />
          ))}
        </p>
        <p><strong>{`${name[0].toUpperCase()}${name.substr(1)}`}</strong></p>
        <p>Id: {id}</p>
        <p>Peso: {weight}</p>
        <p>Altura: {height}</p>
      </div>
    </div>
  );
};

export default Pokemon;
