<script setup>

import barraMenu from "./components/menu.vue"

</script>

<template>
  <header>   
      <barraMenu   :links="['inicio','listar','sobrem']" />

  </header> 
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
</style>
