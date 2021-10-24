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
        <div
          class="border-2 rounded display: inline-block dark:border-gray-600 hover:bg-blue-200 dark:hover:bg-gray-600 cursor-pointer"
          @click="parentState.pokemonSelecionado = pokemon.Evolve.into[index].capitalize()"
        >
          <img style="display: inline-block" :src="state.evoImg[pokemon.Evolve.into[index]]" />
          {{ pokemon.Evolve.into[index] }} &nbsp;
        </div>
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
  <div>
      <span v-if="evos[pokemon.name]?.current_stage>1">Evolves from 
        <div
          class="border-2 rounded display: inline-block dark:border-gray-600 hover:bg-blue-200 dark:hover:bg-gray-600 cursor-pointer"
          @click="parentState.pokemonSelecionado = state.previousStage.capitalize()"
        >          
          <img style="display: inline-block" :src="state.previousImg" />
          {{ state.previousStage.capitalize() }} &nbsp;
        </div>
      </span>
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

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

import axios from "axios";
import { reactive, defineProps, toRefs } from "vue";

const state = reactive({
  evoImg: {},
  previousStage: "",
  previousImg: ""
});

const props = defineProps({
  pokemon: Object,
  evos: Object,
  parentState: Object
});

const { pokemon } = toRefs(props);
const { evos } = toRefs(props);

function getEvoImg(pokenome) {
  if(pokenome === "Mr. Mime"){ pokenome = 'mr-mime'};
  let urlzao = `https://pokeapi.co/api/v2/pokemon/` + pokenome.toLowerCase();
  return axios
    .get(urlzao)
    .then(function (response) {
      let ender =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/" +
        response.data.id +
        ".png";
      return ender;
    })
    .catch(function (error) {
      console.log(error);
    });
}

const init = async () => {
  if (pokemon.value.Evolve?.into) {
    for (const evolution of pokemon.value.Evolve.into) {
      state.evoImg[evolution] = await getEvoImg(evolution);
    }
  }  
  if(evos.value[pokemon.value.name]?.current_stage>1){
    let temp = await getPreviousStage(pokemon.value.name);     
    state.previousImg = await getPreImg(temp);

    if (temp === 'mime-jr') { temp = 'Mime Jr.'} //uh, provisory
      state.previousStage = temp;
  }
};

function getPreviousStage(pokenome) {
  if(pokenome === "Mr. Mime"){ pokenome = 'mr-mime'};
  let urlzao = `https://pokeapi.co/api/v2/pokemon-species/` + pokenome.toLowerCase();
  return axios
    .get(urlzao)
    .then(function (response) {                    
      return response.data.evolves_from_species.name;
    })
    .catch(function (error) {
      console.log(error);
    });    
}

function getPreImg(pokenome) {
  if(pokenome === "Mr. Mime"){ pokenome = 'mr-mime'};
  let urlzao = `https://pokeapi.co/api/v2/pokemon/` + pokenome.toLowerCase();
   return axios
    .get(urlzao)
    .then(function (response) {
      return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/" +
        response.data.id +
        ".png";      
    })
    .catch(function (error) {
      console.log(error);
    });
}
init();
</script>

