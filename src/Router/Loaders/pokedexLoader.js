import getAllType from "../../utils/getAllTypes";
import { getData } from "../../utils/getData";
import { getDataPokemon } from "../../utils/getDataPokemon";
import getPokemonByType from "../../utils/getPokemonByType";

const wichParameter = (url) => {
  if (!url.search) return "all";
  else if (url.searchParams.get("pokemon_name")) return "name";
  else if (url.searchParams.get("pokemon_type")) return "type";
};
export const pokedexLoader = async ({ request }) => {
  let data = await getData();
  const types = await getAllType();
  const url = new URL(request.url);
  if (wichParameter(url) === "all") {
    return { data, types };
  } else if (wichParameter(url) === "type") {
    const type = url.searchParams.get("pokemon_type");
    data = await getPokemonByType(type);
    // console.log(data)
  } else if (wichParameter(url) === "name") {
    const name = url.searchParams.get("pokemon_name");
    console.log(name);
    data = data.filter((pokemon) => pokemon.name.includes(name.toLowerCase()));
  }

  return { data, types };
};
