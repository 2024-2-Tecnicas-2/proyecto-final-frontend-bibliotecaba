import axios from "axios";

let USUARIO_BASE_REST_API_URL = "http://localhost:8080/api/v1/prestamos";

class PrestamoService{

    getAllPrestamo(){
        return axios.get(USUARIO_BASE_REST_API_URL)
    }
    getAllPrestamoIdEstudiante(idEstudiante){
        return axios.get(USUARIO_BASE_REST_API_URL+'/'+idEstudiante)
    }
    createPrestamo(prestamo){
        return axios.post(USUARIO_BASE_REST_API_URL,prestamo)
    }
    deletePrestamo(idPrestamo){
        return axios.delete(USUARIO_BASE_REST_API_URL+'/'+idPrestamo)
    }
}
    export default new  PrestamoService();