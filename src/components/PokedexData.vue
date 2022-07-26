<template>
  <div class="p-3 text-justify">
    {{ getBichao(pokemon.name) }}
    {{ state.dexEntry }}
  </div>
</template>

<script setup>
import axios from "axios";
import { reactive } from "vue";

const state = reactive({
  dexEntry: "",
});

function getBichao(pokenome) {
  let urlzao =
    `https://pokeapi.co/api/v2/pokemon-species/` + remove_forms(pokenome.toLowerCase());
  axios
    .get(urlzao)
    .then(function (response) {
      state.dexEntry = response.data.flavor_text_entries
        .find((obj) => {
          return obj.language.name === "en";
        })
        .flavor_text.replace(/(\r\n|\n|\r)/gm, " ")
        .replace("", " ");
      //alert (response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function remove_forms(nome){
  if (nome.includes('alolan')){
  return nome.split('alolan ')[1];}

  return nome;
}

import { defineProps } from "vue";
defineProps({
  pokemon: Object,
});
</script>