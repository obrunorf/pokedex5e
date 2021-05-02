<template>
  <div>
    <li v-for="(name, number) in pokemonsObj" v-bind:key="number">
      {{ number }} - {{ name }}</li>
  </div>
</template>

<script>
import pokemons from "../data/index_order.json";
export default {
  data() {
    return {
      pokemons: MY_JSON,
    };
  },
};
console.log(pokemons);

let pokemonsObj = [{}];

for (let i = 0; i < Object.keys(pokemons).length; i++) {
  if (pokemons[i] !== undefined) {
    var p = {
      number: i + 1,
      name: pokemons[i][0],
    };
    pokemonsObj.push(p);
  }
}
console.log(pokemonsObj);
</script>

<script setup>
import { defineProps, reactive } from "vue";
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
