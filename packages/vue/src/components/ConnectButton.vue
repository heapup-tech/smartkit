<script setup lang="ts">
import { ref } from 'vue'
import { useDisclosure } from '../hooks/useDisclosure'
defineProps({
  msg: { type: String }
})
const { isOpen, onOpen, onToggle } = useDisclosure()
const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button
      type="button"
      @click="
        () => {
          console.log('121321')
          onToggle()
        }
      "
    >
      count is {{ isOpen }}222
    </button>
  </div>
</template>

<style scoped>
h1 {
  color: #7e22ce;
}
</style>
