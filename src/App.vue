<template>
  <div class="dark:bg-gray-800 dark:text-gray-300">
    <div class="grid grid-cols-1 md:grid-cols-4 font-mono md:ml-10 md:mr-10">
      <div class="md:block" :class="{ hidden: state.pokemonSelecionado }">
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
  </div>

  <a href="#" class="float" @click="darkMode()">
    <i class="fa fa-moon-o my-float" style="font-size:36px;"></i>
  </a>
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

function goBack() {
  state.pokemonSelecionado = undefined;
}

function getPokemon(pokemonName) {
  return pokemonsImportados.find((p) => p.name === pokemonName);
}

console.log(`__________       __              .___               .________       
\\______   \\____ |  | __ ____   __| _/____ ___  ___  |   ____/ ____  
 |     ___/  _ \\|  |/ // __ \\ / __ |/ __ \\\\  \\/  /  |____  \\_/ __ \\ 
 |    |  (  <_> )    <\\  ___// /_/ \\  ___/ >    <   /       \\  ___/ 
 |____|   \\____/|__|_ \\\\___  >____ |\\___  >__/\\_ \\ /______  /\\___  >
                     \\/    \\/     \\/    \\/      \\/        \\/     \\/ 

______________________________________________obrunorf__&__redbaty__
https://github.com/obrunorf/pokedex5e`);

function darkMode() {
  if (localStorage.theme === "light") localStorage.theme = "dark";
  else localStorage.theme = "light";
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

* {
  padding: 0;
  margin: 0;
}

.float {
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 15px;
  right: 15px;
  background-color: #252525;
  color: rgb(172, 172, 172);
  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
}
.my-float{
	margin-top:7px;
}
</style>
