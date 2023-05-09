<script setup lang="ts">
//
const { data } = defineProps<{
  data: {
    description: string;
    name: string;
    id: number;
  };
}>();

const description = ref(data.description ?? "");

const emit = defineEmits(["return", "update"]);

const target = ref();

onClickOutside(target, () => {
  emit("return");
});

const snackbar = ref(false);

const handleSubmit = () => {
  if (!description.value) {
    snackbar.value = true;

    return;
  }
  emit("update", description.value);
};
</script>

<template>
  <VSnackbar
    v-model="snackbar"
    location="bottom center"
    variant="flat"
    color="error"
    :timeout="2000"
  >
    لطفا نوضیحات را وارد کنید
  </VSnackbar>

  <div
    class="fixed inset-0 bg-#000 z-10000 overflow-hidden bg-opacity-15 backdrop-blur flex items-center justify-center"
  >
    <VCard
      ref="target"
      class="!rounded-30px !flex flex-col pb-3 relative w-90% max-w-150 mb-100"
    >
      <form @submit.prevent="handleSubmit">
        <div class="flex justify-between p-4 px-6 bg-#EDF2F4 bg-opacity-15">
          <span>توضیحات</span>
          <span>{{ data.name }}</span>
        </div>
        <div class="textarea">
          <textarea
            class="resize-none pt-2 pr-6 w-full h-full focus:outline-2 rounded-10px"
            placeholder="توضیحات..."
            v-model="description"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <VBtn
            type="submit"
            class="absolute left-0 bottom-7 ml-4 min-w-45 rounded-10px"
            >ثبت</VBtn
          >
        </div>
      </form>
    </VCard>
  </div>
</template>
