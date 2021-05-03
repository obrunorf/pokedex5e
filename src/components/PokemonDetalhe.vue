<template>
  <div v-if="!pokemon">
    <h1>Nenhum pokemão selecionado!</h1>
  </div>
  <div v-else>
    <h1>{{ pokemon.name }}</h1>

    <div>
      <img       
        class="h-48" 
        :src="
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' +
          pokemon.index +
          '.png'
        "
      />
    </div>
  </div>
</template>

<script setup>
import PokemonTipo from "./PokemonTipo.vue";

import { defineProps } from "vue";
defineProps({
  pokemon: Object,
});
</script>

<style scoped>
</style>
