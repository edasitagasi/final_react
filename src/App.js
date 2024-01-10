import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Recipes from "./Recipes";
import Training from "./Training";
import Support from "./Support";
import Home from "./Home";
import logo from "./logo.jpg"

function App() {
  return (
    <Router>
    <nav>
      <div className="nav1">
      <img src={logo} alt="dream body" className="logoPng" />
      </div>
      <div className="nav2">
      <Link to="/home" className="link">Home</Link>
      <Link to="/recipes" className="link">Recipes</Link>
      <Link to="/training" className="link">Training</Link>
      <Link to="/support" className="link">Support</Link>
      </div>
    </nav>

    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/recipes" element={<Recipes />}/>
      <Route path="/training" element={<Training />}/>
      <Route path="/support" element={<Support />}/>

    </Routes>
    </Router>
  );
}

export default App;
