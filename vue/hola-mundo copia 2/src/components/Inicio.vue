<script setup>
import { watch,computed,ref } from 'vue'

  
const base = ref("")
const altura= ref("")
const area= computed(()=>{
  let areas =base.value * altura.value
  return areas;
})
const perimetro= computed(()=>{
  let pe =2*base.value +2* altura.value
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
  </form>

    
</template>

  <style scoped>
  /* <--.rojo{
    color: red;
  } --> */
</style>
