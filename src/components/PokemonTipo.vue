<template>
  <div class="flex">
    <div
      v-for="type in types"
      :key="type"
      class="flex justify-center items-center font-medium py-1 px-2 rounded-full"
      :style="getBackgroundColor(type)"
    >
      {{ type }}
    </div>
  </div>
</template>

<script setup>
function getBackgroundColor(typeName) {
  let marcao;
  let corDaFonte = "#000000";
  switch (typeName) {
    case "Bug":
      marcao = "#A8B820";
      break;
    case "Electric":
      marcao = "#F8D030";
      break;
    case "Fire":
      marcao = "#F08030";
      break;
    case "Grass":
      marcao = "#78C850";
      break;
    case "Normal":
      marcao = "#A8A878";
      break;
    case "Rock":
      marcao = "#B8A038";
      break;
    case "Dark":
      marcao = "#705848";
      corDaFonte = "#FFFFFF";
      break;
    case "Fairy":
      marcao = "#EE99AC";
      break;
    case "Flying":
      marcao = "#A890F0";
      break;
    case "Poison":
      marcao = "#A040A0";
      corDaFonte = "#FFFFFF";
      break;
    case "Water":
      marcao = "#6890F0";
      break;
    case "Ice":
      marcao = "#98D8D8";
      break;
    case "Fighting":
      marcao = "#C03028";
      corDaFonte = "#FFFFFF";
      break;
    case "Ground":
      marcao = "#E0C068";
      break;
    case "Psychic":
      marcao = "#F85888";
      break;
    case "Dragon":
      marcao = "#7038F8";
      corDaFonte = "#FFFFFF";
      break;
    case "Ghost":
      marcao = "#705898";
      corDaFonte = "#FFFFFF";
      break;
    case "Steel":
      marcao = "#B8B8D0";
      break;
  }
  return {
    background: marcao,
    color: corDaFonte,
  };
}

import { defineProps, reactive } from "vue";
defineProps({
  types: Array,
});
</script>


<style scoped>
a {
  color: #42b983;
}
</style>
