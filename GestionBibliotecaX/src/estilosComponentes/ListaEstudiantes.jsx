import React, { useState, useEffect } from "react";
import EstudianteService from "../Servicios/EstudianteService";


export const ListaEstudiantes = () => {
    const [estudiantes, setEstudiantes] = useState([]);

useEffect(()  => {
    EstudianteService.getAllEstudiante().then(response => {
        setEstudiantes(response.data);
        console.log(response.data);
 }).catch(error => {
    console.error();
})
},[])





    return (
        <div className='container'>
            <h2 className='text-center'>Lista de estudiantes</h2>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Libro</th>
                        <th>Genero</th>
                        <th>Prestamos</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        estudiantes.map(estudiante =>
                            <tr key={estudiante.id}>
                                <td>{estudiante.id}</td>
                                <td>{estudiante.libro}</td>
                                <td>{estudiante.genero}</td>
                                <td>{estudiante.prestamos}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListaEstudiantes;















