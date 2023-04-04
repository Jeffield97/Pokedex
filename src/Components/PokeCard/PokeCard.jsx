import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDataPokemon } from "../../utils/getDataPokemon";
import "./PokeCard.css";

const PokeCard = ({ pokemon }) => {
  const [pokemonData, setpokemonData] = useState(null);
  const navigate = useNavigate();
  const handleClickCard = () => {
    navigate(`/pokemon-detail/${pokemonData.id}`);
  };
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
        <div className="card overflow-hidden" onClick={handleClickCard}>
          <h5 className="bg-slate-800 text-2xl">{pokemon.name}</h5>
          <img
            src={
              pokemonData?.sprites.front_default ||
              pokemonData?.sprites.back_default
            }
            alt="image"
            className="mx-auto w-3/6"
          />
          <h5 className="text-2xl text-slate-300">{pokemonData.types[0].type.name.toUpperCase()}</h5>
          <section className="text-start mx-5 text-xl">
            {pokemonData.stats.map((stat) => (
              <section key={stat.stat.name}>
                <h3 className="text-cyan-500 inline">{`${stat.stat.name.toUpperCase()}: `}</h3>
                <p className=" text-slate-600 inline">{stat.base_stat}</p>
              </section>
            ))}
          </section>
        </div>
      )}
    </>
  );
};

export default PokeCard;
