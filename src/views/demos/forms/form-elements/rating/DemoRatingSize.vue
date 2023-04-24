<script lang="ts" setup>
const rating = ref(4);
</script>

<template>
  <div class="!flex flex-col">
    <VRating v-model="rating" size="x-small" />

    <VRating v-model="rating" size="small" />

    <VRating v-model="rating" />

    <VRating v-model="rating" size="large" />

    <VRating v-model="rating" size="x-large" />
  </div>
</template>
