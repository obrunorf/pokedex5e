<template>
  <div v-if="!pokemon">
    <h1>Nenhum pokemão selecionado!</h1>
  </div>
  <div v-else>
    <h1 class="text-3xl font-extrabold">{{ pokemon.name }} #{{pokemon.index}}</h1>         
    <div><span class="font-bold"> Classification:</span> {{pokemon.size}} | <span class="font-bold">SR:</span>{{pokemon.SR}} </div> 
    <div><span class="font-bold">Minumum Level Found:</span> {{pokemon["MIN LVL FD"]}} </div>  
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
    <div><PokemonTipo :types="pokemon.Type" /></div>
    <div><span class="font-bold">Armor Class:</span> {{pokemon.AC}} </div>          
    <div><span class="font-bold">Hit Points:</span> {{pokemon.HP}} | <span class="font-bold">Hit Dice</span> d{{pokemon["Hit Dice"]}}</div>          
        <div><PokemonAtributo :attributes="pokemon.attributes"/></div>
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
