import axios from "axios";

const getPokemonById = async (id) => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.data;
  return data;
};
export default getPokemonById;
