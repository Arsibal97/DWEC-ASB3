<script setup>
import { onMounted, reactive, ref } from "vue";
import servicioAficiones from "../servicios/personal/servicioAficiones.js";
    let idSelect=null
    let aficiones = ref(null)
    let muestra2= ref(false)
    let nombre= ref("")
    let texto=ref("")
    let Naficion= reactive({
        nombre:"",
        descripcion:"",
        url:""

    })
   
   function buscarPorTexto(texto) {
    let text = new RegExp(texto);
    obtenerAficiones()
   servicioAficiones
   .findByGeneral(texto).then((respuesta)=>
       {
       
            aficiones.value=aficiones.value.filter(e=> text.test(e.descripcion))
           }
      
        ).catch((error)=>console.log(error ))
   }
    function obtenerAficiones(){
        servicioAficiones.getAll().then(
            (respuesta)=>{
            
                
                aficiones.value = respuesta.data;
                
            }
        ).catch((error)=>console.log(error));

        }
    onMounted(()=>{
        obtenerAficiones();
    })
    function mostrar() {
        
        if (muestra2.value==false){
            
            muestra2.value=true
        }else{
            muestra2.value=false
        }
        
        
    }
    function uptualizar(aficion) {
        servicioAficiones

        .update(idSelect,aficion).then((respuesta)=>
        {
            obtenerAficiones();
            limpiar();
            
    }).catch((error)=>console.log(error)
    )
    }
    function mostrarelemento() {
        servicioAficiones
        .findByNombre(nombre.value).then((respuesta)=>
        {
       
            aficiones.value=respuesta.data
        }).catch((error)=>console.log(error))
    }
    function anadir(aficion) {
        servicioAficiones
        .post(aficion).then(respuesta=>
        {
            aficiones.value.push(respuesta.data)
            limpiar();

        }).catch((error)=>console.log(error))

        
    }
    function crearelemento() {
        anadir(Naficion)
    }
    function BorrarAficion(aficion){
        if (confirm("desea borrarlo")) {

           aficiones.value=aficiones.value.filter((e)=>
            e.id!== aficion.id
           )
        }
        servicioAficiones
        .delete(aficion.id).then((response)=>
        {
            alert("elemento borrado")
        }).catch((error)=> alert("meck"+error))
    }

    function limpiar() {
        Naficion.nombre=""
        Naficion.descripcion=""
        Naficion.url=""
    }
    function mostrardetalle(aficiond) {
        Naficion.nombre=aficiond.nombre
        Naficion.descripcion=aficiond.descripcion
        Naficion.url=aficiond.url
        idSelect=aficiond.id
    }

</script>

<template>
    <div>
        <form>
            <h3>buscar por descripcion</h3>
                <input type="text" v-model="texto" >
                <button @click.prevent="buscarPorTexto(texto)">buscar</button>
        </form>
        <h1>Lista de aficiones</h1>
        <ul>
            <form>
                <h3>buscar nuevo</h3>
                <input type="text" v-model="nombre" >
                <button @click.prevent="mostrarelemento()">anadir</button>
            </form>
            <li v-for="(aficion,id) in aficiones" :key="id">
                <span class="li-nombre" @click="mostrar()">{{ aficion.nombre }}</span>
                <span  class="li-descripcion">{{ aficion.descripcion }}</span><button @click="BorrarAficion(aficion)">X</button><button @click="mostrardetalle(aficion)" >modificar</button><br>
                <img v-show="muestra2" :src="aficion.url" ><br>
            
            </li>
            <form>
                <h3>agregar nuevo elemento</h3>
               nombre  <input type="text" v-model="Naficion.nombre"><br>
                descripcion<input type="text" v-model="Naficion.descripcion"><br>
              url  <input type="text" v-model="Naficion.url"><br>
                <button @click.prevent="crearelemento">anadir</button>
                <button @click.prevent="uptualizar(Naficion)">modicar</button>
            </form>
            <form>
                <h3>buscar por id</h3>
                <input type="text" v-model="idSelect">
                <button @click.prevent="buscarPorId(idSelect)">buscar</button>
            </form>
        

        </ul>
        
        

    </div>
</template>

<style scoped>
  img {
  width: 100px;
  height: 100px;
}

ul {
  list-style-type: none;
}

ul li {
  background-position: 0px 5px;
  background-repeat: no-repeat;
  padding-left: 20px;
}

ul li span.li-nombre {
  display: block;
  width: 30%;
  float: left;
  background-color: lightslategray;
  text-align: center;
}

ul li span.li-descripcion {
  display: block;
  width: 60%;
  float: left;
  text-align: right;
  background-color: lightgray;
  margin-bottom: 1vh;
}

h2 {
  text-align: center;
  font-family: "Bowlby One SC", cursive;
  font-size: 5vw;
  background-color: lightblue;
  margin: 3vh;
}

ul::after {
  content: "";
  clear: both;
  display: table;
}

button {
  padding: 0.375rem 0.75rem;
  border: 1px solid black;
  border-radius: 0.25rem;
  color: black;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
}

button:hover,
button:active,
button:focus {
  color: #fff;
  background-color: black;
}
</style>