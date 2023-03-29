import axios from "axios";

export const getDataPokemon = async (pokemon) => {
  try {
    const res = await axios.get(pokemon.url);
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
