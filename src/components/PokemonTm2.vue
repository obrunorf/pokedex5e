<template>
  <div>
    <PokemonMoveGroup :pokeMoves="pokemonMoveList"
    :pokemonMoveList="getMovesByTm(tmList,pokemonMoveList)"/>
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";
import PokemonMoveGroup from "./PokemonMoveGroup.vue";

function getMovesByTm(tmList, pokeMoves){    
    let lista =[];
    for (let i = 0; i < tmList.length; i++) {
        lista.push(
            pokeMoves.find(
                (m) => m.tm === tmList[i]
            ).name            
        );
        }
    return lista;    
}

defineProps({
  pokemonMoveList: Object,
  tmList: Array
});

</script>