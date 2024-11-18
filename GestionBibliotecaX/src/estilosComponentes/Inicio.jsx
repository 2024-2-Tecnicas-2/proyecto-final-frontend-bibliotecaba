// src/components/Inicio.jsx
import React, { useEffect, useState } from 'react';
import './Inicio.css';

const Inicio = () => {
  const [libroReciente, setLibroReciente] = useState(null);

  useEffect(() => {
    // Aquí harías la consulta a la base de datos para obtener el libro más reciente
    const obtenerLibroReciente = async () => {
      const response = await fetch('/api/libros/reciente'); // URL de ejemplo
      const data = await response.json();
      setLibroReciente(data);
    };
    obtenerLibroReciente();
  }, []);

  return (
    <div className="inicio">
      <h1>Libros Recientes</h1>
      {libroReciente ? (
        <div className="libro-reciente">
          <img src={libroReciente.imagen} alt={libroReciente.nombre} className="libro-imagen" />
          <div className="libro-info">
            <h2>{libroReciente.nombre}</h2>
            <p>Género: {libroReciente.genero}</p>
          </div>
        </div>
      ) : (
        <p>Cargando libro reciente...</p>


      )}
      <h1>Recomendados del mes</h1>
      {libroReciente ? (
        <div className="libro-reciente">
          <img src={libroReciente.imagen} alt={libroReciente.nombre} className="libro-imagen" />
          <div className="libro-info">
            <h2>{libroReciente.nombre}</h2>
            <p>Género: {libroReciente.genero}</p>
          </div>
        </div>
      ) : (
        <p>Cargando libros del mes...</p>
      )}

      <h1>Lo mas visto</h1>
      {libroReciente ? (
        <div className="libro-reciente">
          <img src={libroReciente.imagen} alt={libroReciente.nombre} className="libro-imagen" />
          <div className="libro-info">
            <h2>{libroReciente.nombre}</h2>
            <p>Género: {libroReciente.genero}</p>
          </div>
        </div>
      ) : (
        <p>Cargando libros mas vistos...</p>
      )}
    </div>
  );
};

export default Inicio;
