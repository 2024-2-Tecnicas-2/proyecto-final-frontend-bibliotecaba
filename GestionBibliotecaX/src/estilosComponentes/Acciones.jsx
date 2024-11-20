import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Ajuste de la ruta de NavBar
import NavBar from "./NavBar";
import Inicio from "./Inicio";
import Colecciones from "./Colecciones";
import Biblioteca from "./Biblioteca";
import AcercaDe from "./AcercaDe";

const Acciones = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/colecciones" element={<Colecciones />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/acerca" element={<AcercaDe />} />
      </Routes>
    </Router>
  );
};

export default Acciones;

