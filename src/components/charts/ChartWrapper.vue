<template>
  <Card>
    <template #title>
      <div class="card flex justify-content-center">
        <span v-if="title">{{ title }}</span>
        <slot name="title" v-else></slot>
      </div>
    </template>
    <template #content>
      <p class="m-0">
        <slot></slot>
      </p>
    </template>
  </Card>
</template>

<script setup lang="ts">
interface Props {
  title?: string
}

defineProps<Props>()
</script>

<style scoped></style>
