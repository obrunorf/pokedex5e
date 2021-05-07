<template>
  <div v-if="pokemon.Senses">
    <span class="font-bold">Senses:</span>
    <span v-for="sense in pokemon.Senses" :key="sense">{{
      getSenseFormatted(sense)
    }}</span>
  </div>
</template>


<script setup>
function getSenseFormatted(sense) {
  let senseNumber = numbersOnly(sense);
  return sense + "(" + Math.floor((senseNumber * 1.5) / 5) + "m)";
}

function numbersOnly(field) {
  return field.replace(/\D/g, "");
}

import { defineProps } from "vue";
defineProps({
  pokemon: Object,
});
</script>