import React, { useState, useEffect } from "react";
import GeneroService from "../Servicios/GeneroService";
import EliminarGenero from './EliminarGenero';

export const ListaGenero = () => {
    const [generos, setGeneros] = useState([]);

    useEffect(() => {
        GeneroService.getAllGeneros().then(response => {
            setGeneros(response.data);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    const handleDelete = (idGenero) => {
        setGeneros(generos.filter(g => g.idGenero !== idGenero));
    };

    const handleCreate = (newGenero) => {
        GeneroService.createGenero(newGenero)
            .then(response => {
                setGeneros([...generos, response.data]); 
            })
            .catch(error => {
                console.error('Error al crear el género:', error);
            });
    };

    return (
        <div className="container">
            <h2 className="text-center">Lista de Géneros</h2>
            <button onClick={() => handleCreate({ nombre: 'Nuevo Género' })}>Crear Género</button>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre Genero</th>
                        <th>Genero</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        generos.map(genero =>
                            <tr key={genero.idGenero}>
                                <td>{genero.idGenero}</td>
                                <td>{genero.nombre}</td>
                                <td>
                                    <EliminarGenero idGenero={genero.idGenero} onDelete={handleDelete} />
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ListaGenero;
