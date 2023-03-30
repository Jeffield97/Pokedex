import axios from "axios";

const getAllType = async () => {
  try {
    const res = await axios.get("https://pokeapi.co/api/v2/type/");
    const data = await res.data;
    return data.results
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default getAllType;
