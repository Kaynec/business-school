<script setup lang="ts">
import globe from "@/assets/images/svg/globe.png";
import nelson from "@/assets/images/svg/nelson2.png";
import ChartJsBarChart from "@/views/charts/chartjs/ChartJsBarChart.vue";
import type { ChartJsCustomColors } from "@/views/charts/chartjs/types";

const currentTab = ref(0);

const chartJsCustomColors: ChartJsCustomColors = {
  white: "#fff",
  yellow: "#ffe802",
  primary: "#836af9",
  areaChartBlue: "#2c9aff",
  barChartYellow: "#ffcf5c",
  polarChartGrey: "#4f5d70",
  polarChartInfo: "#299aff",
  lineChartYellow: "#d4e157",
  polarChartGreen: "#28dac6",
  lineChartPrimary: "#9e69fd",
  lineChartWarning: "#ff9800",
  horizontalBarInfo: "#26c6da",
  polarChartWarning: "#ff8131",
  scatterChartGreen: "#28c76f",
  warningShade: "#ffbd1f",
  areaChartBlueLight: "#84d0ff",
  areaChartGreyLight: "#edf1f4",
  scatterChartWarning: "#ff9f43",
};
</script>

<template>
  <VRow>
    <VCol cols="12" md="8" lg="4">
      <VCard
        class="pa-2 rounded-xl h-100% flex flex items-center justify-center"
      >
        <JalaliCalendar />
      </VCard>
    </VCol>
    <VCol cols="12" md="6" lg="3">
      <VCard class="rounded-xl h-100% customCard" :image="globe">
        <div class="!flex flex-col w-full pr-6 gap-4 pb-8 pt-25 peyda">
          <span class="text-3xl"> ثبت نام در دوره بین المللی </span>
          <span class="text-2xl"> Executive MBA </span>
          <span class="text-2xl"> دانشگاه UMEF </span>
          <span class="text-3xl"> سوییس آغاز شد</span>
        </div>
        <VCardActions style="display: flex; width: 100%; justify-content: end">
          <VBtn
            class="rounded-lg"
            style="
              height: 2.75rem;
              background: #e30613 !important;
              color: white;
              padding-inline: 2.5rem;
            "
            color="error"
          >
            مطالعه بیشتر
          </VBtn>
        </VCardActions>
      </VCard>
    </VCol>

    <VCol cols="12" md="10" lg="5">
      <VCard class="pa-2 !flex-center-row rounded-xl h-100%">
        <ChartJsBarChart />
      </VCard>
    </VCol>
  </VRow>
  <!--  -->
  <VRow>
    <VCol cols="12" md="8" lg="4">
      <VCard class="!p-3 rounded-xl h-100% space-y-2">
        <span class="text-3xl inline-block mb-8 peyda"> دوره‌های من </span>
        <div class="flex justify-between items-center my-4" v-for="i in 4">
          <div class="!flex flex-col">
            <span class="text-lg pb-3 peyda">دوره مدیر اجرایی</span>
            <div class="text-xs text-400 flex-center-row gap-2">
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
              <span class="mt-1 !text-gray-3"> 25 آبان | کد دوره: 2036 </span>
            </div>
          </div>
          <VBtn class="rounded-2.4rem">جزئیات دوره </VBtn>
        </div>
      </VCard>
    </VCol>
    <VCol cols="12" md="6" lg="3">
      <VCard class="rounded-xl min-h-100% !p-4 !flex flex-col justify-between">
        <span class="text-3xl pt-4 peyda"> مهلت سررسید </span>

        <div
          class="w-full flex-nowrap flex gap-6 pt-4 h-full overflow-hidden gap-2 scrollbar"
          v-dragscroll
        >
          <section
            class="cursor-pointer w-full shrink-0 h-90% my-auto !flex flex-col justify-between pb-8"
            v-for="i in 3"
          >
            <div class="flex justify-between items-center">
              <div class="!flex flex-col items-start gap-3">
                <span class="text-2xl !text-#8D99AE pb-3 peyda">
                  {{ i }} دوره مدیریت</span
                >

                <div class="text-xs text-400 flex-center-row gap-2">
                  <img src="@/assets/images/svg/wallet.svg" />

                  <span class="mt-1 !text-gray-3">
                    مبلغ پرداختی : 5.350.000 تومان
                  </span>
                </div>
                <div class="text-xs text-400 flex-center-row gap-2">
                  <img src="@/assets/images/svg/date.svg" />

                  <span class="mt-1 !text-gray-3">
                    تاریخ سر رسید: 28 مهر 1401
                  </span>
                </div>
              </div>
            </div>
            <div class="flex justify-end gap-2">
              <VBtn :variant="'outlined'">جزئیات </VBtn>
              <VBtn> پرداخت </VBtn>
            </div>
          </section>
        </div>
      </VCard>
    </VCol>

    <VCol cols="12" md="10" lg="5">
      <VCard class="!p-6 rounded-xl h-100% space-y-2">
        <span class="text-3xl inline-block mb-8 peyda"
          >جعبه ابزار مدیریتی
        </span>
        <div class="!flex flex-col gap-8">
          <div class="flex justify-between items-center">
            <div flex items-end gap-2>
              <div
                style="background: rgba(141, 153, 174, 30%)"
                class="p-3 rounded-lg w-3rem h-3rem"
              >
                <img w-full src="@/assets/images/svg/1.svg" alt="svg" />
              </div>
              <div class="!flex flex-col items-start">
                <span class="text-lg peyda"
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
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.19 1.4027C2.9434 1.4027 1.12216 3.22394 1.12216 5.47054C1.12216 7.71715 2.9434 9.53838 5.19 9.53838C7.4366 9.53838 9.25784 7.71715 9.25784 5.47054C9.25784 3.22394 7.4366 1.4027 5.19 1.4027ZM0.280541 5.47054C0.280541 2.75912 2.47858 0.561081 5.19 0.561081C7.90142 0.561081 10.0995 2.75912 10.0995 5.47054C10.0995 8.18196 7.90142 10.38 5.19 10.38C2.47858 10.38 0.280541 8.18196 0.280541 5.47054Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.19 2.24432C5.42241 2.24432 5.61081 2.43273 5.61081 2.66514V5.23731L7.09627 6.16572C7.29335 6.2889 7.35327 6.54852 7.23009 6.7456C7.10691 6.94268 6.8473 7.00259 6.65021 6.87941L4.96697 5.82739C4.84393 5.75049 4.76919 5.61563 4.76919 5.47054V2.66514C4.76919 2.43273 4.95759 2.24432 5.19 2.24432Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.12107 0.123253C2.28541 0.287589 2.28541 0.554032 2.12107 0.718369L0.718369 2.12107C0.554032 2.28541 0.287589 2.28541 0.123253 2.12107C-0.0410842 1.95673 -0.0410842 1.69029 0.123253 1.52596L1.52596 0.123253C1.69029 -0.0410842 1.95673 -0.0410842 2.12107 0.123253Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.25893 0.123253C8.09459 0.287589 8.09459 0.554032 8.25893 0.718369L9.66163 2.12107C9.82597 2.28541 10.0924 2.28541 10.2567 2.12107C10.4211 1.95673 10.4211 1.69029 10.2567 1.52596L8.85405 0.123253C8.68971 -0.0410842 8.42327 -0.0410842 8.25893 0.123253Z"
                        fill="white"
                      />
                    </svg>

                    <span class="mt-1 !text-gray-3"> 89 دقیقه</span>
                  </div>
                </div>
              </div>
            </div>
            <VBtn class="rounded-2.4rem">کتاب </VBtn>
          </div>
          <div class="flex justify-between items-center">
            <div flex items-end gap-2>
              <div
                style="background: rgba(141, 153, 174, 30%)"
                class="p-3 rounded-lg w-3rem h-3rem"
              >
                <img w-full src="@/assets/images/svg/1.svg" alt="svg" />
              </div>
              <div class="!flex flex-col items-start">
                <span class="text-lg peyda"
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
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.19 1.4027C2.9434 1.4027 1.12216 3.22394 1.12216 5.47054C1.12216 7.71715 2.9434 9.53838 5.19 9.53838C7.4366 9.53838 9.25784 7.71715 9.25784 5.47054C9.25784 3.22394 7.4366 1.4027 5.19 1.4027ZM0.280541 5.47054C0.280541 2.75912 2.47858 0.561081 5.19 0.561081C7.90142 0.561081 10.0995 2.75912 10.0995 5.47054C10.0995 8.18196 7.90142 10.38 5.19 10.38C2.47858 10.38 0.280541 8.18196 0.280541 5.47054Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.19 2.24432C5.42241 2.24432 5.61081 2.43273 5.61081 2.66514V5.23731L7.09627 6.16572C7.29335 6.2889 7.35327 6.54852 7.23009 6.7456C7.10691 6.94268 6.8473 7.00259 6.65021 6.87941L4.96697 5.82739C4.84393 5.75049 4.76919 5.61563 4.76919 5.47054V2.66514C4.76919 2.43273 4.95759 2.24432 5.19 2.24432Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.12107 0.123253C2.28541 0.287589 2.28541 0.554032 2.12107 0.718369L0.718369 2.12107C0.554032 2.28541 0.287589 2.28541 0.123253 2.12107C-0.0410842 1.95673 -0.0410842 1.69029 0.123253 1.52596L1.52596 0.123253C1.69029 -0.0410842 1.95673 -0.0410842 2.12107 0.123253Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.25893 0.123253C8.09459 0.287589 8.09459 0.554032 8.25893 0.718369L9.66163 2.12107C9.82597 2.28541 10.0924 2.28541 10.2567 2.12107C10.4211 1.95673 10.4211 1.69029 10.2567 1.52596L8.85405 0.123253C8.68971 -0.0410842 8.42327 -0.0410842 8.25893 0.123253Z"
                        fill="white"
                      />
                    </svg>

                    <span class="mt-1 !text-gray-3"> 89 دقیقه</span>
                  </div>
                </div>
              </div>
            </div>
            <VBtn class="rounded-2.4rem">کتاب </VBtn>
          </div>
          <div class="flex justify-between items-center">
            <div flex items-end gap-2>
              <div
                style="background: rgba(141, 153, 174, 30%)"
                class="p-3 rounded-lg w-3rem h-3rem"
              >
                <img w-full src="@/assets/images/svg/1.svg" alt="svg" />
              </div>
              <div class="!flex flex-col items-start">
                <span class="text-lg peyda"
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
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.19 1.4027C2.9434 1.4027 1.12216 3.22394 1.12216 5.47054C1.12216 7.71715 2.9434 9.53838 5.19 9.53838C7.4366 9.53838 9.25784 7.71715 9.25784 5.47054C9.25784 3.22394 7.4366 1.4027 5.19 1.4027ZM0.280541 5.47054C0.280541 2.75912 2.47858 0.561081 5.19 0.561081C7.90142 0.561081 10.0995 2.75912 10.0995 5.47054C10.0995 8.18196 7.90142 10.38 5.19 10.38C2.47858 10.38 0.280541 8.18196 0.280541 5.47054Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.19 2.24432C5.42241 2.24432 5.61081 2.43273 5.61081 2.66514V5.23731L7.09627 6.16572C7.29335 6.2889 7.35327 6.54852 7.23009 6.7456C7.10691 6.94268 6.8473 7.00259 6.65021 6.87941L4.96697 5.82739C4.84393 5.75049 4.76919 5.61563 4.76919 5.47054V2.66514C4.76919 2.43273 4.95759 2.24432 5.19 2.24432Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.12107 0.123253C2.28541 0.287589 2.28541 0.554032 2.12107 0.718369L0.718369 2.12107C0.554032 2.28541 0.287589 2.28541 0.123253 2.12107C-0.0410842 1.95673 -0.0410842 1.69029 0.123253 1.52596L1.52596 0.123253C1.69029 -0.0410842 1.95673 -0.0410842 2.12107 0.123253Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.25893 0.123253C8.09459 0.287589 8.09459 0.554032 8.25893 0.718369L9.66163 2.12107C9.82597 2.28541 10.0924 2.28541 10.2567 2.12107C10.4211 1.95673 10.4211 1.69029 10.2567 1.52596L8.85405 0.123253C8.68971 -0.0410842 8.42327 -0.0410842 8.25893 0.123253Z"
                        fill="white"
                      />
                    </svg>

                    <span class="mt-1 !text-gray-3"> 89 دقیقه</span>
                  </div>
                </div>
              </div>
            </div>
            <VBtn class="rounded-2.4rem">کتاب </VBtn>
          </div>
          <div class="flex justify-between items-center">
            <div flex items-end gap-2>
              <div
                style="background: rgba(141, 153, 174, 30%)"
                class="p-3 rounded-lg w-3rem h-3rem"
              >
                <img w-full src="@/assets/images/svg/1.svg" alt="svg" />
              </div>
              <div class="!flex flex-col items-start">
                <span class="text-lg peyda"
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
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.19 1.4027C2.9434 1.4027 1.12216 3.22394 1.12216 5.47054C1.12216 7.71715 2.9434 9.53838 5.19 9.53838C7.4366 9.53838 9.25784 7.71715 9.25784 5.47054C9.25784 3.22394 7.4366 1.4027 5.19 1.4027ZM0.280541 5.47054C0.280541 2.75912 2.47858 0.561081 5.19 0.561081C7.90142 0.561081 10.0995 2.75912 10.0995 5.47054C10.0995 8.18196 7.90142 10.38 5.19 10.38C2.47858 10.38 0.280541 8.18196 0.280541 5.47054Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.19 2.24432C5.42241 2.24432 5.61081 2.43273 5.61081 2.66514V5.23731L7.09627 6.16572C7.29335 6.2889 7.35327 6.54852 7.23009 6.7456C7.10691 6.94268 6.8473 7.00259 6.65021 6.87941L4.96697 5.82739C4.84393 5.75049 4.76919 5.61563 4.76919 5.47054V2.66514C4.76919 2.43273 4.95759 2.24432 5.19 2.24432Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.12107 0.123253C2.28541 0.287589 2.28541 0.554032 2.12107 0.718369L0.718369 2.12107C0.554032 2.28541 0.287589 2.28541 0.123253 2.12107C-0.0410842 1.95673 -0.0410842 1.69029 0.123253 1.52596L1.52596 0.123253C1.69029 -0.0410842 1.95673 -0.0410842 2.12107 0.123253Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.25893 0.123253C8.09459 0.287589 8.09459 0.554032 8.25893 0.718369L9.66163 2.12107C9.82597 2.28541 10.0924 2.28541 10.2567 2.12107C10.4211 1.95673 10.4211 1.69029 10.2567 1.52596L8.85405 0.123253C8.68971 -0.0410842 8.42327 -0.0410842 8.25893 0.123253Z"
                        fill="white"
                      />
                    </svg>

                    <span class="mt-1 !text-gray-3"> 89 دقیقه</span>
                  </div>
                </div>
              </div>
            </div>
            <VBtn class="rounded-2.4rem">کتاب </VBtn>
          </div>
        </div>
      </VCard>
    </VCol>
  </VRow>

  <VRow>
    <VCol cols="12" md="7">
      <VCard class="pa-5 rounded-xl h-100%">
        <span class="text-3xl peyda"> پیشرفت من </span>
        <div style="display: flex; justify-content: end; gap: 1rem">
          <VProgressCircular
            :rotate="90"
            :size="175"
            :width="20"
            model-value="64"
            color="primary"
          >
            <div class="!flex !flex-center-column text-2xl">
              <span> کلاس </span>
              <span> 64% </span>
            </div>
          </VProgressCircular>
          <VProgressCircular
            :rotate="90"
            :size="175"
            :width="20"
            model-value="12"
            color="primary"
          >
            <div class="!flex !flex-center-column text-2xl">
              <span> تمرین </span>
              <span> 12% </span>
            </div>
          </VProgressCircular>
          <VProgressCircular
            :rotate="90"
            :size="175"
            :width="20"
            model-value="42"
            color="primary"
          >
            <div class="!flex !flex-center-column text-2xl">
              <span> دوره </span>
              <span> 42% </span>
            </div>
          </VProgressCircular>
          <VProgressCircular
            :rotate="90"
            :size="175"
            :width="20"
            model-value="75"
            color="primary"
          >
            <div class="!flex !flex-center-column text-2xl">
              <span> کلاس </span>
              <span> 60% </span>
            </div>
          </VProgressCircular>
        </div>
      </VCard>
    </VCol>
    <VCol cols="12" md="5">
      <VCard
        :image="nelson"
        class="pa-2 rounded-xl min-h-50 h-100% !flex flex-col justify-center px-10 pb-8 peyda"
      >
        <div
          self-start
          class="max-w-75% pb-4 !flex flex-col text-xl leading-loose text-right"
          dir="rtl"
        >
          <span class="!text-gray-3"> بزرگترین ریسک، ریسک نکردن است! </span>
          <span class="!text-gray-3">
            در این دنیا که به سرعت تغییر می کند، تنها استراتژی که شکست را تضمین
            می کند، ریسک نکردن است.
          </span>
        </div>
        <span class="!text-#8D99AE self-end text-3xl"> “نلسون ماندلا” </span>
      </VCard>
    </VCol>
  </VRow>
</template>

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
</style>
