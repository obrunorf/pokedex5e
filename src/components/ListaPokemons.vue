<template>
  <div>
    <li v-for="(name, number) in pokemonsGlobal" v-bind:key="number">
      {{ number }} - {{ name }}</li>
  </div>
</template>

<script setup>
import pokemons from "../data/index_order.json";
const pokemonsGlobal = [];

for (let i = 0; i < Object.keys(pokemons).length; i++) {
  if (pokemons[i] !== undefined) {
    var p = {
      number: i + 1,
      name: pokemons[i][0],
    };
    pokemonsGlobal.push(p);
  }
}

</script>




<style scoped>
a {
  color: #42b983;
}
</style>
