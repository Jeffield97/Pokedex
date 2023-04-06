import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import './Home.css'
import { stringify } from "postcss";

const Home = () => {
  const navigate = useNavigate();
  const { setuser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    navigate("/pokedex");
    setuser(name);
    localStorage.setItem('Username',name)
  };
  return (
    <>
    <div>
    <img src="https://imgs.search.brave.com/2moAtPlIYp6KmT3DgD2tbiEqH0unzgVL3Z_Qs463wWk/rs:fit:300:145:1/g:ce/aHR0cDovL3BuZ2lt/Zy5jb20vdXBsb2Fk/cy9wb2tlbW9uX2xv/Z28vcG9rZW1vbl9s/b2dvX1BORzYucG5n" alt="" className="mx-auto"/>
    </div>
      <h1 className="text-6xl m-10  text-shadow">POKEDEX</h1>
      <h3 className="md:text-6xl lg:text-6xl  m-10 text-shadow">!Hola entrenador!</h3>
      <h3 className="text-3xl text-shadow2">Para poder continuar escribe tu nombre</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block lg:w-1/6 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-auto my-5 text-2xl md:w-4/5"/>
        <button className="btn btn-md btn-primary text-lg">Comenzar</button>
      </form>
    </>
  );
};

export default Home;
