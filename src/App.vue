<template>
  <div class="grid grid-cols-1 md:grid-cols-4 font-mono md:m-12">
    <div class="md:block" :class="{'hidden': state.pokemonSelecionado}">
      <lista-pokemons :parentState="state" />
    </div>
    <div class="col-span-3">
      <pokemon-detalhe
        :key="state.pokemonSelecionado"
        :pokemon="getPokemon(state.pokemonSelecionado)"
        :abilities="pokemonsAbilities"
        :evos="pokemonsEvos"
        :pokeMoves="pokeMoves"
        :goBack="goBack"
      />
    </div>
  </div>
</template>

<script setup>

import ListaPokemons from "./components/ListaPokemons.vue";
import PokemonDetalhe from "./components/PokemonDetalhe.vue";
import pokemonsImportados from "./data/pokemons_combinado_completo.json";
import pokemonsAbilities from "./data/abilities.json";
import pokemonsEvos from "./data/evolve.json";
import pokeMoves from "./data/pokemons_moves_complete_w_tm.json";
import { reactive } from "vue";

const state = reactive({ pokemonSelecionado: undefined });

function goBack(){
  state.pokemonSelecionado = undefined;
}

function getPokemon(pokemonName) {
   return pokemonsImportados.find(
        (p) => p.name === pokemonName
      );
}

console.log(`__________       __              .___               .________       
\\______   \\____ |  | __ ____   __| _/____ ___  ___  |   ____/ ____  
 |     ___/  _ \\|  |/ // __ \\ / __ |/ __ \\\\  \\/  /  |____  \\_/ __ \\ 
 |    |  (  <_> )    <\\  ___// /_/ \\  ___/ >    <   /       \\  ___/ 
 |____|   \\____/|__|_ \\\\___  >____ |\\___  >__/\\_ \\ /______  /\\___  >
                     \\/    \\/     \\/    \\/      \\/        \\/     \\/ 

______________________________________________obrunorf__&__redbaty__
https://github.com/obrunorf/pokedex5e`);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
