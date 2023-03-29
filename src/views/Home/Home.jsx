import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

const Home = () => {
  const navigate = useNavigate();
  const { setuser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    navigate("/pokedex");
    setuser(name);
  };
  return (
    <>
      <h2>POKEDEX</h2>
      <h3>!Hola entrenador!</h3>
      <h4>Para poder continuar escribe tu nombre</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" id="name" />
        <button>Comenzar</button>
      </form>
    </>
  );
};

export default Home;
