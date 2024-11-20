import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import LibroService from '../Servicios/LibroService';

const EditarLibro = () => {
    const { idLibro } = useParams();  // Obtener el idLibro de la URL
    const history = useHistory();  // Para redirigir al usuario después de la actualización
    const [libro, setLibro] = useState({
        nombre: '',
        autor: '',
        year: '',
        stock: ''
    });

    useEffect(() => {
        // Obtener el libro con el idLibro
        LibroService.getLibroNombre(idLibro)
            .then(response => {
                setLibro(response.data);  // Cargar los datos del libro
            })
            .catch(error => {
                console.error('Error al obtener el libro:', error);
            });
    }, [idLibro]);

    const handleChange = (e) => {
        setLibro({
            ...libro,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Actualizar el libro
        LibroService.updateLibro(idLibro, libro)
            .then(response => {
                alert('Libro actualizado con éxito');
                history.push('/libros');  // Redirigir a la lista de libros
            })
            .catch(error => {
                console.error('Error al actualizar el libro:', error);
                alert('Error al actualizar el libro');
            });
    };

    return (
        <div className="container">
            <h2>Editar Libro</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nombre del Libro</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nombre"
                        value={libro.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Autor</label>
                    <input
                        type="text"
                        className="form-control"
                        name="autor"
                        value={libro.autor}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Fecha de Publicación</label>
                    <input
                        type="number"
                        className="form-control"
                        name="year"
                        value={libro.year}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Stock</label>
                    <input
                        type="number"
                        className="form-control"
                        name="stock"
                        value={libro.stock}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Actualizar</button>
            </form>
        </div>
    );
};

export default EditarLibro;
