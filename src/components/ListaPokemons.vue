<template>
  <div class="space-y-5">
    <div
      class="grid grid-cols-3 max-w-sm rounded overflow-hidden auto-cols-min cursor-pointer"
      v-for="pokemon in pokemonsGlobal"
      v-bind:key="pokemon"
      @click="state.pokemonSelecionado = pokemon.name"
    >
    
      <div>
        <div>#{{ pokemon.number }}</div>
        <div class="flex justify-center">
          <img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/' + pokemon.number + '.png'"/>
        </div>
      </div>
      <div>
        <div class="flex font-bold">
          <div class="mr-2 flex items-center">{{ pokemon.name }}</div>             
        </div>   
        <div><PokemonTipo :types="pokemon.type" /></div>             
        <div class="flex text-xs">SR: {{ pokemon.sr }}</div>
      </div>
    </div>
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

import { defineProps } from 'vue'
defineProps({
  state: Object
})

</script>




<style scoped>
a {
  color: #42b983;
}
</style>
