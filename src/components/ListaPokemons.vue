<template>
  <div>
    <input
      type="text"
      v-model="state.searchPkmn"
      class="border p-2 m-2 w-4/5"
      placeholder="pokemon name, type or SR..."
    />
  </div>
  <div class="overflow-y-auto" style="max-height: 83vh">
    <div class="space-y-4">
      <div
        class="grid grid-cols-3 max-w-sm rounded overflow-hidden auto-cols-min cursor-pointer"
        v-for="pokemon in filtrar(state.searchPkmn)"
        v-bind:key="pokemon.name"
        @click="parentState.pokemonSelecionado = pokemon.name"
      >
        <div>
          <div>#{{ pokemon.number }}</div>
          <div class="flex justify-center">
            <img
              :src="
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/' +
                pokemon.number +
                '.png'
              "
            />
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
  </div>
</template>

<script setup>
import PokemonTipo from "./PokemonTipo.vue";
import pokemons from "../data/index_order.json";
import filtros from "../data/filter_data.json";
const pokemonsGlobal = [];
import { reactive, defineProps } from "vue";
const state = reactive({ searchPkmn: "" });

for (let i = 0; i < Object.keys(pokemons).length; i++) {
  if (pokemons[i] !== undefined) {
    var p = {
      number: i,
      name: pokemons[i][0],
      type: filtros[pokemons[i][0]].Type,
      sr: filtros[pokemons[i][0]].SR,
    };
    pokemonsGlobal.push(p);
  }
}

function filtrar(pokemonFilter) {
  if (pokemonFilter != "") {
    pokemonFilter = pokemonFilter.toLowerCase();
    const pokemonFilterC =
      pokemonFilter.charAt(0).toUpperCase() + pokemonFilter.slice(1);
    return pokemonsGlobal.filter(
      (p) =>
        p.name.toLowerCase().includes(pokemonFilter) ||
        contemTipo(pokemonFilterC, p.type) ||
        +p.sr === +pokemonFilter
    );
  } else {
    return pokemonsGlobal;
  }
}

function contemTipo(busca, tipos) {
  if (
    tipos[0].includes(busca) ||
    (tipos[1] != undefined && tipos[1].includes(busca))
  )
    return true;
  else return false;
}

defineProps({
  parentState: Object,
});
</script>


<style scoped>
a {
  color: #42b983;
}

/* width */
::-webkit-scrollbar {
  width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f8f8f8;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
