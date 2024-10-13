import { useState } from "react";
import './App.css';  // Archivo CSS para estilos

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      {/* Barra de navegación */}
      <nav className="navbar">
        <ul>
          <li>Inicio</li>
          <li>Colecciones</li>
          <li>Acerca de</li>
          <li>Biblioteca</li>
          <li>Soporte</li>
          <li>Noticias</li>
          <li>Español</li>
        </ul>
      </nav>

      {/* Sección de portada */}
      <header className="header">
        <div className="overlay">
          <h1>Resumen de Colecciones</h1>
          <p>Explora nuestras colecciones de textos históricos</p>
          <div className="scroll-down">⬇️ Desplázate hacia abajo</div>
        </div>
      </header>

     
    </div>
  );
}

export default App;
