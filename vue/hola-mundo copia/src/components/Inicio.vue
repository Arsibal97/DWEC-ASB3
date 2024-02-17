<script setup>
import { watch,computed,ref } from 'vue'

  // const count = ref(0)
  // defineProps({
  //   msg: {
  //     type: String,
  //     required: true
  //   }
  // })
  // const persona= reactive({
  //   nombre: "",
  //   apellido: "",
  //   dni:""
  // })
    
  //   const ve = ref(true)
  //   const rojito= ref("rojo")
  //   const mensajes= ref("Hazlo dinamico")
  //   const numeros= reactive({
  //     contador:0
  //   })
    
  // function incremento() {
  //   count.value++
  //   numeros.contador++
  // }
  // //const texto= ref("")
  // const texto= reactive({
  //   text:""
  // })
  // function toggle() {
  // if(ve.value){
  //     ve.value=false
  //   }else {
  //     ve.value=true
  //   }
  // }
  // let id = 0

  // const newTodo = ref('')
  // const todos = ref([
  //   { id: id++, text: 'Learn HTML' },
  //   { id: id++, text: 'Learn JavaScript' },
  //   { id: id++, text: 'Learn Vue' }
  // ])
  // function addTodo() {
  // if( persona.dni !=="" && persona.nombre !=="" && persona.apellido !== ""){
  //   toditos.push({ nombre: persona.nombre, apellido: persona.apellido, dni:persona.dni})
  // }else{
  //   alert("wey ya")
  // }

  // }

  // function removeTodo(todo) {
  //   todos.value = todos.value.filter((t) => t !== todo)
  // }
  // function borrar() {
  //   toditos.text="";
  // }
const base = ref("")
const altura= ref("")
const area= computed(()=>{
  let areas =base.value * altura.value
  return areas;
})
const perimetro= computed(()=>{
  let pe =2*base.value +2* altura.value
  if (condition) {
    
  }
  return pe;
})

watch(base,(Nbase,Vbase)=>{
    if(Vbase<0)alert("debe ser positivo wey")
})
</script>

<template>

  <form >
    <input v-model="base">
    <input v-model="altura">
    <p>{{ area }}</p>
    <p>{{ perimetro }}</p>
  </form>cddel="persona.dni">
      <input v-model="persona.apellido">
      <button>Add Todo</button> 
      <button @click.prevent="borrar">reset</button> 
    </form>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
        <button @click="removeTodo(todo)">X</button>
      </li>
    </ul>
    
      <h1>{{ msg }}</h1>
      {{ count }}
    <button @click="incremento">Cunt</button>
    <button @click="toggle">tocame</button>

    <h1 :class="rojito">{{ mensajes }}</h1>
    <p>{{ numeros.contador }}</p>

    <input v-model="texto.text" placeholder="dilo tata">
    <p>{{ texto.text }}</p>

  <p v-if="ve">esto se ve</p>
  <p v-else>no se ve</p>
     -->
</template>

  <style scoped>
  /* <--.rojo{
    color: red;
  } --> */
</style>
