<template>
    
</template>

<script setup>
import PokemonTipo from './PokemonTipo.vue'

import pokemonsImportados from "../data/pokemons_combinado_completo.json";
console.log(pokemonsImportados);
if (pokemonProp != undefined) { 
pokemonImportado = pokemonsImportados.find(p => p.name === pokemonProp)};

const pokemon = {
    name: p.name,
    // ac: pokemonImportado.AC,
    // abilities: pokemonImportado.Abilities,
    // hp: pokemonImportado.HP,
    // hiddenAbility: pokemonImportado["Hidden Ability"],
    // minLvlFnd: pokemonImportado["MIN LVL FD"],
    type: pokemonImportado.Type
};


import { defineProps, reactive } from "vue";
defineProps({
  pokemonProp: String,
});
</script>




<style scoped>
a {
  color: #42b983;
}
</style>
