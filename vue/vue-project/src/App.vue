<script setup>

import barraMenu from "./components/menu.vue"

</script>

<template>
  <header>   
      <barraMenu   :links="['inicio','listar','sobrem','inicioSesion']" />

  </header> 
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
</style>
