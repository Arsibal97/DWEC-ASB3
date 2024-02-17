<script setup>
import { ref , computed , watch, reactive, onUnmounted  } from 'vue'

let largo = ref(0)
let alto = ref(0)
let ancho = ref(0)
let modificado=false;
let visto=true;

const mensajes=reactive({
  largo:"",
  alto:"",
  ancho:""

})

function limpiar() {
    largo.value=0
    alto.value=0
    ancho.value=0
}

//Computed
const perimetro = computed(()=> 2*ancho.value + 2*alto.value);
const area = computed(()=> ancho.value * largo.value);
const volumen = computed(()=>{ 
if(ancho.value==0||largo.value==0|| alto.value==0){
  visto =false
}else{
  visto=true
}
  return ancho.value * largo.value * alto.value
});

//Watcher
watch(alto,(nuevo, antiguo) => {
   if(isNaN(nuevo)) {  
          
    mensajes.alto=`Cuidado!! El caracter ${nuevo} es invalido`
    alto.value=antiguo
    modificado=true    

  }else{
    if(modificado==true){
      modificado=false

    }else{
      mensajes.alto=""
    }   
  }

 });

 watch(ancho,(nuevo, antiguo) => {
   if(isNaN(nuevo)) {
    ancho.value=antiguo  
    
  }
 });
 watch(largo,(nuevo, antiguo) => {
   if(isNaN(nuevo)) {
    largo.value=antiguo   
  }
 });


</script>

<template>
  <form @submit.prevent="limpiar">
    <label> largo
    <input v-model="largo">       
    </label>
    <span class="rojo">{{ mensajes.largo }}</span> 
    
    <label> alto
    <input v-model="alto">    
    </label>
    <span class="rojo">{{ mensajes.alto }}</span>   
    
    <label> ancho
    <input v-model="ancho">
    </label>
    <span class="rojo">{{ mensajes.ancho }}</span>   

    <!-- <button>Add Todo</button>    -->
    <button @click.prevent="limpiar()">Limpiar</button> 
  </form>
  
  <p>Area : {{area}}</p>
  <p>Perímetro : {{perimetro}} </p>  
  <p v-show="visto">Volumen : {{volumen}} </p>  

  
</template>
<style scoped>

  input{
    display: block;
  }
  .rojo{
    color: red;
  }

</style>