<script setup lang="ts">
import { useDisclosure } from '../hooks/useDisclosure'
const { isOpen, onToggle } = useDisclosure()
</script>

<template>
  <button
    type="button"
    @click="
      () => {
        onToggle()
      }
    "
  >
    count is {{ isOpen }}
  </button>
</template>

<style scoped>
button {
  cursor: pointer;
}
</style>
