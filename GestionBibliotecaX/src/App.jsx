import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Componentes principales
import NavBar from "./estilosComponentes/NavBar";
import Inicio from "./estilosComponentes/Inicio";
import Colecciones from "./estilosComponentes/Colecciones";
import AcercaDe from "./estilosComponentes/AcercaDe";
import Biblioteca from "./estilosComponentes/Biblioteca";

// Componente Acciones
import Acciones from "./estilosComponentes/Acciones";

// Componentes CRUD
import LibroCrud from "./estilosComponentes/LibroCrud";
import GeneroCrud from "./estilosComponentes/GeneroCrud";
import EstudianteCrud from "./estilosComponentes/EstudianteCrud";


function App(){
return (

<div>
<ListaUsuarioComponente />

</div>

);

}

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

        {/* Ruta de Acciones */}
        <Route path="/Acciones" element={<Acciones />} />

        {/* Rutas CRUD */}
        <Route path="/libros" element={<LibroCrud />} />
        <Route path="/generos" element={<GeneroCrud />} />
        <Route path="/estudiantes" element={<EstudianteCrud />} />
      </Routes>
    </Router>
  );
};

export default App;
