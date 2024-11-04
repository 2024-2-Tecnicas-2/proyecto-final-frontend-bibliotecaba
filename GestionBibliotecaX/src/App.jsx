import React, { useState } from "react";
import "./App.css"; // Asegúrate de crear y vincular el archivo CSS

const libros = [
  { id: 1, nombre: "Libro 1", genero: "Ficción" },
  { id: 2, nombre: "Libro 2", genero: "Ciencia" },
  { id: 3, nombre: "Libro 3", genero: "Historia" },
  { id: 4, nombre: "Libro 4", genero: "Aventura" },
  { id: 5, nombre: "Libro 5", genero: "Terror" },
  { id: 6, nombre: "Libro 6", genero: "Romance" },
];

function App() {
  const [mostrarBiblioteca, setMostrarBiblioteca] = useState(false);
  const libroMasReciente = libros[libros.length - 1];

  return (
    <div className="App">
      <header className="navbar">
        <span className="nav-item" onClick={() => setMostrarBiblioteca(false)}>
          Inicio
        </span>
        <span className="nav-item">Colecciones</span>
        <span className="nav-item">Acerca de</span>
        <span className="nav-item" onClick={() => setMostrarBiblioteca(true)}>
          Biblioteca
        </span>
      </header>

      <main>
        {!mostrarBiblioteca ? (
          <section className="libro-reciente">
            <h2>Libros Recientes</h2>
            <div className="libro-detalle">
              <h3>{libroMasReciente.nombre}</h3>
              <p>Género: {libroMasReciente.genero}</p>
            </div>
          </section>
        ) : (
          <section className="biblioteca">
            <h2>Biblioteca</h2>
            <div className="libros-grid">
              {libros.map((libro) => (
                <div key={libro.id} className="libro-card">
                  <h3>{libro.nombre}</h3>
                  <p>Género: {libro.genero}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
