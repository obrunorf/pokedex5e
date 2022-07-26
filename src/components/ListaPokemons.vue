<template>
  <div>    
    <input
      type="text"
      v-model="state.searchPkmn"
      class="col-span-9 border p-2 m-3 w-11/12 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-900"
      placeholder="pokemon name, type or SR..."
    />
  </div>
  <div class="overflow-y-auto p-2" style="height: 93vh">
    <div class="space-y-4">
      <div
        class="grid grid-cols-3 max-w-md mx-auto hover:bg-blue-200 dark:hover:bg-gray-600 rounded-lg overflow-hidden auto-cols-min cursor-pointer"
        v-for="pokemon in filtrar(state.searchPkmn)"
        v-bind:key="pokemon.name"
        @click="parentState.pokemonSelecionado = pokemon.name"
      >
        <div class="p-2">
          <div>#{{ numero_apenas(pokemon.number) }}</div>
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

for (let i = 1; i < Object.keys(pokemons).length; i++) {
  let num = 0; 
  if (pokemons[i] !== undefined) {
    if (pokemons[i][1] !== undefined){num=pokemons[i][1]}else{num=i};
    var p = {      
      number: num,
      name: pokemons[i][0],
      type: filtros[pokemons[i][0]].Type,
      sr: filtros[pokemons[i][0]].SR,
    };
    pokemonsGlobal.push(p);
  }
  //console.log(pokemons[i][0]);
}
pokemonsGlobal.sort((a, b) => (numero_apenas(a.number) > numero_apenas(b.number)) ? 1 : -1 );

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

function numero_apenas(numero){ 
  return +String(numero).split('-')[0];
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
  background: hsla(0, 0%, 97%, 0);
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
