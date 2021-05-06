<template>
<div class="p-6">
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
    <div><PokemonAbility :abilitiesPoke="pokemon.Abilities" :hidden="getHiddenAbility(pokemon)" :abilities_file="abilities" /></div>
    <div><span class="font-bold">Armor Class:</span> {{pokemon.AC}} </div>          
    <div><span class="font-bold">Hit Points:</span> {{pokemon.HP}} | <span class="font-bold">Hit Dice</span> d{{pokemon["Hit Dice"]}}</div>          
        <div><PokemonAtributo :attributes="pokemon.attributes"/></div>
  </div>
</div>
</template>

<script setup>
import PokemonTipo from "./PokemonTipo.vue";
import PokemonAtributo from "./PokemonAtributo.vue";
import PokemonAbility from "./PokemonAbility.vue"

function getHiddenAbility(pokemon){
  return pokemon["Hidden Ability"];
}

import { defineProps } from "vue";
defineProps({
  pokemon: Object,
  abilities: Object
});
</script>

<style scoped>
</style>
