<template>
  <div v-if="pokemon.Evolve" class="tracking-tight">
    <!-- evolveable pkmn !-->
    <div>
      <span class="font-bold">Stage:</span>
      {{
        getPkmnStage(pokemon.Evolve.current_stage, pokemon.Evolve.total_stages)
      }}
    </div>
    <div>
      <span v-if="pokemon.Evolve.into" class="font-bold">Evolve: </span>
      <span v-for="(into, index) in pokemon.Evolve.into" v-bind:key="into">
        {{ pokemon.name }} can evolve into
        {{getEvoImg(pokemon.Evolve.into[index])}}
        <img style="display: inline-block" :src="state.evoImg[index]" />        
        {{ pokemon.Evolve.into[index] }}
        <span v-if="pokemon.Evolve.level">
          at <span class="font-bold">level {{ pokemon.Evolve.level }}</span> and
          above.
        </span>
        <span v-if="pokemon.Evolve.move">
          at the time it learns
          <span class="font-bold"> {{ pokemon.Evolve.move }}.</span>
        </span>
        <span v-if="pokemon.Evolve.requires">
          <span v-if="pokemon.Evolve.requires[index] != ''">
            Requires {{ pokemon.Evolve.requires[index] }}.</span
          >
        </span>
        <br />
      </span>
      When it evolves, its health increases by double its level, and it gains
      <span class="font-bold">{{ pokemon.Evolve.points }} points</span> to add
      to its ability scores (max 20 before Nature).
    </div>
  </div>
  <div v-else-if="evos[pokemon.name]">
    <!-- fully evolved pkmn !-->
    <span class="font-bold">Stage: </span>
    {{
      getPkmnStage(
        evos[pokemon.name].current_stage,
        evos[pokemon.name].total_stages
      )
    }}
  </div>
  <div v-else>
    <span class="font-bold">Stage: </span> <span>1/1 | 4 ASI</span>
  </div>
</template>

<script setup>
function getPkmnStage(current_stage, total_stages) {
  return (
    current_stage + "/" + total_stages + " | " + getAsi(total_stages) + " ASI"
  );
}
function getAsi(total_stages) {
  switch (total_stages) {
    case 1:
      return 4;
    case 2:
      return 3;
    case 3:
      return 2;
  }
}

function getLastStageStage(name) {
  //get the stage of fully evolved pokemon
}

import axios from "axios";
import { reactive } from "vue";

const state = reactive({
  evoImg: [],
});

function getEvoImg(pokenome) {
  let urlzao = `https://pokeapi.co/api/v2/pokemon/` + pokenome.toLowerCase();
  axios
    .get(urlzao)
    .then(function (response) {
      let ender = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/" +
          response.data.id +
          ".png";
      //state.evoImg.push(ender);
      if (state.evoImg.indexOf(ender) === -1){state.evoImg.push(ender)};
      state.evoImg.sort();
      //console.log(state.evoImg);
      //alert (response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
import { defineProps } from "vue";
defineProps({
  pokemon: Object,
  evos: Object,
});
</script>

