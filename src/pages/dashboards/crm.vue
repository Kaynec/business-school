<script setup lang="ts">
import nelson from "@/assets/images/svg/nelson2.png";
// Import Swiper Vue.js components

// Import Swiper styles
import ChartJsBarChart from "@/views/charts/chartjs/ChartJsBarChart.vue";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/vue";
const modules = [Pagination, Autoplay];

const students = ref([
  {
    name: "سارا سعیدی",
    lesson: "دیجیتال مارکتینگ",
    code: 1215,
    plo: "",
  },
  {
    name: "سارا سعیدی",
    lesson: "دیجیتال مارکتینگ",
    code: 1215,
    plo: 45,
  },
]);

const { updateBg } = inject("showBackgroundImage") as any;
updateBg(true);
onBeforeUnmount(() => {
  updateBg(false);
});
</script>

<template>
  <div class="grid grid-cols-1 2xl:grid-cols-3 gap-3 items-start">
    <div
      class="h-full items-stretch w-100% col-span-2 grow flex flex-col gap-2"
    >
      <div class="flex flex-col md:flex-row gap-2">
        <VCard
          shadow-xl
          class="px-6 py-4 rounded-30px flex-basis-50% flex flex items-center justify-center"
        >
          <JalaliCalendar />
        </VCard>
        <VCard shadow-xl class="rounded-30px flex-basis-50% space-y-2">
          <span class="text-3xl inline-block peyda pr-3 pt-2"
            >مدیریت پیام ها من
          </span>
          <div
            class="!flex flex-col gap-8 h-80% max-h-50 overflow-auto custom-scroll"
          >
            <div class="flex justify-between items-center" v-for="i in 7">
              <div flex items-end gap-2>
                <div
                  style="background: rgba(141, 153, 174, 30%)"
                  class="p-3 rounded-lg w-3rem h-3rem aspect-1"
                >
                  <img w-full src="@/assets/images/svg/1.svg" alt="svg" />
                </div>
                <div class="!flex flex-col items-start">
                  <span class="text-base peyda"
                    >بخش‌بندی مشتریان چیست و چرا اهمیت دارد؟
                  </span>
                  <div class="flex gap-2">
                    <div class="text-xs text-400 flex-center-row gap-1">
                      <svg
                        width="11"
                        height="10"
                        viewBox="0 0 11 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.29326 0C2.53312 0 2.72756 0.194443 2.72756 0.434301V1.39997C4.36501 1.25415 6.01219 1.25415 7.64964 1.39997V0.434301C7.64964 0.194443 7.84408 0 8.08394 0C8.3238 0 8.51824 0.194443 8.51824 0.434301V1.48614C9.38281 1.60839 10.0658 2.29222 10.1815 3.16451L10.2316 3.54261C10.4424 5.13292 10.4242 6.74524 10.1775 8.33038C10.0553 9.11562 9.41739 9.71875 8.62654 9.79675L7.9357 9.86487C6.10872 10.045 4.26844 10.045 2.44146 9.86487L1.75063 9.79675C0.959773 9.71875 0.321838 9.11562 0.19965 8.33038C-0.047009 6.74524 -0.0652153 5.13292 0.145586 3.54261L0.195705 3.16451C0.311331 2.29221 0.994371 1.60837 1.85896 1.48613V0.434301C1.85896 0.194443 2.0534 0 2.29326 0ZM2.55104 2.28894C4.30515 2.11596 6.07202 2.11596 7.82612 2.28894L8.35044 2.34065C8.85235 2.39014 9.25412 2.77868 9.32039 3.27865L9.37051 3.65675C9.38802 3.78884 9.40386 3.92109 9.41804 4.05347H0.959126C0.973303 3.92109 0.989146 3.78884 1.00666 3.65675L1.05677 3.27865C1.12305 2.77868 1.52482 2.39014 2.02672 2.34065L2.55104 2.28894ZM0.890083 4.92207C0.83323 6.0154 0.889243 7.11281 1.05792 8.19683C1.11921 8.5907 1.43919 8.89322 1.83587 8.93234L2.5267 9.00046C4.297 9.17504 6.08017 9.17504 7.85046 9.00046L8.54129 8.93234C8.93797 8.89322 9.25796 8.5907 9.31924 8.19683C9.48792 7.11281 9.54393 6.0154 9.48708 4.92207H0.890083Z"
                          fill="white"
                        />
                      </svg>
                      <span class="mt-1 !text-gray-3"> 25 آبان </span>
                    </div>
                    <div class="text-xs text-400 flex-center-row gap-1">
                      <svg
                        width="11"
                        height="10"
                        viewBox="0 0 4 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.0292 2.72913C2.01253 2.72913 1.98752 2.72913 1.96668 2.72913C1.52918 2.71246 1.18335 2.35829 1.18335 1.91663C1.18335 1.46663 1.54585 1.10413 1.99585 1.10413C2.44585 1.10413 2.80836 1.47079 2.80836 1.91663C2.81253 2.35829 2.4667 2.71663 2.0292 2.72913Z"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M0.854102 3.98328C0.299935 4.35411 0.299935 4.95828 0.854102 5.32911C1.48327 5.74994 2.5166 5.74994 3.14577 5.32911C3.69993 4.95828 3.69993 4.35411 3.14577 3.98328C2.5166 3.56661 1.48743 3.56661 0.854102 3.98328Z"
                          stroke="white"
                          stroke-width="0.7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <span class="mt-1 !text-gray-3">
                        دپارتمان مربوطه:بخش منابع انسانی
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <VBtn class="rounded-2.4rem">مشاهده </VBtn>
            </div>
          </div>
        </VCard>
      </div>
      <!-- Second Part -->
      <div class="flex gap-2 flex-col md:flex-row">
        <VCard
          shadow-xl
          class="px-6 pt-2 rounded-30px flex-basis-50% space-y-2"
        >
          <span class="self-start text-2xl peyda font-700"> ثبت نمرات </span>
          <div
            class="bg-#E30613 grid grid-cols-4 p-3 items-center rounded-10px text-sm"
          >
            <span justify-self-start>دانشجو</span>
            <span justify-self-start>درس</span>
            <span justify-self-center>کد</span>
            <span justify-self-center>PLO</span>
          </div>
          <div
            class="container max-h-65 overflow-auto space-y-2 text-xs whitespace-nowrap"
          >
            <div
              v-for="student in students"
              class="bg-#1E1E1E grid grid-cols-4 p-3 items-center rounded-10px h-15"
            >
              <span justify-self-start>{{ student.name }}</span>
              <span justify-self-start>{{ student.lesson }}</span>
              <span justify-self-center>{{ student.code }}</span>
              <div justify-self-center>
                <span v-if="student.plo">{{ student.plo }}</span>
                <VBtn v-else rounded-30px> ثبت</VBtn>
              </div>
            </div>
          </div>
        </VCard>
        <VCard
          shadow-xl
          class="pt-2 px-6 rounded-30px flex-basis-50% flex-center-column"
        >
          <span class="self-start peyda font-700 text-2xl">
            ارزیابی عملکرد و بازخوردهای من
          </span>
          <ChartJsBarChart />
        </VCard>
      </div>
      <VCard
        class="relative min-h-55 h-100% !bg-transparent !shadow-none px-8 !flex flex-col justify-center peyda"
      >
        <img class="absolute inset-0 -z-1 w-full h-full" :src="nelson" alt="" />

        <span class="!text-gray-3 text-2xl">
          آموزش و یادگیری نیرومندترین سلاحی است که می توان با آن جهان را دگرگون
          کرد.
        </span>
        <span class="!text-#8D99AE self-end text-xl"> “نلسون ماندلا” </span>
      </VCard>
      <!--  -->
    </div>
    <div class="h-full items-stretch w-100% space-y-2 !flex !flex-col">
      <!-- Dont Render This Unless Big Screen -->
      <div class="!flex-center-row w-full hidden !2xl:flex">
        <swiper
          :slides-per-view="1"
          :space-between="20"
          :modules="modules"
          :pagination="{
            clickable: true,
          }"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
        >
          <SwiperSlide v-for="i in 3">
            <img
              src="@/assets/images/cards/dashboard.png"
              alt="dashboard.png"
              w-full
              h-full
              max-h-60
            />
          </SwiperSlide>
        </swiper>
      </div>
      <VCard
        shadow-xl
        class="rounded-30px px-4 !flex flex-col justify-center gap-2 min-h-54"
      >
        <span class="text-3xl pt-4 peyda b-b-4px pb-2 b-b-solid b-b-#323232">
          گزارش حق التدریس</span
        >

        <div
          class="w-full flex-nowrap flex overflow-hidden scrollbar"
          v-dragscroll
        >
          <section
            class="cursor-pointer w-full shrink-0 my-auto !flex flex-col justify-between"
            v-for="i in 3"
          >
            <div class="flex justify-between items-center">
              <div class="!flex flex-col items-start gap-2">
                <h6 class="text-2xl !text-#8D99AE peyda">
                  {{ i }} دوره مدیریت
                </h6>

                <div class="text-xs text-400 flex-center-row gap-2">
                  <img src="@/assets/images/svg/wallet.svg" />

                  <span class="mt-1 !text-gray-3">
                    مبلغ پرداختی : 5.350.000 تومان
                  </span>
                </div>
                <div class="text-xs text-400 flex-center-row gap-2">
                  <img src="@/assets/images/svg/date.svg" />

                  <span class="mt-1 !text-gray-3"> مجموع : 36 ساعت </span>
                </div>
              </div>
            </div>
            <div class="flex justify-end gap-2">
              <VBtn>جزئیات </VBtn>
            </div>
          </section>
        </div>
      </VCard>
      <VCard shadow-xl class="!p-6 rounded-30px flex-basis-50% space-y-2">
        <span class="text-3xl inline-block pb-3 peyda"> درس‌های من </span>
        <div
          class="flex-col space-y-8 max-h-40 h-75% overflow-auto custom-scroll pl-4"
        >
          <div class="flex justify-between items-center" v-for="i in 4">
            <div flex items-end gap-2>
              <div class="!flex flex-col items-start">
                <span class="text-base peyda"
                  >بخش‌بندی مشتریان چیست و چرا اهمیت دارد؟
                </span>
                <div class="flex gap-2">
                  <div class="text-xs text-400 flex-center-row gap-1">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 11 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.29326 0C2.53312 0 2.72756 0.194443 2.72756 0.434301V1.39997C4.36501 1.25415 6.01219 1.25415 7.64964 1.39997V0.434301C7.64964 0.194443 7.84408 0 8.08394 0C8.3238 0 8.51824 0.194443 8.51824 0.434301V1.48614C9.38281 1.60839 10.0658 2.29222 10.1815 3.16451L10.2316 3.54261C10.4424 5.13292 10.4242 6.74524 10.1775 8.33038C10.0553 9.11562 9.41739 9.71875 8.62654 9.79675L7.9357 9.86487C6.10872 10.045 4.26844 10.045 2.44146 9.86487L1.75063 9.79675C0.959773 9.71875 0.321838 9.11562 0.19965 8.33038C-0.047009 6.74524 -0.0652153 5.13292 0.145586 3.54261L0.195705 3.16451C0.311331 2.29221 0.994371 1.60837 1.85896 1.48613V0.434301C1.85896 0.194443 2.0534 0 2.29326 0ZM2.55104 2.28894C4.30515 2.11596 6.07202 2.11596 7.82612 2.28894L8.35044 2.34065C8.85235 2.39014 9.25412 2.77868 9.32039 3.27865L9.37051 3.65675C9.38802 3.78884 9.40386 3.92109 9.41804 4.05347H0.959126C0.973303 3.92109 0.989146 3.78884 1.00666 3.65675L1.05677 3.27865C1.12305 2.77868 1.52482 2.39014 2.02672 2.34065L2.55104 2.28894ZM0.890083 4.92207C0.83323 6.0154 0.889243 7.11281 1.05792 8.19683C1.11921 8.5907 1.43919 8.89322 1.83587 8.93234L2.5267 9.00046C4.297 9.17504 6.08017 9.17504 7.85046 9.00046L8.54129 8.93234C8.93797 8.89322 9.25796 8.5907 9.31924 8.19683C9.48792 7.11281 9.54393 6.0154 9.48708 4.92207H0.890083Z"
                        fill="white"
                      />
                    </svg>
                    <span class="mt-1 !text-gray-3"> 25 آبان </span>
                    <span class="mt-1 !text-gray-3"> | </span>
                    <span class="mt-1 !text-gray-3"> کد دوره: 2036 </span>
                  </div>
                </div>
              </div>
            </div>
            <VBtn class="rounded-2.4rem">جزئیات درس </VBtn>
          </div>
        </div>
      </VCard>
    </div>
  </div>
  <!-- Only For Smaller Screens -->
  <VRow class="2xl:hidden">
    <VCol cols="12" md="6">
      <VCard
        shadow-xl
        :image="nelson"
        class="rounded-30px min-h-65 h-100% !bg-green justify-center px-6 items-center peyda flex flex-col basis-50%"
      >
        <span class="!text-gray-3 text-2xl w-full">
          آموزش و یادگیری نیرومندترین سلاحی است که می توان با آن جهان را دگرگون
          کرد.
        </span>
        <span class="!text-#8D99AE text-xl self-end whitespace-nowrap">
          “نلسون ماندلا”
        </span>
      </VCard>
    </VCol>
    <VCol cols="12" md="6">
      <div class="flex-center-row w-full basis-50%">
        <swiper
          :slides-per-view="1"
          :space-between="20"
          :modules="modules"
          :pagination="{
            clickable: true,
          }"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
        >
          <SwiperSlide v-for="i in 3">
            <img
              src="@/assets/images/cards/dashboard.png"
              alt="dashboard.png"
              width="100"
              height="100"
              w-full
              h-full
              max-h-70
            />
          </SwiperSlide>
        </swiper>
      </div>
    </VCol>
  </VRow>
</template>

<style lang="scss">
/* target the active bullet */
span.swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: red;
  opacity: 1;
  pointer-events: all !important;
}

/* target all bullets */
.swiper-pagination-bullet {
  background-color: #3c3c3c;
  opacity: 1;
  pointer-events: all !important;
}
</style>

<style lang="scss" scoped>
@use "@core/scss/template/libs/apex-chart.scss";

.customCard {
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;
  gap: 1rem;
}

.scrollbar::-webkit-scrollbar-track {
  border-radius: 0.75rem;
  background-color: #000;
  box-shadow: inset 0 0 1px rgba(0, 0, 0, 30%);
}

.scrollbar::-webkit-scrollbar {
  border-radius: 0.75rem;
  background-color: red;
  inline-size: 1px;
}

.scrollbar::-webkit-scrollbar-thumb {
  border-radius: 0.75rem;
  background-color: red;
}

.custom-scroll {
  margin-inline-end: 5px;
  padding-inline-end: 10px;
}

.custom-scroll::-webkit-scrollbar {
  inline-size: 5px;
}

/* Track */
.custom-scroll::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
.custom-scroll::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
.custom-scroll::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
