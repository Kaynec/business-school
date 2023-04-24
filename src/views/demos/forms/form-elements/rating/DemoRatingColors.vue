<script lang="ts" setup>
const rating = ref(4);
const ratingColors = [
  "primary",
  "secondary",
  "success",
  "info",
  "warning",
  "error",
];
</script>

<template>
  <div class="!flex flex-col">
    <VRating
      v-for="color in ratingColors"
      :key="color"
      v-model="rating"
      :active-color="color"
    />
  </div>
</template>
