<template>
  <div>
    <span class="font-bold"> Weaknesses: </span>
    <span v-if="getWeakness(types)[0] === undefined">None</span>
    <span v-for="(weakTo, index) in getWeakness(types)" v-bind:key="weakTo">
      {{ weakTo
      }}<span v-if="index != Object.keys(getWeakness(types)).length - 1"
        >,
      </span>
    </span>
  </div>
  <div>
    <span class="font-bold"> Resistances: </span>
    <span v-if="getStrength(types)[0] === undefined">None</span>
    <span v-for="(weakTo, index) in getStrength(types)" v-bind:key="weakTo">
      {{ weakTo
      }}<span v-if="index != Object.keys(getStrength(types)).length - 1"
        >,
      </span>
    </span>
  </div>
  <div>
    <span class="font-bold"> Immunities: </span>
    <span v-if="getImmunities(types)[0] === undefined">None</span>
    <span v-for="(weakTo, index) in getImmunities(types)" v-bind:key="weakTo">
      {{ weakTo
      }}<span v-if="index != Object.keys(getImmunities(types)).length - 1"
        >,
      </span>
    </span>
  </div>
</template>
<script setup>
function getWeakness(types) {
  let type1 = types[0];
  let type2 = "";
  if (types[1] != undefined) {
    type2 = types[1];
  } else {
    //single type
    return getTypeObj(type1).weaknesses;
  }
  let weaknesses_checked = [];
  //dual type
  getTypeObj(type1).weaknesses.forEach(function (tipo) {
    if (
      !(
        getTypeObj(type2).strengths.includes(tipo) ||
        getTypeObj(type2).immunes.includes(tipo)
      )
    ) {
      weaknesses_checked.push(tipo); //if second type isnt resistent or immune, add to the list
    }
  });

  getTypeObj(type2).weaknesses.forEach(function (tipo) {
    if (
      !(
        getTypeObj(type1).strengths.includes(tipo) ||
        getTypeObj(type1).immunes.includes(tipo)
      )
    ) {
      weaknesses_checked.push(tipo); //if second type isnt resistent or immune, add to the list
    }
  });

  return weaknesses_checked.filter(onlyUnique);
}

function getStrength(types) {

    let type1 = types[0];
  let type2 = "";
  if (types[1] != undefined) {
    type2 = types[1];
  } else {
    //single type
    return getTypeObj(type1).strengths;
  }
  let str_checked = [];
  //dual type
  getTypeObj(type1).strengths.forEach(function (tipo) {
    if (
      !(
        getTypeObj(type2).weaknesses.includes(tipo) ||
        getTypeObj(type2).immunes.includes(tipo)
      )
    ) {
      str_checked.push(tipo); //if second type isnt resistent or immune, add to the list
    }
  });

  getTypeObj(type2).strengths.forEach(function (tipo) {
    if (
      !(
        getTypeObj(type1).weaknesses.includes(tipo) ||
        getTypeObj(type1).immunes.includes(tipo)
      )
    ) {
      str_checked.push(tipo); //if second type isnt resistent or immune, add to the list
    }
  });

  return str_checked.filter(onlyUnique);
}

function getImmunities(types) {
    //console.log(getTypeObj(types[0]).immunes.concat(types[1].immunes));
  if (types[1] != undefined) {
    return getTypeObj(types[0]).immunes.concat(types[1].immunes);
  } else {
    return getTypeObj(types[0]).immunes;
  }
}

function getTypeObj(tipo) {
  return typeRelations.find((obj) => {
    return obj.name === tipo;
  });
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

const typeRelations = [
  {
    name: "Normal",
    immunes: ["Ghost"],
    weaknesses: ["Fighting"],
    strengths: [],
  },
  {
    name: "Fire",
    immunes: [],
    weaknesses: ["Ground", "Water", "Rock"],
    strengths: ["Fire", "Ice", "Grass", "Bug", "Steel", "Fairy"],
  },
  {
    name: "Water",
    immunes: [],
    weaknesses: ["Electric", "Grass"],
    strengths: ["Fire", "Water", "Ice", "Steel"],
  },
  {
    name: "Electric",
    immunes: [],
    weaknesses: ["Ground"],
    strengths: ["Steel", "Flying", "Electric"],
  },
  {
    name: "Grass",
    immunes: [],
    weaknesses: ["Fire", "Ice", "Poison", "Bug", "Flying"],
    strengths: ["Water", "Electric", "Grass", "Ground"],
  },
  {
    name: "Ice",
    immunes: [],
    weaknesses: ["Fire", "Fighting", "Rock", "Steel"],
    strengths: ["Ice"],
  },
  {
    name: "Fighting",
    immunes: ["Ghost"],
    weaknesses: ["Flying", "Psychic", "Fairy"],
    strengths: ["Rock", "Dark", "Bug"],
  },
  {
    name: "Poison",
    immunes: [],
    weaknesses: ["Psychic", "Ground"],
    strengths: ["Grass", "Fairy", "Fighting", "Poison", "Bug"],
  },
  {
    name: "Ground",
    immunes: ["Electric"],
    weaknesses: ["Grass", "Ice", "Water"],
    strengths: ["Poison", "Rock"],
  },
  {
    name: "Flying",
    immunes: ["Ground"],
    weaknesses: ["Electric", "Rock", "Ice"],
    strengths: ["Grass", "Fighting", "Bug"],
  },
  {
    name: "Psychic",
    immunes: [],
    weaknesses: ["Bug", "Ghost", "Dark"],
    strengths: ["Fighting", "Psychic"],
  },
  {
    name: "Bug",
    immunes: [],
    weaknesses: ["Fire", "Flying", "Rock"],
    strengths: ["Grass", "Fighting", "Ground"],
  },
  {
    name: "Rock",
    immunes: [],
    weaknesses: ["Fighting", "Water", "Grass", "Ground", "Steel"],
    strengths: ["Fire", "Normal", "Flying", "Poison"],
  },
  {
    name: "Ghost",
    immunes: ["Normal, Fighting"],
    weaknesses: ["Dark", "Ghost"],
    strengths: ["Poison", "Bug"],
  },
  {
    name: "Dragon",
    immunes: [],
    weaknesses: ["Ice", "Dragon", "Fairy"],
    strengths: ["Fire", "Water", "Electric", "Grass"],
  },
  {
    name: "Dark",
    immunes: ["Psychic"],
    weaknesses: ["Fighting", "Bug", "Fairy"],
    strengths: ["Dark", "Ghost"],
  },
  {
    name: "Steel",
    immunes: ["Poison"],
    weaknesses: ["Fire", "Fighting", "Ground"],
    strengths: [
      "Normal",
      "Grass",
      "Ice",
      "Flying",
      "Psychic",
      "Bug",
      "Rock",
      "Dragon",
      "Steel",
      "Fairy",
    ],
  },
  {
    name: "Fairy",
    immunes: ["Dragon"],
    weaknesses: ["Poison", "Steel"],
    strengths: ["Fighting", "Bug", "Dark"],
  },
];

import { defineProps, reactive } from "vue";
defineProps({
  types: Array,
});
</script>