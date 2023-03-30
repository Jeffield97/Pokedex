import React, { useContext, useState, useEffect } from "react";
import { useLoaderData, Form } from "react-router-dom";
import PokeCard from "../../Components/PokeCard/PokeCard";
import { UserContext } from "../../Context/UserContext";
import { usePagination } from "../../hooks/usePagination";
import "./Pokedex.css";

const Pokedex = () => {
  const { user } = useContext(UserContext);
  const [pokemonName, setpokemonName] = useState("");
  const [pokemonType, setpokemonType] = useState("");
  const { data, types } = useLoaderData();
  const pokemonPagination = usePagination(data, 50);

  const handleChangeInput = (e) => {
    const newText = e.target.value;
    setpokemonName(newText);
    setpokemonType("");
  };
  const handleChangeSelect = (e) => {
    const newType = e.target.value;
    setpokemonType(newType);
    setpokemonName("");
  };
  // useEffect(() => {
  //   loadData();
  //   loadType();
  // }, []);
  return (
    <>
      <h3>Bienvenido {user}, aquí podrás encontrar tu pokemon favorito.</h3>
      <div>
        <Form action="">
          <span>Filter by name </span>
          <input
            type="text"
            name="pokemon_name"
            onChange={handleChangeInput}
            value={pokemonName}
          />
          <select
            name="pokemon_type"
            id=""
            onChange={handleChangeSelect}
            value={pokemonType}
          >
            <option value="" disabled>
              --Select type--
            </option>
            {types.map((type) => (
              <option key={type.name}>{type.name}</option>
            ))}
          </select>
          <button>Search</button>
        </Form>
      </div>
      <div>
        {pokemonPagination.pages.map((page) => (
          <button
            key={page}
            onClick={() => pokemonPagination.changePageTo(page)}
            className={`btn-page ${
              pokemonPagination.currentPage === page ? "bg-current" : ""
            }`}
          >
            {page}
          </button>
        ))}
      </div>
      {pokemonPagination.listSlice?.map((pokemon) => (
        <PokeCard pokemon={pokemon} key={pokemon.name}></PokeCard>
      ))}
    </>
  );
};

export default Pokedex;
