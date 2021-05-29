<template>
  <div class="p-3">
    <div
      v-if="pokemon"
      class="my-2 md:hidden cursor-pointer font-bold"
      @click="goBack()"
    >
      ← Go Back
    </div>
    <div class="hidden md:block" v-if="!pokemon">
      <h1>Select a pokemon.</h1>
    </div>
    <div v-else class="leading-tight">
      <div class="grid grid-cols-1 md:grid-cols-2 leading-snug">
        <div class="md:overflow-y-auto md:max-h-96">
          <!-- coluna 1 -->
          <h1 class="text-3xl font-extrabold">
            {{ pokemon.name }} #{{ pokemon.index }}
          </h1>
          <div>
            <span class="font-bold"> Classification:</span>
            {{ pokemon.size }} | <span class="font-bold">SR:</span
            >{{ pokemon.SR }}
          </div>
          <div>
            <span class="font-bold">Minumum Level Found:</span>
            {{ pokemon["MIN LVL FD"] }}
          </div>

          <div class="grid grid-cols-2">
            <div>
              <img
                class="h-48 float-left"
                :src="
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' +
                  pokemon.index +
                  '.png'
                "
              />
            </div>
            <div>
              <PokedexData :pokemon="pokemon" />
            </div>
          </div>
          <div><PokemonTipo :types="pokemon.Type" /></div>
          <div>
            <PokemonAbility
              :abilitiesPoke="pokemon.Abilities"
              :hidden="getHiddenAbility(pokemon)"
              :abilities_file="abilities"
            />
          </div>
          <div><PokemonSpeeds :pokemon="pokemon" /></div>
          <div><PokemonSenses :pokemon="pokemon" /></div>
          <div>
            <span class="font-bold">Armor Class:</span> {{ pokemon.AC }}
          </div>
          <div>
            <span class="font-bold">Hit Points:</span> {{ pokemon.HP }} |
            <span class="font-bold">Hit Dice</span> d{{ pokemon["Hit Dice"] }}
          </div>
          <div><PokemonAtributo :attributes="pokemon.attributes" /></div>
          <div><PokemonSkillsSaves :pokemon="pokemon" /></div>
          <div><TypeRelations :types="pokemon.Type" /></div>
          <div><PokemonEvolution :pokemon="pokemon" :evos="evos" /></div>
        </div>
        <!-- fim da coluna 1 -->
        <!-- coluna 2 moves -->
        <div class="md:overflow-y-auto md:max-h-96">
          <div v-if="pokemon.Moves['Starting Moves']">
            <span class="font-semibold text-lg cursor-pointer"
              ><div
                class="pl-3 p-3 hover:bg-blue-200 dark:hover:bg-gray-600 rounded-lg"
                @click="state.showLv1 = !state.showLv1"
              >
                > Starting Moves
              </div></span
            >
            <div v-if="state.showLv1">
              <PokemonMoveGroup
                :pokeMoves="pokeMoves"
                :pokemonMoveList="pokemon.Moves['Starting Moves']"
              />
            </div>
          </div>
          <div v-if="pokemon.Moves.Level['2']">
            <span class="font-semibold text-lg"
              ><div
                class="pl-3 p-3 cursor-pointer hover:bg-blue-200 dark:hover:bg-gray-600 rounded-lg"
                @click="state.showLv2 = !state.showLv2"
              >
                > Level 2
              </div></span
            >
            <div v-if="state.showLv2">
              <PokemonMoveGroup
                :pokeMoves="pokeMoves"
                :pokemonMoveList="pokemon.Moves.Level['2']"
              />
            </div>
          </div>
          <div v-if="pokemon.Moves.Level['6']">
            <span class="font-semibold text-lg"
              ><div
                class="pl-3 p-3 cursor-pointer hover:bg-blue-200 dark:hover:bg-gray-600 rounded-lg"
                @click="state.showLv6 = !state.showLv6"
              >
                > Level 6
              </div></span
            >
            <div v-if="state.showLv6">
              <PokemonMoveGroup
                :pokeMoves="pokeMoves"
                :pokemonMoveList="pokemon.Moves.Level['6']"
              />
            </div>
          </div>
          <div v-if="pokemon.Moves.Level['10']">
            <span class="font-semibold text-lg"
              ><div
                class="pl-3 p-3 cursor-pointer hover:bg-blue-200 dark:hover:bg-gray-600 rounded-lg"
                @click="state.showLv10 = !state.showLv10"
              >
                > Level 10
              </div></span
            >
            <div v-if="state.showLv10">
              <PokemonMoveGroup
                :pokeMoves="pokeMoves"
                :pokemonMoveList="pokemon.Moves.Level['10']"
              />
            </div>
          </div>
          <div v-if="pokemon.Moves.Level['14']">
            <span class="font-semibold text-lg"
              ><div
                class="pl-3 p-3 cursor-pointer hover:bg-blue-200 dark:hover:bg-gray-600 rounded-lg"
                @click="state.showLv14 = !state.showLv14"
              >
                > Level 14
              </div></span
            >
            <div v-if="state.showLv14">
              <PokemonMoveGroup
                :pokeMoves="pokeMoves"
                :pokemonMoveList="pokemon.Moves.Level['14']"
              />
            </div>
          </div>
          <div v-if="pokemon.Moves.Level['18']">
            <span class="font-semibold text-lg"
              ><div
                class="pl-3 p-3 cursor-pointer hover:bg-blue-200 dark:hover:bg-gray-600 rounded-lg"
                @click="state.showLv18 = !state.showLv18"
              >
                > Level 18
              </div></span
            >
            <div v-if="state.showLv18">
              <PokemonMoveGroup
                :pokeMoves="pokeMoves"
                :pokemonMoveList="pokemon.Moves.Level['18']"
              />
            </div>
          </div>

          <div v-if="pokemon.Moves.egg">
            <span
              class="font-semibold text-lg cursor-pointer"
              @click="state.showEggM = !state.showEggM"
              ><div class="pl-3 p-3 hover:bg-blue-200 dark:hover:bg-gray-600 rounded-lg">
                > Egg Moves
              </div></span
            >
            <div v-if="state.showEggM">
              <PokemonMoveGroup
                :pokeMoves="pokeMoves"
                :pokemonMoveList="pokemon.Moves.egg"
              />
            </div>
          </div>

          <div v-if="pokemon.Moves.TM">
            <span
              class="font-semibold text-lg cursor-pointer"
              @click="state.showTM = !state.showTM"
              ><div class="pl-3 p-3 hover:bg-blue-200 dark:hover:bg-gray-600 rounded-lg">
                > TM's
              </div></span
            >
            <div v-if="state.showTM">
              <PokemonTm2
                :pokemonMoveList="pokeMoves"
                :tmList="pokemon.Moves.TM"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PokemonTipo from "./PokemonTipo.vue";
import PokemonAtributo from "./PokemonAtributo.vue";
import PokemonAbility from "./PokemonAbility.vue";
import PokemonSpeeds from "./PokemonSpeeds.vue";
import PokemonSenses from "./PokemonSenses.vue";
import PokemonSkillsSaves from "./PokemonSkillsSaves.vue";
import PokemonEvolution from "./PokemonEvolution.vue";
import PokemonMoveGroup from "./PokemonMoveGroup.vue";
import PokemonTm2 from "./PokemonTm2.vue";
import TypeRelations from "./TypeRelations.vue";
import PokedexData from "./PokedexData.vue";

import { reactive } from "vue";

const state = reactive({
  showEggM: false,
  showLv1: false,
  showLv2: false,
  showLv6: false,
  showLv10: false,
  showLv14: false,
  showLv18: false,
  showTm: false,
});

function getHiddenAbility(pokemon) {
  return pokemon["Hidden Ability"];
}

import { defineProps } from "vue";
defineProps({
  pokemon: Object,
  abilities: Object,
  evos: Object,
  pokeMoves: Object,
  goBack: Function,
});
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
background: hsla(0, 0%, 97%, 0);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}


</style>
