<template>
  <div>
    <span class="font-bold">Saving Throws: </span>
    <span v-for="(saving_throws, index) in pokemon.saving_throws" v-bind:key="saving_throws">
      {{ saving_throws
      }}<span v-if="index != Object.keys(pokemon.saving_throws).length - 1">, </span>
    </span>
  </div>
  <div>
    <span class="font-bold">Skills: </span>
    <span v-for="(skill, index) in pokemon.Skill" v-bind:key="skill">
      {{ skill
      }}<span v-if="index != Object.keys(pokemon.Skill).length - 1">, </span>
    </span>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  pokemon: Object,
});
</script>