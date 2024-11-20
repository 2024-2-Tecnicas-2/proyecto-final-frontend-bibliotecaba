import axios from "axios";

let USUARIO_BASE_REST_API_URL = "http://localhost:8080/api/v1/libros";

class LibroService{

    getAllLibro(){
        return axios.get(USUARIO_BASE_REST_API_URL)
    }
    getLibroStock(stock){
        return axios.get(USUARIO_BASE_REST_API_URL+'/stock/'+stock)
    }
    getLibroNombre(nombre){
        return axios.get(USUARIO_BASE_REST_API_URL+'/libro/'+nombre)
    }
    createLibro(libro){
        return axios.post(USUARIO_BASE_REST_API_URL,libro)
    }
    updateLibro(idLibro){
        return axios.put(USUARIO_BASE_REST_API_URL+'/'+idLibro)
    }
    deleteLibro(idLibro){
        return axios.delete(USUARIO_BASE_REST_API_URL+'/'+idLibro)
    }
}
    export default new  LibroService();