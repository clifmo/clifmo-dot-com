<script setup lang="ts">
import { ref } from 'vue'
// const projects = [{ id: 1, name: 'test' }, { id: 2, name: 'test2' }]

const label = ref('I\'m a very dangerous button')
const project = { id: 1, name: 'Test Project' }

</script>

<template>
  <div>
    <h1>{{ project.name }}</h1>

    {{ label }}
  </div>
</template>
