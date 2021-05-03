<template>
 <h1>State: {{state}}</h1>
  <div class="grid-cols-3">
    <div>
      <lista-pokemons :state="state" />
    </div>
    <div class="col-span-2"></div>
      <pokemon-detalhe v-if="state && state.pokemonSelecionado" :pokemonProp="state.pokemonSelecionado"/>
  </div>
</template>

<script setup>
import ListaPokemons from "./components/ListaPokemons.vue";
import PokemonDetalhe from "./components/PokemonDetalhe.vue";
import { reactive } from 'vue';
const state = reactive({ pokemonSelecionado: undefined })

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
