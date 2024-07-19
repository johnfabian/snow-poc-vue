<template>
  <h3>Home</h3>

  <div class="flex align-items-center gap-3">
    <Button label="Show Dialog" @click="showDialog" raised />
    <Button label="Show Toast" @click="showDialog" raised />
  </div>
</template>

<script setup lang="ts">
const showDialog = () => {
  alert('Hello World')
}
</script>
