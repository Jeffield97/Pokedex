import axios from "axios";

const getPokemonByType = async (type) => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
    const data = await res.data;
    // console.log(data.pokemon[0].pokemon)
    return data.pokemon.map(pokeData=>pokeData.pokemon);
  } catch (error) {
    console.log(error);
  }
};
export default getPokemonByType;
