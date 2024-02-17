import http from "./http.axios";
class serviciosAficiones{
    getAll(){
        return http.get("/Aficiones");
    }
    get(id){
        return http.get(`/Aficiones/${id}`);
    }
   delete(id){
        return http.delete(`/Aficiones/${id}`)
   }
   post(objeto){
    return http.post(`/Aficiones`,objeto)
   }
   findByNombre(nombre){
    return http.get(`/Aficiones?nombre=${nombre}`)
   }
   update(id, aficion){
    return http.put(`/Aficiones/${id}`,aficion)
   }
   findByGeneral(texto){
    return http.get(`/Aficiones?q=${texto}`)
   }
}
export default  new serviciosAficiones();