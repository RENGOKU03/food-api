import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./index.css";
import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";
import Details from "./pages/Details/Details";
import ErrorElement from "./components/ErrorElement";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<Favorites />} path="/favorites"></Route>
          <Route element={<Details />} path="/details/:id"></Route>
          <Route path="*" element={<ErrorElement />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
