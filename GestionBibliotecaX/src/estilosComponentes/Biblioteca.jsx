import React from 'react';
import './Biblioteca.css';

function Biblioteca() {
    const libros = [
        { id: 1, autor: 'Libro.autor', genero: 'Aventura' },
        { id: 2, autor: 'Libro.autor ', genero: 'Ciencia Ficción' },
        
    ];

    return (
        <div className="biblioteca">
            <h2 className="biblioteca-titulo">Biblioteca</h2>
            <div className="biblioteca-grid">
                {libros.map((libro) => (
                    <div key={libro.id} className="biblioteca-item">
                        <img 
                            src={`https://via.placeholder.com/150?text=${libro.nombre}`} 
                            alt={libro.nombre} 
                        />
                        <h3>{libro.nombre}</h3>
                        <p>Género: {libro.genero}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Biblioteca;