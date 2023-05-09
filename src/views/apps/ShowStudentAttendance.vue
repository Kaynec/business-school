<script setup lang="ts">
//
const { data: students } = defineProps<{
  data: {
    name: string;
    isActive: boolean;
  }[];
}>();

const target = ref();

const emit = defineEmits(["return"]);

onClickOutside(target, () => emit("return"));
</script>

<template>
  <div
    class="fixed inset-0 bg-#000 z-10000 overflow-hidden bg-opacity-15 backdrop-blur flex items-center justify-center"
  >
    <VCard
      ref="target"
      class="!rounded-tr-30px !rounded-tl-30px !flex flex-col !p-0 !m-0 relative !bg-#323232 w-90% max-w-150"
    >
      <VTable class="!bg-#323232 min-h-150 max-h-50vh overflow-auto">
        <!-- 👉 table head -->
        <thead>
          <tr>
            <th scope="col">نام دانشجو</th>
            <th scope="col">حاضر</th>
            <th scope="col">غایب</th>
          </tr>
        </thead>
        <!-- 👉 table body -->
        <tbody class="table-content">
          <tr v-for="item in data" :key="item.name">
            <!-- 👉 User -->
            <td class="!b-#8d99ae2a b-0.1px b-solid">
              {{ item.name }}
            </td>
            <td class="!b-#8d99ae5d b-0.1px b-solid">
              <VCheckbox v-model="item.isActive" color="white" :value="true" />
            </td>
            <td class="!b-#8d99ae5d b-0.1px b-solid">
              <VCheckbox v-model="item.isActive" color="white" :value="false" />
            </td>
          </tr>
        </tbody>

        <!-- 👉 table footer  -->
        <tfoot v-show="!data.length">
          <tr>
            <td colspan="7" class="text-center">
              محتوایی برای نمایش وجود ندارد
            </td>
          </tr>
        </tfoot>
      </VTable>
    </VCard>
  </div>
</template>
