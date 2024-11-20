import React, { useState } from "react";

function EstudianteCrud() {
    const [estudiantes, setEstudiantes] = useState([]);
    const [nuevoEstudiante, setNuevoEstudiante] = useState({ nombre: "", edad: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNuevoEstudiante({ ...nuevoEstudiante, [name]: value });
    };

    const crearEstudiante = () => {
        setEstudiantes([...estudiantes, { ...nuevoEstudiante, id: Date.now() }]);
        setNuevoEstudiante({ nombre: "", edad: "" });
    };

    const eliminarEstudiante = (id) => {
        setEstudiantes(estudiantes.filter((estudiante) => estudiante.id !== id));
    };

    const editarEstudiante = (id, campo, valor) => {
        const estudiantesActualizados = estudiantes.map((estudiante) =>
            estudiante.id === id ? { ...estudiante, [campo]: valor } : estudiante
        );
        setEstudiantes(estudiantesActualizados);
    };

    return (
        <div>
            <h2>Gestión de Estudiantes</h2>
            <div>
                <input
                    name="nombre"
                    placeholder="Nombre del estudiante"
                    value={nuevoEstudiante.nombre}
                    onChange={handleChange}
                />
                <input
                    name="edad"
                    placeholder="Edad"
                    value={nuevoEstudiante.edad}
                    onChange={handleChange}
                />
                <button onClick={crearEstudiante}>Crear</button>
            </div>
            <ul>
                {estudiantes.map((estudiante) => (
                    <li key={estudiante.id}>
                        <span>{estudiante.nombre} - {estudiante.edad} años</span>
                        <button onClick={() => eliminarEstudiante(estudiante.id)}>Eliminar</button>
                        <button
                            onClick={() => editarEstudiante(estudiante.id, "nombre", prompt("Nuevo nombre:"))}
                        >
                            Editar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EstudianteCrud;
