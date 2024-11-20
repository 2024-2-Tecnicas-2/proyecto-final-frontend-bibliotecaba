import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./estilosComponentes/NavBar";
import Inicio from "./estilosComponentes/Inicio";
import Colecciones from "./estilosComponentes/Colecciones";
import AcercaDe from "./estilosComponentes/AcercaDe";
import Biblioteca from "./estilosComponentes/Biblioteca";
import ListaLibro from "./estilosComponentes/ListaLibro";



const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Rutas principales */}
        <Route path="/" element={<Inicio />} />
        <Route path="/colecciones" element={<Colecciones />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/acerca" element={<AcercaDe />} />
        <Route path="/ListaLibro" element={<ListaLibro/>}/>
        
      </Routes>
    </Router>
  );
};
export default App;