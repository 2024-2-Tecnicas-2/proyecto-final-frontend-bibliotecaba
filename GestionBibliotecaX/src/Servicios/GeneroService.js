import axios from "axios";

let USUARIO_BASE_REST_API_URL = "http://localhost:8080/api/v1/Generos";

class GeneroService{

    getAllGeneros(){
        return axios.get(USUARIO_BASE_REST_API_URL)
    }
    createLibro(genero){
        return axios.post(USUARIO_BASE_REST_API_URL,genero)
    }

    deleteGenero(idGenero){
        return axios.delete(USUARIO_BASE_REST_API_URL+'/'+idGenero)
    }
}
    export default new  GeneroService();