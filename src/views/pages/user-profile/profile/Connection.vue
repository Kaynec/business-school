<script lang="ts" setup>
interface Props {
  connectionsData: {
    name: string;
    relativeTime: string;
    img: string;
  }[];
}

const props = defineProps<Props>();

const showAll = ref(false);

const filteredData = computed(() => {
  if (showAll.value) {
    return props.connectionsData;
  } else {
    return props.connectionsData.slice(0, 5);
  }
});
</script>

<template>
  <VCard class="rounded-30px p-3" v-auto-animate>
    <template #prepend>
      <div class="mt-n2 text-2xl peyda">آخرین فعالیت‌ها</div>
    </template>
    <template #append>
      <div
        class="ml-3 mt-n2 text-#E30613 cursor-pointer"
        @click="showAll = !showAll"
      >
        <italic v-if="showAll"> مخفی کردن </italic>
        <italic v-else> مشاهده همه </italic>
      </div>
    </template>

    <VListItem v-for="data in filteredData" :key="data.name">
      <template #prepend>
        <VAvatar size="38" :image="data.img" />
      </template>

      <VListItemTitle class="text-sm font-weight-semibold mb-1">
        {{ data.name }}
      </VListItemTitle>
      <VListItemSubtitle>
        {{ data.relativeTime }}
      </VListItemSubtitle>
    </VListItem>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 16px;
}
</style>
