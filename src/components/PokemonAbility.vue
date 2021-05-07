<template>
<div v-for="ability in abilitiesPoke" v-bind:key="ability">
  <span class="font-bold">{{ ability }}: </span> <span class="italic">{{ getAbilityDesc(ability, abilities_file) }}</span>
</div>
<div v-if ="hidden">
  <span class="font-bold">{{ hidden }} (Hidden): </span> <span class="italic">{{ getAbilityDesc(hidden, abilities_file) }}</span>
</div>

</template>

<script setup>
import { defineProps, reactive } from "vue";

function getAbilityDesc(abili, file){
    //console.log(file[abili].Description);  
  return file[abili].Description;
}

defineProps({
  abilitiesPoke: Array,
  hidden: String,
  abilities_file: Object
});
</script>


<style scoped>
a {
  color: #42b983;
}
</style>