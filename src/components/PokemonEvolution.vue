<template>
  <div v-if="pokemon.Evolve">
    <!-- evolveable pkmn !-->
    <div>
      <span class="font-bold">Stage:</span>
      {{
        getPkmnStage(pokemon.Evolve.current_stage, pokemon.Evolve.total_stages)
      }}
    </div>
    <div>
      <span class="font-bold">Evolve: </span> {{ pokemon.name }} can evolve into
      {{ pokemon.Evolve.into[0] }} at
      <span class="font-bold">level {{ pokemon.Evolve.level }}</span> and above.
      When it evolves, its health increases by double its level, and it gains
      <span class="font-bold">{{ pokemon.Evolve.points }} points</span> to add
      to its ability scores (max 20 discounting Nature and ASI).
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

import { defineProps } from "vue";
defineProps({
  pokemon: Object,
  evos: Object,
});
</script>

