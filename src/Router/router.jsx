import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../views/Home/Home";
import Pokedex from "../views/Pokedex/Pokedex";
import ProtectedRoute from "../views/Protected/ProtectedRoute";

export const router = createBrowserRouter([
  {
    element: <App></App>,
    children: [
      { path: "/", element: <Home></Home> },
      {
       
        element: <ProtectedRoute></ProtectedRoute>,
        children: [{ path: "pokedex", element: <Pokedex></Pokedex> }],
      },
    ],
  },
  { path: "*", element: <h1>Not found 404</h1> },
]);
