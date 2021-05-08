<template>
  <div class="flex">

    <table class="table-auto tracking-widest">
      <thead>
        <th>STR</th>
        <th>DEX</th>
        <th>CON</th>
        <th>INT</th>
        <th>WIS</th>
        <th>CHA</th> 
      </thead>
      <tbody>
    <td>
      {{ getFormattedAttribute(attributes.STR) }}  
    </td>
    <td>
      {{ getFormattedAttribute(attributes.DEX) }}  
      </td>
    <td>
      {{ getFormattedAttribute(attributes.CON) }}  
      </td>
    <td>
      {{ getFormattedAttribute(attributes.INT) }}  
      </td>
    <td>
      {{ getFormattedAttribute(attributes.WIS) }}  
      </td>
    <td>
      {{ getFormattedAttribute(attributes.CHA) }}
    </td>
      </tbody>
      </table>
  </div>
</template>

<script setup>
function getFormattedAttribute(attribute) {
  let attributeInt = +attribute;
  let bonus = Math.floor((attribute - 10) / 2);
  if (bonus >= 0) {
    return attribute + "(+" + bonus + ")";
  } else {
    return attribute + "(-" + -1*bonus + ")";
  }
}

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
