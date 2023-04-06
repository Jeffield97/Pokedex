import React, { useContext, useState, useEffect } from "react";
import { useLoaderData, Form, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate()

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
  const handleClickCloseSesion=(e)=>{
    localStorage.removeItem('Username')
    navigate('/')
  }
  
  return (
    <>
    <button className="btn lg:absolute mb-5 left-5 text-blue-400  hover:cursor-pointer hover:text-red-500" onClick={handleClickCloseSesion}>Cerrar sesion</button>
      <h2 className="text-3xl text-slate-50">Bienvenido <span className="text-yellow-300">{user}</span>, aquí podrás encontrar tu pokemon favorito.</h2>
      <div className="my-10 text-xl text-slate-50">
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
            className="mx-5"
          >
            <option value="" disabled>
              --Select type--
            </option>
            {types.map((type) => (
              <option key={type.name}>{type.name}</option>
            ))}
          </select>
          <button className="btn btn-sm bg btn-outline">Search</button>
        </Form>
      </div>
      <div className="text-slate-50">
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
