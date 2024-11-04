// src/estilosComponentes/Biblioteca.jsx
import React from 'react';
// En Inicio.jsx


function Biblioteca() {
    const libros = [
        { id: 1, nombre: 'Libro 1', genero: 'Aventura' },
        { id: 2, nombre: 'Libro 2', genero: 'Ciencia Ficción' },
        { id: 3, nombre: 'Libro 3', genero: 'Drama' },
        { id: 4, nombre: 'Libro 4', genero: 'Misterio' },
        { id: 5, nombre: 'Libro 5', genero: 'Romance' },
        { id: 6, nombre: 'Libro 6', genero: 'Historia' }
    ];

    return (
        <div>
            <h2>Biblioteca</h2>
            <div className="grid-libros">
                {libros.map((libro) => (
                    <div key={libro.id} className="libro-item">
                        <h3>{libro.nombre}</h3>
                        <p>Género: {libro.genero}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Biblioteca;
