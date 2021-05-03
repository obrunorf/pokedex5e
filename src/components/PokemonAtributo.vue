<template>
  <div class="flex">
    <!-- <div
      v-for="attribute in attributes"
      :key="attribute"
      class=""      
    > -->
      
     
    <!-- </div> -->
  </div>
</template>

<script setup>
// function getFormattedAttribute(attribute) {
//   let attributeInt = +attribute;
//   let bonus = Math.floor((attribute - 10) / 2);
//   if (bonus >= 0) {
//     return attribute + " +(" + bonus + ")";
//   } else {
//   return attribute + " -(" + bonus + ")";
//   }
// }

import { defineProps, reactive } from "vue";
defineProps({
  attributes: Object,
});
</script>


<style scoped>
a {
  color: #42b983;
}
</style>
