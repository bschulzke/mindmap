<template>
<div class="app">
  <textarea v-model="state.text">
  </textarea>
</div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import { useStore } from '@/store/store'

const store = useStore();
const state = store.$state


</script>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;

}
.app {
  height: 100%;
}
textarea {
  height: 90%;
  width: 95%;
}
</style>
