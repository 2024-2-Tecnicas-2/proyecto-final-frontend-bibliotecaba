import React, { useState, useEffect } from "react";
import LibroService from "../Servicios/LibroService";


export const ListaLibro = () => {
    const [libro, setLibro] = useState([]);

useEffect(()  => {
    LibroService.getAllLibro().then(response => {
        setLibro(response.data);
        console.log(response.data);
 }).catch(error => {
    console.error();
})
},[])





    return (
        <div className='container'>
            <h2 className='text-center'>Lista de libros</h2>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre libro</th>
                        <th>Nombre author</th>
                        <th>Fecha</th>
                        <th>Stock</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        libro.map(libros =>
                            <tr key={libros.id}>
                                <td>{libros.idLibro}</td>
                                <td>{libros.nombre}</td>
                                <td>{libros.autor}</td>
                                <td>{libros.year}</td>
                                <td>{libros.stock}</td>
                                <th><button style= {{ marginLeft: "10px"}} className="btn btn-danger" onClick={()=> deleteLibro(idLibro)}>eliminar</button></th>
                                
                                <th><button style= {{ marginLeft: "10px"}} className= "btn btn-danger" to={ `/edit-libro/${idlibro}`}>Actualizar</button></th>
                                <th><button  style={{ marginLeft: "10px" }} className="btn btn-primary" to={`/edit-genero/${idGenero}`}> Actualizar </button></th>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListaLibro;















