<script setup lang="ts">
import avatar1 from "@images/avatars/avatar-1.png";

const avatars = [avatar1];

const isCardDetailsVisible = ref(false);
//
const selectedOptions = ref(["Alabama"]);

const states = ["Alabama", "Alaska", "American Samoa"];
//

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
    style="border-radius: 250px; margin-block-end: 2rem"
    class="rounded-xl"
  />

  <VRow>
    <VCol cols="12" md="6" lg="4" v-for="item in data" :key="item.code">
      <VCard class="rounded-xl gap-5 !flex flex-col">
        <VCardItem class="d-flex justify-center">
          <VProgressCircular
            :rotate="90"
            :size="125"
            :width="7"
            model-value="75"
            :color="item.circleColor"
          >
            <img
              :src="avatar1"
              style="border-radius: 999rem; inline-size: 90%; object-fit: cover"
            />
          </VProgressCircular>
        </VCardItem>

        <div class="!flex flex-col justify-center align-center">
          <span class="peyda text-center text-xs"
            >کددوره : {{ item.code }}</span
          >
          <h2 style="color: white" class="peyda">{{ item.name }}</h2>
        </div>
        <div class="d-flex justify-center items-center gap-5">
          <div
            class="!flex flex-col justify-center items-center gap-4 mx-1"
            style="color: white"
          >
            <div
              :style="`
              padding: 0.375rem;
              border-radius: 5px;
              background: ${item.backgroundColor}
              `"
              flex-center-row
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.33154 2.66937V1"
                  :stroke="item.color"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.6616 2.66937V1"
                  :stroke="item.color"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.3987 1.83447H3.59319C2.15883 1.83447 1 2.9933 1 4.42766V13.4066C1 14.841 2.15883 15.9998 3.59319 15.9998H13.4068C14.8412 15.9998 16 14.841 16 13.4066V4.42766C15.9919 2.9933 14.8331 1.83447 13.3987 1.83447Z"
                  :stroke="item.color"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 5.17334H15.9919"
                  :stroke="item.color"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.3577 8.49599C13.8053 8.49599 14.1681 8.13317 14.1681 7.68562C14.1681 7.23806 13.8053 6.87524 13.3577 6.87524C12.9102 6.87524 12.5474 7.23806 12.5474 7.68562C12.5474 8.13317 12.9102 8.49599 13.3577 8.49599Z"
                  :fill="item.color"
                />
                <path
                  d="M10.116 8.49599C10.5636 8.49599 10.9264 8.13317 10.9264 7.68562C10.9264 7.23806 10.5636 6.87524 10.116 6.87524C9.66848 6.87524 9.30566 7.23806 9.30566 7.68562C9.30566 8.13317 9.66848 8.49599 10.116 8.49599Z"
                  :fill="item.color"
                />
                <path
                  d="M6.8758 8.49599C7.32336 8.49599 7.68618 8.13317 7.68618 7.68562C7.68618 7.23806 7.32336 6.87524 6.8758 6.87524C6.42825 6.87524 6.06543 7.23806 6.06543 7.68562C6.06543 8.13317 6.42825 8.49599 6.8758 8.49599Z"
                  :fill="item.color"
                />
                <path
                  d="M3.6341 8.49599C4.08166 8.49599 4.44448 8.13317 4.44448 7.68562C4.44448 7.23806 4.08166 6.87524 3.6341 6.87524C3.18655 6.87524 2.82373 7.23806 2.82373 7.68562C2.82373 8.13317 3.18655 8.49599 3.6341 8.49599Z"
                  :fill="item.color"
                />
                <path
                  d="M13.3577 11.3244C13.8053 11.3244 14.1681 10.9615 14.1681 10.514C14.1681 10.0664 13.8053 9.70361 13.3577 9.70361C12.9102 9.70361 12.5474 10.0664 12.5474 10.514C12.5474 10.9615 12.9102 11.3244 13.3577 11.3244Z"
                  :fill="item.color"
                />
                <path
                  d="M10.116 11.3244C10.5636 11.3244 10.9264 10.9615 10.9264 10.514C10.9264 10.0664 10.5636 9.70361 10.116 9.70361C9.66848 9.70361 9.30566 10.0664 9.30566 10.514C9.30566 10.9615 9.66848 11.3244 10.116 11.3244Z"
                  :fill="item.color"
                />
                <path
                  d="M6.8758 11.3244C7.32336 11.3244 7.68618 10.9615 7.68618 10.514C7.68618 10.0664 7.32336 9.70361 6.8758 9.70361C6.42825 9.70361 6.06543 10.0664 6.06543 10.514C6.06543 10.9615 6.42825 11.3244 6.8758 11.3244Z"
                  :fill="item.color"
                />
                <path
                  d="M3.6341 11.3244C4.08166 11.3244 4.44448 10.9615 4.44448 10.514C4.44448 10.0664 4.08166 9.70361 3.6341 9.70361C3.18655 9.70361 2.82373 10.0664 2.82373 10.514C2.82373 10.9615 3.18655 11.3244 3.6341 11.3244Z"
                  :fill="item.color"
                />
                <path
                  d="M10.116 14.1444C10.5636 14.1444 10.9264 13.7816 10.9264 13.3341C10.9264 12.8865 10.5636 12.5237 10.116 12.5237C9.66848 12.5237 9.30566 12.8865 9.30566 13.3341C9.30566 13.7816 9.66848 14.1444 10.116 14.1444Z"
                  :fill="item.color"
                />
                <path
                  d="M6.8758 14.1444C7.32336 14.1444 7.68618 13.7816 7.68618 13.3341C7.68618 12.8865 7.32336 12.5237 6.8758 12.5237C6.42825 12.5237 6.06543 12.8865 6.06543 13.3341C6.06543 13.7816 6.42825 14.1444 6.8758 14.1444Z"
                  :fill="item.color"
                />
                <path
                  d="M3.6341 14.1444C4.08166 14.1444 4.44448 13.7816 4.44448 13.3341C4.44448 12.8865 4.08166 12.5237 3.6341 12.5237C3.18655 12.5237 2.82373 12.8865 2.82373 13.3341C2.82373 13.7816 3.18655 14.1444 3.6341 14.1444Z"
                  :fill="item.color"
                />
              </svg>
            </div>
            <span class="peyda text-center text-xs">
              شروع: {{ item.startDate }}
            </span>
          </div>
          <div
            class="!flex flex-col justify-center items-center gap-4 mx-1"
            style="color: white"
          >
            <div
              :style="`
              padding: 0.375rem;
              border-radius: 5px;
              background: ${item.backgroundColor}
              `"
              flex-center-row
            >
              <svg
                width="15"
                height="17"
                viewBox="0 0 15 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 14.3333V2.66667C1 2.22464 1.17559 1.80072 1.48816 1.48816C1.80072 1.17559 2.22464 1 2.66667 1H13.8333C13.9659 1 14.0931 1.05268 14.1869 1.14645C14.2807 1.24021 14.3333 1.36739 14.3333 1.5V12.4283"
                  :stroke="item.color"
                  stroke-linecap="round"
                />
                <path
                  d="M4.33398 1V7.66667L6.41732 6.33333L8.50065 7.66667V1"
                  :stroke="item.color"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.66602 12.6666H14.3327M2.66602 16H14.3327"
                  :stroke="item.color"
                  stroke-linecap="round"
                />
                <path
                  d="M2.66667 16C2.22464 16 1.80072 15.8244 1.48816 15.5118C1.17559 15.1992 1 14.7753 1 14.3333C1 13.8913 1.17559 13.4673 1.48816 13.1548C1.80072 12.8422 2.22464 12.6666 2.66667 12.6666"
                  :stroke="item.color"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span class="peyda text-center text-xs">
              سرفصل: {{ item.sarfasl }}
            </span>
          </div>
          <div
            class="!flex flex-col justify-center items-center gap-4 mx-1"
            style="color: white"
          >
            <div
              :style="`
              padding: 0.375rem;
              border-radius: 5px;
              background: ${item.backgroundColor}
              `"
              flex-center-row
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.2 5.1H11.05C11.2754 5.1 11.4916 5.01045 11.651 4.85104C11.8104 4.69163 11.9 4.47543 11.9 4.25C11.9 4.02457 11.8104 3.80837 11.651 3.64896C11.4916 3.48955 11.2754 3.4 11.05 3.4H10.2C9.97457 3.4 9.75837 3.48955 9.59896 3.64896C9.43955 3.80837 9.35 4.02457 9.35 4.25C9.35 4.47543 9.43955 4.69163 9.59896 4.85104C9.75837 5.01045 9.97457 5.1 10.2 5.1ZM10.2 8.5H11.05C11.2754 8.5 11.4916 8.41045 11.651 8.25104C11.8104 8.09163 11.9 7.87543 11.9 7.65C11.9 7.42457 11.8104 7.20837 11.651 7.04896C11.4916 6.88955 11.2754 6.8 11.05 6.8H10.2C9.97457 6.8 9.75837 6.88955 9.59896 7.04896C9.43955 7.20837 9.35 7.42457 9.35 7.65C9.35 7.87543 9.43955 8.09163 9.59896 8.25104C9.75837 8.41045 9.97457 8.5 10.2 8.5ZM5.95 5.1H6.8C7.02543 5.1 7.24163 5.01045 7.40104 4.85104C7.56045 4.69163 7.65 4.47543 7.65 4.25C7.65 4.02457 7.56045 3.80837 7.40104 3.64896C7.24163 3.48955 7.02543 3.4 6.8 3.4H5.95C5.72457 3.4 5.50837 3.48955 5.34896 3.64896C5.18955 3.80837 5.1 4.02457 5.1 4.25C5.1 4.47543 5.18955 4.69163 5.34896 4.85104C5.50837 5.01045 5.72457 5.1 5.95 5.1ZM5.95 8.5H6.8C7.02543 8.5 7.24163 8.41045 7.40104 8.25104C7.56045 8.09163 7.65 7.87543 7.65 7.65C7.65 7.42457 7.56045 7.20837 7.40104 7.04896C7.24163 6.88955 7.02543 6.8 6.8 6.8H5.95C5.72457 6.8 5.50837 6.88955 5.34896 7.04896C5.18955 7.20837 5.1 7.42457 5.1 7.65C5.1 7.87543 5.18955 8.09163 5.34896 8.25104C5.50837 8.41045 5.72457 8.5 5.95 8.5ZM16.15 15.3H15.3V0.85C15.3 0.624566 15.2104 0.408365 15.051 0.248959C14.8916 0.0895533 14.6754 0 14.45 0H2.55C2.32457 0 2.10837 0.0895533 1.94896 0.248959C1.78955 0.408365 1.7 0.624566 1.7 0.85V15.3H0.85C0.624566 15.3 0.408365 15.3896 0.248959 15.549C0.0895533 15.7084 0 15.9246 0 16.15C0 16.3754 0.0895533 16.5916 0.248959 16.751C0.408365 16.9104 0.624566 17 0.85 17H16.15C16.3754 17 16.5916 16.9104 16.751 16.751C16.9104 16.5916 17 16.3754 17 16.15C17 15.9246 16.9104 15.7084 16.751 15.549C16.5916 15.3896 16.3754 15.3 16.15 15.3ZM9.35 15.3H7.65V11.9H9.35V15.3ZM13.6 15.3H11.05V11.05C11.05 10.8246 10.9604 10.6084 10.801 10.449C10.6416 10.2896 10.4254 10.2 10.2 10.2H6.8C6.57457 10.2 6.35837 10.2896 6.19896 10.449C6.03955 10.6084 5.95 10.8246 5.95 11.05V15.3H3.4V1.7H13.6V15.3Z"
                  :fill="item.color"
                />
              </svg>
            </div>
            <span class="peyda text-center text-xs">
              نحوه برگزاری: {{ item.attendance }}</span
            >
          </div>
          <div
            class="!flex flex-col justify-center items-center gap-4 mx-1"
            style="color: white"
          >
            <div
              :style="`
              padding: 0.375rem;
              border-radius: 5px;
              background: ${item.backgroundColor}
              `"
              flex-center-row
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.33154 2.66937V1"
                  :stroke="item.color"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.6616 2.66937V1"
                  :stroke="item.color"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.3987 1.83447H3.59319C2.15883 1.83447 1 2.9933 1 4.42766V13.4066C1 14.841 2.15883 15.9998 3.59319 15.9998H13.4068C14.8412 15.9998 16 14.841 16 13.4066V4.42766C15.9919 2.9933 14.8331 1.83447 13.3987 1.83447Z"
                  :stroke="item.color"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 5.17334H15.9919"
                  :stroke="item.color"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.3577 8.49599C13.8053 8.49599 14.1681 8.13317 14.1681 7.68562C14.1681 7.23806 13.8053 6.87524 13.3577 6.87524C12.9102 6.87524 12.5474 7.23806 12.5474 7.68562C12.5474 8.13317 12.9102 8.49599 13.3577 8.49599Z"
                  :fill="item.color"
                />
                <path
                  d="M10.116 8.49599C10.5636 8.49599 10.9264 8.13317 10.9264 7.68562C10.9264 7.23806 10.5636 6.87524 10.116 6.87524C9.66848 6.87524 9.30566 7.23806 9.30566 7.68562C9.30566 8.13317 9.66848 8.49599 10.116 8.49599Z"
                  :fill="item.color"
                />
                <path
                  d="M6.8758 8.49599C7.32336 8.49599 7.68618 8.13317 7.68618 7.68562C7.68618 7.23806 7.32336 6.87524 6.8758 6.87524C6.42825 6.87524 6.06543 7.23806 6.06543 7.68562C6.06543 8.13317 6.42825 8.49599 6.8758 8.49599Z"
                  :fill="item.color"
                />
                <path
                  d="M3.6341 8.49599C4.08166 8.49599 4.44448 8.13317 4.44448 7.68562C4.44448 7.23806 4.08166 6.87524 3.6341 6.87524C3.18655 6.87524 2.82373 7.23806 2.82373 7.68562C2.82373 8.13317 3.18655 8.49599 3.6341 8.49599Z"
                  :fill="item.color"
                />
                <path
                  d="M13.3577 11.3244C13.8053 11.3244 14.1681 10.9615 14.1681 10.514C14.1681 10.0664 13.8053 9.70361 13.3577 9.70361C12.9102 9.70361 12.5474 10.0664 12.5474 10.514C12.5474 10.9615 12.9102 11.3244 13.3577 11.3244Z"
                  :fill="item.color"
                />
                <path
                  d="M10.116 11.3244C10.5636 11.3244 10.9264 10.9615 10.9264 10.514C10.9264 10.0664 10.5636 9.70361 10.116 9.70361C9.66848 9.70361 9.30566 10.0664 9.30566 10.514C9.30566 10.9615 9.66848 11.3244 10.116 11.3244Z"
                  :fill="item.color"
                />
                <path
                  d="M6.8758 11.3244C7.32336 11.3244 7.68618 10.9615 7.68618 10.514C7.68618 10.0664 7.32336 9.70361 6.8758 9.70361C6.42825 9.70361 6.06543 10.0664 6.06543 10.514C6.06543 10.9615 6.42825 11.3244 6.8758 11.3244Z"
                  :fill="item.color"
                />
                <path
                  d="M3.6341 11.3244C4.08166 11.3244 4.44448 10.9615 4.44448 10.514C4.44448 10.0664 4.08166 9.70361 3.6341 9.70361C3.18655 9.70361 2.82373 10.0664 2.82373 10.514C2.82373 10.9615 3.18655 11.3244 3.6341 11.3244Z"
                  :fill="item.color"
                />
                <path
                  d="M10.116 14.1444C10.5636 14.1444 10.9264 13.7816 10.9264 13.3341C10.9264 12.8865 10.5636 12.5237 10.116 12.5237C9.66848 12.5237 9.30566 12.8865 9.30566 13.3341C9.30566 13.7816 9.66848 14.1444 10.116 14.1444Z"
                  :fill="item.color"
                />
                <path
                  d="M6.8758 14.1444C7.32336 14.1444 7.68618 13.7816 7.68618 13.3341C7.68618 12.8865 7.32336 12.5237 6.8758 12.5237C6.42825 12.5237 6.06543 12.8865 6.06543 13.3341C6.06543 13.7816 6.42825 14.1444 6.8758 14.1444Z"
                  :fill="item.color"
                />
                <path
                  d="M3.6341 14.1444C4.08166 14.1444 4.44448 13.7816 4.44448 13.3341C4.44448 12.8865 4.08166 12.5237 3.6341 12.5237C3.18655 12.5237 2.82373 12.8865 2.82373 13.3341C2.82373 13.7816 3.18655 14.1444 3.6341 14.1444Z"
                  :fill="item.color"
                />
              </svg>
            </div>
            <span class="peyda text-center text-xs">
              پایان: {{ item.endDate }}
            </span>
          </div>
        </div>
        <!--  -->
        <div class="d-flex justify-center align-center gap-3">
          <!-- TODO Change This Later to Make it Dynamic -->

          <!--  -->
          <div
            style="
              display: flex;
              align-items: center;
              padding: 0.5rem;
              border: 1px solid #e30613;
              border-radius: 10px;
              background: rgba(227, 6, 19, 20%);
              block-size: 2.75rem;
              inline-size: 2.75rem;
              justify-items: center;
            "
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
              align-items: center;
              justify-content: center;
              padding: 0.5rem;
              border: 1px solid #e30613;
              border-radius: 10px;
              background: rgba(227, 6, 19, 20%);
              block-size: 2.75rem;
              inline-size: 2.75rem;
            "
            cursor-pointer
            @click="
              $router.push({
                name: 'apps-courses-calendar',
              })
            "
          >
            <svg
              width="21"
              height="22"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.69445 2.86612C3.69445 2.7077 3.69445 2.62849 3.64202 2.58359C3.5896 2.53869 3.51322 2.55056 3.36047 2.57432C2.53863 2.70213 1.92811 2.93352 1.42885 3.35245C1.25047 3.50213 1.0855 3.6671 0.935823 3.84547C0 4.96074 0 6.63122 0 9.97218C0 13.3131 0 14.9836 0.935823 16.0989C1.0855 16.2773 1.25047 16.4422 1.42885 16.5919C2.54412 17.5277 4.2146 17.5277 7.55556 17.5277H9.44444C12.7854 17.5277 14.4559 17.5277 15.5712 16.5919C15.7495 16.4422 15.9145 16.2773 16.0642 16.0989C17 14.9836 17 13.3131 17 9.97218C17 6.63122 17 4.96074 16.0642 3.84547C15.9145 3.6671 15.7495 3.50213 15.5712 3.35245C15.0719 2.93352 14.4614 2.70213 13.6395 2.57432C13.4868 2.55057 13.4104 2.53869 13.358 2.58359C13.3056 2.62849 13.3056 2.7077 13.3056 2.86612L13.3056 4.77773C13.3056 5.60616 12.634 6.27773 11.8056 6.27773C10.9771 6.27773 10.3056 5.60616 10.3056 4.77773L10.3056 2.71656C10.3056 2.57543 10.3056 2.50486 10.2617 2.46094C10.2178 2.41701 10.1473 2.41695 10.0063 2.41681C9.82444 2.41663 9.63722 2.41663 9.44444 2.41663H7.55556C7.36278 2.41663 7.17556 2.41663 6.99369 2.41681C6.8527 2.41695 6.78221 2.41701 6.73833 2.46094C6.69445 2.50486 6.69445 2.57543 6.69445 2.71656L6.69445 4.77773C6.69445 5.60616 6.02288 6.27773 5.19445 6.27773C4.36602 6.27773 3.69445 5.60616 3.69445 4.77773L3.69445 2.86612Z"
                fill="white"
              />
              <path
                d="M5.19433 1L5.19434 4.77778"
                stroke="white"
                stroke-linecap="round"
              />
              <path
                d="M11.8057 1L11.8057 4.77778"
                stroke="white"
                stroke-linecap="round"
              />
              <circle cx="4.25005" cy="8.5556" r="0.472222" fill="#222222" />
              <circle cx="7.08355" cy="8.5556" r="0.472222" fill="#222222" />
              <circle cx="9.91656" cy="8.5556" r="0.472222" fill="#222222" />
              <circle cx="12.7501" cy="8.5556" r="0.472222" fill="#222222" />
              <circle cx="4.25005" cy="11.3888" r="0.472222" fill="#222222" />
              <circle cx="7.08355" cy="11.3888" r="0.472222" fill="#222222" />
              <circle cx="9.91656" cy="11.3888" r="0.472222" fill="#222222" />
              <circle cx="12.7501" cy="11.3888" r="0.472222" fill="#222222" />
              <circle cx="4.25005" cy="14.2222" r="0.472222" fill="#222222" />
              <circle cx="7.08355" cy="14.2222" r="0.472222" fill="#222222" />
              <circle cx="9.91656" cy="14.2222" r="0.472222" fill="#222222" />
              <circle cx="12.7501" cy="14.2222" r="0.472222" fill="#222222" />
            </svg>
          </div>
          <!-- TODO Change This Later to Make it Dynamic -->
          <VBtn
            class="rounded-lg peyda"
            style="
              background: #e30613 !important;
              block-size: 2.75rem;
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

<style lang="scss" scoped>
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
