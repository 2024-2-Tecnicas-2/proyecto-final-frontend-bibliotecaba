import axios from "axios";

let USUARIO_BASE_REST_API_URL = "http://localhost:8080/api/v1/libros";

class LibroService{

    getAllLibro(){
        return axios.get(USUARIO_BASE_REST_API_URL)
    }
    getAllLibroaById(idLibro){
        return axios.get(USUARIO_BASE_REST_API_URL+'/'+idLibro)
        }
    createLibro(libro,){
        return axios.post(USUARIO_BASE_REST_API_URL,libro)
    }
}
    export default new  LibroService();