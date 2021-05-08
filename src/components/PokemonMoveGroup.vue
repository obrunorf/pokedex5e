<template>
  <div class="space-y-0.5">
    <div v-for="moveIn in pokemonMoveList" v-bind:key="moveIn">
      <PokemonMove :pokeMoves="pokeMoves" :moveIn="getMoveByName(moveIn, pokeMoves)" tm="tm" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";
import PokemonMove from "./PokemonMove.vue";

function getMoveByName(nameIn, pokeMoves) {
  return pokeMoves.find(
      (m) => m.name === nameIn
        );
}

defineProps({
  pokemonMoveList: Object,
  pokeMoves: Object  
});
</script>