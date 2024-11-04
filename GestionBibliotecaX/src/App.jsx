// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./estilosComponentes/NavBar";
import Inicio from './estilosComponentes/Inicio';
import Colecciones from './estilosComponentes/Colecciones';
import AcercaDe from './estilosComponentes/AcercaDe';
import Biblioteca from './estilosComponentes/Biblioteca';

const App = () => {
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

export default App;
