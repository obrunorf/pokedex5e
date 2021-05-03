<template>
  <div v-if="!pokemon">
    <h1>Nenhum pokemão selecionado!</h1>
  </div>
  <div v-else>
    <h1>{{ pokemon.name }}</h1>
    <div><PokemonTipo :types="pokemon.Type" /></div>
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
    <div> AC: {{pokemon.AC}} </div>
    <div class="grid grid-cols-6">
      <div class="row">
        <div>STR</div><div>DEX</div><div>CON</div><div>INT</div><div>WIS</div><div>CHAR</div>
      </div>
      <div class="row">
        <div><PokemonAtributo :attributes="pokemon.attributes"></div>
      </div>
    </div>



  </div>
</template>

<script setup>
import PokemonTipo from "./PokemonTipo.vue";
import PokemonAtributo from "./PokemonAtributo.vue";

import { defineProps } from "vue";
defineProps({
  pokemon: Object,
});
</script>

<style scoped>
</style>
