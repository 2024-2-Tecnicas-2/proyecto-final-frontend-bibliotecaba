import React, { useState } from "react";

const AddEstudianteComponent = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");

    const saveEstudiante = (e) => {
        e.preventDefault();
        const estudiante = { nombre, apellido, email };
        console.log(estudiante);
       
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <h2 className="text-center mt-3">Registro de clientes</h2>
                        <div className="card-body">
                            <form onSubmit={saveEstudiante}>
                                <div className="form-group mb-3">
                                    <label className="form-label">Nombre</label>
                                    <input
                                        type="text"
                                        placeholder="Digite su nombre"
                                        className="form-control"
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Apellido</label>
                                    <input
                                        type="text"
                                        placeholder="Digite su apellido"
                                        className="form-control"
                                        value={apellido}
                                        onChange={(e) => setApellido(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Digite su email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-success">
                                        Guardar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEstudianteComponent;
