<script setup lang="ts">
import '@heapup/connectkit-vue/style.css'
import { ConnectButton } from '@heapup/connectkit-vue'
</script>

<template>
  <ConnectButton msg="asdsad" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
