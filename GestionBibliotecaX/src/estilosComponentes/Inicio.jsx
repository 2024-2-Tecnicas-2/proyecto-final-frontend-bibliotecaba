import React from 'react';
import './Inicio.css';

function Inicio() {
    const libroReciente = {
        nombre: 'Libro Destacado',
        genero: 'Fantasía',
        imagen: 'https://via.placeholder.com/400x200?text=Libro+Destacado',
    };

    return (
        <div className="inicio">
            <h1>Inicio</h1>
            <div className="libro-reciente">
                <img 
                    src={libroReciente.imagen} 
                    alt={libroReciente.nombre} 
                    className="libro-imagen" 
                />
                <div className="libro-info">
                    <h2>{libroReciente.nombre}</h2>
                    <p>Género: {libroReciente.genero}</p>
                </div>
            </div>
        </div>
    );
}

export default Inicio;
