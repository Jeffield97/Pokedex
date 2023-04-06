import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getPokemonById from "../../utils/getPokemonById";
import {useNavigate} from "react-router-dom";
import "./PokemonDetail.css";

const PokemonDetail = () => {
  const [pokemonData, setpokemonData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const backToPokedex = () => {
    navigate(`/pokedex`);
  };
  const loadPokemonData = async () => {
    const pokemon = await getPokemonById(id);
    setpokemonData(pokemon);
  };
  
  useEffect(() => {
    loadPokemonData();
  }, []);
  return (
    <>
      {pokemonData && (
        <div className="card overflow-hidden">
          <h5 className="bg-slate-800 text-2xl text-slate-50">{pokemonData.name} <span className="absolute right-5 text-red-500" onClick={backToPokedex}>X</span></h5>
          
          <img
            src={
              pokemonData?.sprites.front_default ||
              pokemonData?.sprites.back_default
            }
            alt="image"
            className="mx-auto w-4/6"
          />
          <h5 className="text-2xl text-slate-300">{pokemonData.types[0].type.name.toUpperCase()}</h5>
          <section className="text-start mx-5 text-xl">
            {pokemonData.stats.map((stat) => (
              <section key={stat.stat.name}>
                <h5 className="text-cyan-500 inline">{`${stat.stat.name.toUpperCase()}: `}</h5>
                <p className=" text-slate-100 inline">{stat.base_stat}</p>
              </section>
            ))}
          </section>
        </div>
      )}
    </>
  );
};

export default PokemonDetail;
