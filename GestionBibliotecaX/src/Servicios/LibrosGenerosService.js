import axios from "axios";

let USUARIO_BASE_REST_API_URL = "http://localhost:8080/api/v1/generos";

class LibroGenerosService{

    getAllLibroId(idLibro){
        return axios.get(USUARIO_BASE_REST_API_URL+'/'+idLibro)
    }
    AsignarGenerosLibro(idLibro){
        return axios.post(USUARIO_BASE_REST_API_URL,libro+'/'+idLibro)
    }
  
}
    export default new  LibroGenerosService();