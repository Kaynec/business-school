<script setup lang="ts">
const xSmallPagination = ref(1);
const smallPagination = ref(2);
const largePagination = ref(3);
</script>

<template>
  <div class="!flex flex-col gap-6">
    <VPagination v-model="xSmallPagination" :length="7" size="small" />
    <VPagination v-model="smallPagination" :length="7" />
    <VPagination v-model="largePagination" :length="7" size="large" />
  </div>
</template>
