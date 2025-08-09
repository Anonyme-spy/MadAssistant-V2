import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import Contacts from "./Pages/Contacts.jsx";
import Avantages from "./Pages/Avantages.jsx";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/option" element={<h1>About Page</h1>} />
        <Route path="/avantages" element={<Avantages />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
