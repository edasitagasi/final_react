import React, { useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Recipes from "./RecipeAPI/Recipes";
import Training from "./Training";
import Home from "./Home";
import logo from "./assets/logo.png"
import burger from "./assets/burger.png";
import MyFooter from "./MyFooter";
import Login from "./Login";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open)
  }

  return (
    <Router>
    <nav>
      <div className="nav1">
      <img src={logo} alt="dream body" className="logoPng" />
      </div>
      <div className="nav2">
      <button className="btn_menu" onClick={toggleMenu}><img src={burger} alt="burger" /></button>
        <div className={`nav2_mobile ${isOpen ? "is-open" : ""}`}>
      <Link to="/" className="link">Home</Link>
      <Link to="/recipes" className="link">Recipes</Link>
      <Link to="/training" className="link">Training</Link>
      <Link to="/login" className="link">Sign in</Link>
      </div>
      </div>
    </nav>

    <Routes>
      <Route path="/recipes" element={<Recipes />}/>
      <Route path="/training" element={<Training />}/>
      <Route path="/login" element={<Login />}/>
    </Routes>
    <MyFooter />
    </Router>



  );
}

export default App;
