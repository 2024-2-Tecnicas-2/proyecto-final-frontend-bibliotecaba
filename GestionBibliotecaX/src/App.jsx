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
      {/* Sección de pestañas */}
      <section className="collections">
        <div className="tabs">
          <button onClick={() => handleTabClick('overview')} className={activeTab === 'overview' ? 'active' : ''}>Resumen de Colecciones</button>
          <button onClick={() => handleTabClick('himalaya')} className={activeTab === 'himalaya' ? 'active' : ''}>Colección del Himalaya</button>
          <button onClick={() => handleTabClick('southAsia')} className={activeTab === 'southAsia' ? 'active' : ''}>Colección del Sur de Asia</button>
          <button onClick={() => handleTabClick('eastAsia')} className={activeTab === 'eastAsia' ? 'active' : ''}>Colección del Este de Asia</button>
        </div>

        {/* Contenido de cada pestaña */}
        <div className="tab-content">
          {activeTab === 'overview' && <p>Resumen de nuestras colecciones...</p>}
          {activeTab === 'himalaya' && <p>Colección de textos y manuscritos del Himalaya...</p>}
          {activeTab === 'southAsia' && <p>Textos históricos y manuscritos del Sur de Asia...</p>}
          {activeTab === 'eastAsia' && <p>Colección de documentos del Este de Asia...</p>}
        </div>
      </section>
     
    </div>
  );
}

export default App;
