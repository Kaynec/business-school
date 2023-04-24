<script setup lang="ts">
import avatar1 from "@images/avatars/avatar-1.png";
import { Ref } from "vue";

const avatars = [avatar1];

const isCardDetailsVisible = ref(false);
//
const selectedOptions = ref(["Alabama"]);

const states = ["Alabama", "Alaska", "American Samoa"];
//
const { updateBg } = inject("showBackgroundImage") as {
  showBackgroundImage: Ref<boolean>;
  updateBg: (boolean: boolean) => void;
};
onMounted(() => {
  updateBg(true);
});
onBeforeUnmount(() => {
  updateBg(false);
});
//
const data = ref([
  {
    code: 414,
    backgroundColor: "rgba(82, 174, 50, 30%)",
    color: "#52AE32",
    name: "Self leadership",
    startDate: "1400/10/26",
    endDate: "1400/10/26",
    sarfasl: 12,
    attendance: "حضوری",
    plo: false,
    circleColor: "#52AE32",
  },
  {
    code: 414,
    backgroundColor: "rgba(108, 190, 153, 0.3)",
    color: "#6CBE99",
    name: "Self leadership",
    startDate: "1400/10/26",
    endDate: "1400/10/26",
    sarfasl: 12,
    attendance: "حضوری",
    plo: true,
    circleColor: "#6CBE99",
  },
  {
    code: 414,
    backgroundColor: "rgba(247, 166, 0, 0.3)",
    color: "#F7A600",
    name: "Self leadership",
    startDate: "1400/10/26",
    endDate: "1400/10/26",
    sarfasl: 12,
    attendance: "حضوری",
    plo: true,
    circleColor: "#F7A600",
  },
  {
    code: 414,
    backgroundColor: "rgba(129, 73, 151, 0.3)",
    color: "#814997",
    name: "Self leadership",
    startDate: "1400/10/26",
    endDate: "1400/10/26",
    sarfasl: 12,
    attendance: "حضوری",
    plo: true,
    circleColor: "#814997",
  },
  {
    code: 414,
    backgroundColor: "rgba(255, 238, 0, 0.3)",
    color: "#FFEE00",
    name: "Self leadership",
    startDate: "1400/10/26",
    endDate: "1400/10/26",
    sarfasl: 12,
    attendance: "حضوری",
    plo: true,
    circleColor: "#FFEE00",
  },
  {
    code: 414,
    backgroundColor: "rgba(141, 153, 174, 0.3)",
    color: "#8D99AE",
    name: "Self leadership",
    startDate: "1400/10/26",
    endDate: "1400/10/26",
    sarfasl: 12,
    attendance: "حضوری",
    plo: true,
    circleColor: "#8D99AE",
  },
]);
</script>

<template>
  <VSelect
    v-model="selectedOptions"
    :items="states"
    label="دوره ها"
    style="border-radius: 250px; margin-bottom: 2rem"
    class="rounded-xl"
  />

  <VRow>
    <VCol cols="12" md="6" lg="4" v-for="item in data" :key="item.code">
      <VCard
        class="rounded-xl gap-10 d-flex flex-column"
        style="background: rgba(40, 40, 40, 80%)"
      >
        <VCardItem class="d-flex justify-center">
          <VProgressCircular
            :rotate="90"
            :size="200"
            :width="6"
            model-value="75"
            :color="item.circleColor"
          >
            <img
              :src="avatar1"
              style="width: 90%; border-radius: 999rem; object-fit: cover"
            />
          </VProgressCircular>
        </VCardItem>

        <div class="d-flex flex-column justify-center align-center gap-2">
          <span class="peyda text-center">کددوره : {{ item.code }}</span>
          <h1 style="color: white" class="peyda">{{ item.name }}</h1>
        </div>
        <div class="d-flex justify-center align-center gap-2">
          <div
            class="flex flex-col justify-center items-center gap-4 ma-2"
            style="color: white"
          >
            <div
              :style="`
              padding: 0.5rem;
              border-radius: 5px;
              background: ${item.backgroundColor}
              `"
            >
              <v-icon large :style="`color:${item.color} `">mdi-domain</v-icon>
            </div>
            <span class="peyda text-center"> شروع: {{ item.startDate }} </span>
          </div>
          <div
            class="flex flex-col justify-center items-center gap-4 ma-2"
            style="color: white"
          >
            <div
              :style="`
              padding: 0.5rem;
              border-radius: 5px;
              background: ${item.backgroundColor}
              `"
            >
              <v-icon large :style="`color:${item.color} `">mdi-book</v-icon>
            </div>
            <span class="peyda text-center"> سرفصل: {{ item.sarfasl }} </span>
          </div>
          <div
            class="flex flex-col justify-center items-center gap-4 ma-2"
            style="color: white"
          >
            <div
              :style="`
              padding: 0.5rem;
              border-radius: 5px;
              background: ${item.backgroundColor}
              `"
            >
              <v-icon large :style="`color:${item.color} `"
                >mdi-office-building</v-icon
              >
            </div>
            <span class="peyda text-center">
              نحوه برگزاری: {{ item.attendance }}</span
            >
          </div>
          <div
            class="flex flex-col justify-center items-center gap-4 ma-2"
            style="color: white"
          >
            <div
              :style="`
              padding: 0.5rem;
              border-radius: 5px;
              background: ${item.backgroundColor}
              `"
            >
              <v-icon large :style="`color:${item.color} `">mdi-domain</v-icon>
            </div>
            <span class="peyda text-center"> پایان: {{ item.endDate }} </span>
          </div>
        </div>
        <!--  -->
        <div class="d-flex justify-center align-center gap-2">
          <!-- TODO Change This Later to Make it Dynamic -->

          <div
            style="
              display: flex;
              width: 2.75rem;
              height: 2.75rem;
              align-items: center;
              padding: 0.5rem;
              border: 1px solid rgb(129, 73, 151);
              border-radius: 10px;
              background: rgba(129, 73, 151, 20%);
              justify-items: center;
            "
            class="peyda"
            cursor-pointer
            @click="
              $router.push({
                name: 'apps-courses-description',
              })
            "
            v-if="!item.plo"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.518 5.998L7 4.73L6.48 5.998H7.517H7.518ZM2.75 0C2.02065 0 1.32118 0.289731 0.805456 0.805456C0.289731 1.32118 0 2.02065 0 2.75V15.25C0 15.9793 0.289731 16.6788 0.805456 17.1945C1.32118 17.7103 2.02065 18 2.75 18H9.022C8.35284 16.9554 7.99809 15.7405 8 14.5C8 13.614 8.177 12.77 8.498 12H2.75C2.55109 12 2.36032 11.921 2.21967 11.7803C2.07902 11.6397 2 11.4489 2 11.25C2 11.0511 2.07902 10.8603 2.21967 10.7197C2.36032 10.579 2.55109 10.5 2.75 10.5H9.376C9.98339 9.72068 10.7607 9.09036 11.6487 8.65711C12.5367 8.22385 13.5119 7.9991 14.5 8C15.7405 7.99809 16.9554 8.35284 18 9.022V2.75C18 2.02065 17.7103 1.32118 17.1945 0.805456C16.6788 0.289731 15.9793 0 15.25 0H2.75ZM6.25 15.5H2.75C2.55109 15.5 2.36032 15.421 2.21967 15.2803C2.07902 15.1397 2 14.9489 2 14.75C2 14.5511 2.07902 14.3603 2.21967 14.2197C2.36032 14.079 2.55109 14 2.75 14H6.25C6.44891 14 6.63968 14.079 6.78033 14.2197C6.92098 14.3603 7 14.5511 7 14.75C7 14.9489 6.92098 15.1397 6.78033 15.2803C6.63968 15.421 6.44891 15.5 6.25 15.5ZM7.694 2.464L9.942 7.966C10.0173 8.15019 10.0164 8.35676 9.9394 8.54027C9.86242 8.72377 9.71569 8.86918 9.5315 8.9445C9.34731 9.01982 9.14074 9.01889 8.95723 8.9419C8.77373 8.86492 8.62832 8.71819 8.553 8.534L8.13 7.498H5.868L5.444 8.534C5.36613 8.71432 5.22063 8.85689 5.03877 8.93109C4.8569 9.00528 4.65319 9.00517 4.47141 8.93078C4.28963 8.85639 4.14428 8.71366 4.0666 8.53326C3.98893 8.35285 3.98512 8.14918 4.056 7.966L6.306 2.464C6.36243 2.32629 6.45855 2.20848 6.58213 2.12556C6.70572 2.04264 6.85118 1.99837 7 1.99837C7.14882 1.99837 7.29428 2.04264 7.41787 2.12556C7.54145 2.20848 7.63757 2.32629 7.694 2.464ZM13.5 2.747V3.997H14.75C14.9489 3.997 15.1397 4.07602 15.2803 4.21667C15.421 4.35732 15.5 4.54809 15.5 4.747C15.5 4.94591 15.421 5.13668 15.2803 5.27733C15.1397 5.41798 14.9489 5.497 14.75 5.497H13.5V6.747C13.5 6.94591 13.421 7.13668 13.2803 7.27733C13.1397 7.41798 12.9489 7.497 12.75 7.497C12.5511 7.497 12.3603 7.41798 12.2197 7.27733C12.079 7.13668 12 6.94591 12 6.747V5.497H10.75C10.5511 5.497 10.3603 5.41798 10.2197 5.27733C10.079 5.13668 10 4.94591 10 4.747C10 4.54809 10.079 4.35732 10.2197 4.21667C10.3603 4.07602 10.5511 3.997 10.75 3.997H12V2.747C12 2.54809 12.079 2.35732 12.2197 2.21667C12.3603 2.07602 12.5511 1.997 12.75 1.997C12.9489 1.997 13.1397 2.07602 13.2803 2.21667C13.421 2.35732 13.5 2.54809 13.5 2.747ZM20 14.5C20 13.0413 19.4205 11.6424 18.3891 10.6109C17.3576 9.57946 15.9587 9 14.5 9C13.0413 9 11.6424 9.57946 10.6109 10.6109C9.57946 11.6424 9 13.0413 9 14.5C9 15.9587 9.57946 17.3576 10.6109 18.3891C11.6424 19.4205 13.0413 20 14.5 20C15.9587 20 17.3576 19.4205 18.3891 18.3891C19.4205 17.3576 20 15.9587 20 14.5ZM15 15L15.001 17.503C15.001 17.6356 14.9483 17.7628 14.8546 17.8566C14.7608 17.9503 14.6336 18.003 14.501 18.003C14.3684 18.003 14.2412 17.9503 14.1474 17.8566C14.0537 17.7628 14.001 17.6356 14.001 17.503V15H11.496C11.3634 15 11.2362 14.9473 11.1424 14.8536C11.0487 14.7598 10.996 14.6326 10.996 14.5C10.996 14.3674 11.0487 14.2402 11.1424 14.1464C11.2362 14.0527 11.3634 14 11.496 14H14V11.5C14 11.3674 14.0527 11.2402 14.1464 11.1464C14.2402 11.0527 14.3674 11 14.5 11C14.6326 11 14.7598 11.0527 14.8536 11.1464C14.9473 11.2402 15 11.3674 15 11.5V14H17.503C17.6356 14 17.7628 14.0527 17.8566 14.1464C17.9503 14.2402 18.003 14.3674 18.003 14.5C18.003 14.6326 17.9503 14.7598 17.8566 14.8536C17.7628 14.9473 17.6356 15 17.503 15H15.001H15Z"
                fill="white"
              />
            </svg>
          </div>
          <!--  -->
          <div
            style="
              display: flex;
              width: 2.75rem;
              height: 2.75rem;
              align-items: center;
              padding: 0.5rem;
              border: 1px solid #e30613;
              border-radius: 10px;
              background: rgba(227, 6, 19, 20%);
              justify-items: center;
            "
            v-else
            class="peyda"
            cursor-pointer
            @click="
              $router.push({
                name: 'apps-courses-plo',
              })
            "
          >
            PLO
          </div>
          <!-- TODO Change This Later to Make it Dynamic -->

          <div
            style="
              display: flex;
              width: 2.75rem;
              height: 2.75rem;
              align-items: center;
              padding: 0.5rem;
              border: 1px solid #e30613;
              border-radius: 10px;
              background: rgba(227, 6, 19, 20%);
              justify-items: center;
            "
            cursor-pointer
            @click="
              $router.push({
                name: 'apps-courses-calendar',
              })
            "
          >
            <v-icon large style="color: #fff">mdi-domain</v-icon>
          </div>
          <!-- TODO Change This Later to Make it Dynamic -->
          <VBtn
            class="rounded-lg peyda"
            style="
              height: 2.75rem;
              background: #e30613 !important;
              padding-inline: 4rem;
            "
            color="error"
            @click="
              $router.push({
                name: 'apps-courses-info',
              })
            "
          >
            جزئیات دوره
          </VBtn>
        </div>
      </VCard>
    </VCol>
  </VRow>
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
