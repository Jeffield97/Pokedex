import axios from "axios";
import React, { useState, useEffect } from "react";
import { getDataPokemon } from "../../utils/getDataPokemon";
import "./PokeCard.css";

const PokeCard = ({ pokemon }) => {
  const [pokemonData, setpokemonData] = useState(null);
  const loadDataPokemon = async () => {
    const res = await getDataPokemon(pokemon);
    setpokemonData(res);
  };
  useEffect(() => {
    loadDataPokemon();
  }, []);
  return (
    <>
      {pokemonData && (
        <div className="card">
          <h5>{pokemon.name}</h5>
          <img
            src={
              pokemonData?.sprites.front_default ||
              pokemonData?.sprites.back_default
            }
            alt="image"
          />
          <h5>{pokemonData.types[0].type.name.toUpperCase()}</h5>
          <section>
            {pokemonData.stats.map((stat) => (
              <section key={stat.stat.name}>
                <h5>{stat.stat.name.toUpperCase()}</h5>
                <p>{stat.base_stat}</p>
              </section>
            ))}
          </section>
        </div>
      )}
    </>
  );
};

export default PokeCard;
