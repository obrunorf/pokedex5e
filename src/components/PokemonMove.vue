<template>
  <div class="border-2 rounded grid grid-cols-2 p-3 dark:border-gray-600">    
    <div v-if="moveIn.tm" class="font-bold font-base col-span-2">TM # {{ moveIn.tm }}</div>
    <span class="font-bold font-base">{{ moveIn.name }}</span>        
    <span class="text-xs tracking-tight leading-3"
      ><PokemonTipo :types="dummy(moveIn.Type)"
    /></span>
    <span class="col-span-2 text-xs">
      {{ moveIn.Description }}
    </span>
    <div class="font-sm">
      <span class="font-bold">Range: </span>
      <span>{{ getRangeM(moveIn.Range) }}</span>
    </div>
    <div class="font-sm">
      <span class="font-bold">PP: </span> <span>{{ moveIn.PP }}</span>
    </div>

    <div class="font-sm">
      <span class="font-bold">Dur.: </span>
      <span>{{ moveIn.Duration }}</span>
    </div>
    <div class="font-sm">
      <span class="font-bold">Time: </span>
      <span>{{ moveIn["Move Time"] }}</span>
    </div>
    <span v-if="moveIn['Move Power']">
      <div class="font-sm">
        <span class="font-bold">Move Power: </span>
        <span v-for="(mp, index) in moveIn['Move Power']" v-bind:key="mp"
          >{{ mp
          }}<span v-if="index != Object.keys(moveIn['Move Power']).length - 1"
            >,
          </span></span
        >
      </div>
    </span>

    <span class="col-span-2" v-if="moveIn.Damage">
      <div class="font-sm">
        <!-- <span class="font-bold">Damage: </span>         -->
        <table class="table-auto">
          <thead>
            <tr>
              <th class="w-2/12 border dark:border-gray-600">Level</th>
              <th class="w-2/12 border dark:border-gray-600"> 1 </th>
              <th class="w-2/12 border dark:border-gray-600"> 5 </th>
              <th class="w-2/12 border dark:border-gray-600"> 10 </th>
              <th class="w-2/12 border dark:border-gray-600"> 17 </th>
              <th class="w-2/12 border dark:border-gray-600">+Move?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border text-center dark:border-gray-600">
                <span class="font-bold">Damage</span>
              </td>
              <td class="border text-center dark:border-gray-600">
                <span>
                  {{ moveIn.Damage["1"].amount }}d{{
                    moveIn.Damage["1"].dice_max
                  }}
                </span>
              </td>
              <td class="border text-center dark:border-gray-600">
                {{ moveIn.Damage["5"].amount }}d{{
                  moveIn.Damage["5"].dice_max
                }}
              </td>
              <td class="border text-center dark:border-gray-600">
                {{ moveIn.Damage["10"].amount }}d{{
                  moveIn.Damage["10"].dice_max
                }}
              </td>
              <td class="border text-center dark:border-gray-600">
                {{ moveIn.Damage["17"].amount }}d{{
                  moveIn.Damage["17"].dice_max
                }}
              </td>
              <td class="border text-center dark:border-gray-600">
                <span v-if="moveIn.Damage['1'].move"> yes</span>
                <span v-else> no</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </span>
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";
import PokemonTipo from "./PokemonTipo.vue";

function dummy(type) {
  return [type];
}

function getRangeM(range) {
  let rangeM = numbersOnly(range);
  if (rangeM == 0) return "Melee(1.5m)";
  else return range + "(" + Math.floor((rangeM * 1.5) / 5) + "m)";
}

function numbersOnly(field) {
  return field.replace(/\D/g, "");
}

defineProps({
  pokeMoves: Object,
  moveIn: Object
});


</script>

