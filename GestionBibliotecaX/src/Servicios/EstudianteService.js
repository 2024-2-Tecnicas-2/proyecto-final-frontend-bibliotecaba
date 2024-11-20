import axios from "axios";

let USUARIO_BASE_REST_API_URL = "http://localhost:8080/api/v1/estudiantes";

class EstudianteService{

    getAllEstudiante(){
        return axios.get(USUARIO_BASE_REST_API_URL)
    }

    createEstudiante(estudiante){
        return axios.post(USUARIO_BASE_REST_API_URL,estudiante)
    }
    updateEstudiante(idEstudiante){
        return axios.put(USUARIO_BASE_REST_API_URL+'/'+idEstudiante)
    }
    deleteEstudiante(idEstudiante){
        return axios.delete(USUARIO_BASE_REST_API_URL+'/'+idEstudiante)
    }

}
    export default new  EstudianteService();