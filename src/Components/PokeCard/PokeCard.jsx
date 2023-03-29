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
    <div className="card">
      <h5>{pokemon.name}</h5>
      <img src={pokemonData?.sprites.front_default|| pokemonData?.sprites.back_default} alt="" />
    </div>
  );
};

export default PokeCard;
