import React, { useContext, useState, useEffect } from "react";
import PokeCard from "../../Components/PokeCard/PokeCard";
import { UserContext } from "../../Context/UserContext";
import { usePagination } from "../../hooks/usePagination";
import { getData } from "../../utils/getData";

const Pokedex = () => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);
  const pokemonPagination = usePagination(data, 5);
  const loadData = async () => {
    const res = await getData();
    setData(res.results);
    console.log(res.results);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <h3>Bienvenido {user}, aquí podrás encontrar tu pokemon favorito.</h3>
      <div>
        {pokemonPagination.pages.map((page) => (
          <button key={page} onClick={()=>pokemonPagination.changePageTo(page)}>{page}</button>
        ))}
      </div>
      {pokemonPagination.listSlice?.map((pokemon) => (
        <PokeCard pokemon={pokemon} key={pokemon.name}></PokeCard>
      ))}
    </>
  );
};

export default Pokedex;
