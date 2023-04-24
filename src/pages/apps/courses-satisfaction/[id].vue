<script setup lang="ts">
const items = ref([
  {
    name: "جامع بودن و مکفی بودن سرفصل ها را به چه صورت ارزیابی می کنید.",
    point: 0,
    text: "",
  },
  {
    name: "جامع بودن و مکفی بودن سرفصل ها را به چه صورت ارزیابی می کنید.",
    point: 0,
    text: "",
  },
  {
    name: "جامع بودن و مکفی بودن سرفصل ها را به چه صورت ارزیابی می کنید.",
    point: 0,
    text: "",
  },
  {
    name: "جامع بودن و مکفی بودن سرفصل ها را به چه صورت ارزیابی می کنید.",
    point: 0,
    text: "",
  },
  {
    name: "جامع بودن و مکفی بودن سرفصل ها را به چه صورت ارزیابی می کنید.",
    point: 0,
    text: "",
  },
  {
    name: "جامع بودن و مکفی بودن سرفصل ها را به چه صورت ارزیابی می کنید.",
    point: 0,
    text: "",
  },
  {
    name: "جامع بودن و مکفی بودن سرفصل ها را به چه صورت ارزیابی می کنید.",
    point: 0,
    text: "",
  },
  {
    name: "جامع بودن و مکفی بودن سرفصل ها را به چه صورت ارزیابی می کنید.",
    point: 0,
    text: "",
  },
  {
    name: "جامع بودن و مکفی بودن سرفصل ها را به چه صورت ارزیابی می کنید.",
    point: 0,
    text: "",
  },
]);

const numberToLetter = {
  1: "یک",
  2: "دو",
  3: "سه",
  4: "چهار",
  5: "پنج",
};
</script>

<template>
  <h5 text="3xl" mb-8 mr-2 class="peyda text-white peyda">
    رضایت دوره MBI اجرایی
  </h5>
  <VCard class="flex px-10 py-5 flex-col gap-20 max-h-75vh overflow-auto">
    <div class="flex items-start" v-for="item in items">
      <div class="flex m-2 flex-col items-start gap-3 basis-50%">
        <span>
          {{ item.name }}
        </span>
        <span text="!#52AE32"> میانگین امتیاز کسب شده: 4 </span>
        <div class="flex justify-between pr-6 w-full max-w-175">
          <VCheckbox
            v-model="item.point"
            color="#fff"
            :value="n"
            v-for="n in 5"
          >
            {{ (numberToLetter as any)[n] }}
          </VCheckbox>
        </div>
      </div>
      <VTextarea
        v-if="item.point > 0"
        rows="6"
        placeholder="علت امتیاز دهی خود را توضیح دهید..."
      >
      </VTextarea>
    </div>
    <VCardItem class="flex justify-center mt-15">
      <VBtn class="min-w-75 rounded-10px min-h-12"> ثبت </VBtn>
    </VCardItem>
  </VCard>
</template>

<style lang="scss">
i.v-icon.v-icon {
  color: red;
}

.avatar-center {
  position: absolute;
  border: 5px solid rgb(var(--v-theme-surface));
  inset-block-start: -2rem;
  inset-inline-start: 1rem;
}

// membership pricing
.member-pricing-bg {
  position: relative;
  background-color: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));
}

.membership-pricing {
  sup {
    inset-block-start: 9px;
  }
}
</style>
