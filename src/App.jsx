import "./App.css";
import { Outlet } from "react-router-dom";
import { UserContextProvider } from "./Context/UserContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Outlet></Outlet>
      </UserContextProvider>
    </div>
  );
}

export default App;
