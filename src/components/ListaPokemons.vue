<template>
  <div>
    <li v-for="(pokemon) in pokemonsGlobal" v-bind:key="pokemon" class="flex"
    >
      {{ pokemon.number }} - {{ pokemon.name }} - <PokemonTipo :types="pokemon.type"/> - SR: {{ pokemon.sr }}</li>
  </div>
</template>

<script setup>
import PokemonTipo from './PokemonTipo.vue'
import pokemons from "../data/index_order.json";
import filtros from "../data/filter_data.json";
const pokemonsGlobal = [];

for (let i = 0; i < Object.keys(pokemons).length; i++) {
  if (pokemons[i] !== undefined) {
    var p = {
      number: i,
      name: pokemons[i][0],
      type: filtros[pokemons[i][0]].Type,
      sr: filtros[pokemons[i][0]].SR    
    };
    pokemonsGlobal.push(p);
  }
}

</script>




<style scoped>
a {
  color: #42b983;
}
</style>
