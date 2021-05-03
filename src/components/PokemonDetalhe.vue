<template>
  <div v-if="!pokemon">
    <h1>Nenhum pokemão selecionado!</h1>
  </div>
  <div v-else>
    <h1>{{ pokemon.name }}</h1>
  </div>
</template>

<script setup>
import PokemonTipo from "./PokemonTipo.vue";

import { defineProps } from 'vue'
defineProps({
  pokemon: Object
})
</script>

<style scoped>
</style>
