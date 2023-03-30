import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getPokemonById from "../../utils/getPokemonById";
import "./PokemonDetail.css";

const PokemonDetail = () => {
  const [pokemonData, setpokemonData] = useState(null);
  const { id } = useParams();
  const loadPokemonData = async () => {
    const pokemon = await getPokemonById(id);
    setpokemonData(pokemon);
    console.log(pokemon);
  };
  useEffect(() => {
    loadPokemonData();
  }, []);
  return (
    <>
      {pokemonData && (
        <div className="card">
          <h5>{pokemonData.name}</h5>
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

export default PokemonDetail;
