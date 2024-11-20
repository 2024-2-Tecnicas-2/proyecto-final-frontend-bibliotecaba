import React, { useState } from "react";

function LibroCrud() {
    const [libros, setLibros] = useState([]);
    const [nuevoLibro, setNuevoLibro] = useState({ nombre: "", genero: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNuevoLibro({ ...nuevoLibro, [name]: value });
    };

    const crearLibro = () => {
        setLibros([...libros, { ...nuevoLibro, id: Date.now() }]);
        setNuevoLibro({ nombre: "", genero: "" });
    };

    const eliminarLibro = (id) => {
        setLibros(libros.filter((libro) => libro.id !== id));
    };

    const editarLibro = (id, campo, valor) => {
        const librosActualizados = libros.map((libro) =>
            libro.id === id ? { ...libro, [campo]: valor } : libro
        );
        setLibros(librosActualizados);
    };

    return (
        <div>
            <h2>Gestión de Libros</h2>
            <div>
                <input
                    name="nombre"
                    placeholder="Nombre del libro"
                    value={nuevoLibro.nombre}
                    onChange={handleChange}
                />
                <input
                    name="genero"
                    placeholder="Género"
                    value={nuevoLibro.genero}
                    onChange={handleChange}
                />
                <button onClick={crearLibro}>Crear</button>
            </div>
            <ul>
                {libros.map((libro) => (
                    <li key={libro.id}>
                        <span>{libro.nombre} - {libro.genero}</span>
                        <button onClick={() => eliminarLibro(libro.id)}>Eliminar</button>
                        <button
                            onClick={() => editarLibro(libro.id, "nombre", prompt("Nuevo nombre:"))}
                        >
                            Editar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LibroCrud;
///// css? 
