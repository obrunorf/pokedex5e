<template>
  <div v-if="pokemon.WSp">
    <span class="font-bold">Walking: </span
    ><span>{{ formatSpeed(pokemon.WSp) }}</span>
  </div>
  <div v-if="pokemon.Fsp">
    <span class="font-bold">Flying: </span
    ><span>{{ formatSpeed(pokemon.Fsp) }}</span>
  </div>
  <div v-if="pokemon.BSp">
    <span class="font-bold">Burrowing: </span
    ><span>{{ formatSpeed(pokemon.BSp) }}</span>
  </div>
  <div v-if="pokemon.CSp">
    <span class="font-bold">Climbing: </span
    ><span>{{ formatSpeed(pokemon.CSp) }}</span>
  </div>
  <div></div>
    <div v-if="pokemon.Ssp">
    <span class="font-bold">Swimming: </span
    ><span>{{ formatSpeed(pokemon.Ssp) }}</span>
  </div>
  <div></div>
</template>

<script setup>
function formatSpeed(speed) {
  let formated =    
    speed +
    "ft | " +
    Math.floor((speed * 1.5) / 5) +
    "m | " +
    Math.floor(speed / 5) +
    "sq";
  return formated;
}

import { defineProps } from "vue";
defineProps({
  pokemon: Object,
});
</script>

