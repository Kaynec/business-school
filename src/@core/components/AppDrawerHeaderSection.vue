<script setup lang="ts">
interface Props {
  title: string;
}
interface Emit {
  (e: "cancel", el: MouseEvent): void;
}
const props = defineProps<Props>();
</script>

<template>
  <div ref="target" class="px-5 py-6 bg-var-theme-background">
    <h3 class="font-weight-medium text-3xl !text-center">
      {{ props.title }}
    </h3>
    <VSpacer />
  </div>
</template>
