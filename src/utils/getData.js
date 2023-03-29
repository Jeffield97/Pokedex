import axios from "axios";

export const getData = async () => {
  try {
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=100"
    );
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
