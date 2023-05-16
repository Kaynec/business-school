<script setup lang="ts">
const showDepartment = ref(false);
const showHowMuch = ref(false);
const showDepartmentRef = ref();
const showHowMuchRef = ref();

onClickOutside(showDepartmentRef, () => {
  showDepartment.value = false;
});
onClickOutside(showHowMuchRef, () => {
  showHowMuch.value = false;
});

const ticket = ref({
  title: "",
  departmant: "",
  howMuch: "",
  msg: "",
  file: "",
});

const fileInput = ref();

// Table

const selectedOptions = ref(["Alabama"]);

const states = ["Alabama", "Alaska", "American Samoa"];

const resolveUserStatusVariant = (stat: string) => {
  if (stat === "pending") return "warning";
  if (stat === "active") return "success";
  if (stat === "inactive") return "secondary";

  return "primary";
};

const tickets = ref([
  {
    id: 2656,
    name: "سارا سعیدی",
    isActive: false,
  },
  {
    id: 2657,
    name: "علی بابائی",
    isActive: false,
  },
  {
    id: 2658,
    name: "مهدی مهری زاده",
    isActive: false,
  },
  {
    id: 2659,
    name: "فائزه علی پور",
    isActive: false,
  },
  {
    id: 2660,
    name: "حمیدرضا فکری",
    isActive: false,
  },
]);
</script>

<template>
  <VRow mx-auto>
    <VCol cols="12" md="4">
      <input
        type="text"
        v-model="ticket.title"
        class="w-full h-full rounded-15px bg-#323232 text-white px-2 placeholder-text-white"
        placeholder="انتخاب دوره"
        min-h-15
      />
    </VCol>
    <VCol cols="12" md="4">
      <div
        class="w-full h-full rounded-15px relative bg-#323232 text-white placeholder-text-white flex items-center"
      >
        <span
          v-if="!ticket.departmant"
          class="absolute !text-white right-3 z-100"
        >
          انتخاب کلاس
        </span>
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          :class="{ 'rotate-180': showDepartment }"
          class="absolute !text-white left-3 z-100"
        >
          <path
            d="M7.13397 13.5C7.51887 14.1667 8.48113 14.1667 8.86603 13.5L15.7942 1.5C16.1791 0.833334 15.698 0 14.9282 0H1.0718C0.301997 0 -0.179129 0.833333 0.205771 1.5L7.13397 13.5Z"
            fill="white"
          />
        </svg>
        <div
          class="w-full rounded-15px h-full grow pr-4 flex items-center"
          @click="showDepartment = !showDepartment"
          ref="showDepartmentRef"
        >
          {{ ticket.departmant }}
          <div
            v-if="showDepartment"
            class="absolute top-4rem bg-#262732 gap-4 rounded-15px !flex flex-col z-100 w-full min-h-full left-0"
          >
            <span
              v-for="item in [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]"
              class="p-2 hover:bg-#262755 transition-350"
              @click.stop="
                () => {
                  ticket.departmant = item.toString();
                  showDepartment = false;
                }
              "
              >{{ item }}
            </span>
          </div>
        </div>
      </div>
    </VCol>
    <VCol cols="12" md="4">
      <div
        class="w-full h-full rounded-15px relative bg-#323232 text-white placeholder-text-white flex items-center"
        @click="showHowMuch = !showHowMuch"
        ref="showHowMuchRef"
      >
        <span v-if="!ticket.howMuch" class="absolute !text-white right-3 z-100">
          انتخاب جلسه
        </span>
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          :class="{ 'rotate-180': showHowMuch }"
          class="absolute !text-white left-3 z-100"
        >
          <path
            d="M7.13397 13.5C7.51887 14.1667 8.48113 14.1667 8.86603 13.5L15.7942 1.5C16.1791 0.833334 15.698 0 14.9282 0H1.0718C0.301997 0 -0.179129 0.833333 0.205771 1.5L7.13397 13.5Z"
            fill="white"
          />
        </svg>

        <div
          class="w-full rounded-15px h-full grow pr-4 z-1000 flex items-center"
        >
          {{ ticket.howMuch }}
          <div
            v-if="showHowMuch"
            class="absolute top-5rem bg-#262732 gap-4 rounded-15px !flex flex-col z-100 w-full min-h-full left-0"
          >
            <span
              v-for="item in [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]"
              class="p-2 hover:bg-#262755 transition-350"
              @click.stop="
                () => {
                  ticket.howMuch = item.toString();
                  showHowMuch = false;
                }
              "
              >{{ item }}
            </span>
          </div>
        </div>
      </div>
    </VCol>
  </VRow>

  <VCard class="mt-8">
    <VTable class="text-no-wrap max-h-70vh">
      <!-- 👉 table head -->
      <thead>
        <tr>
          <th scope="col" class="!w-60%">نام دانشجو</th>
          <th scope="col">حاضر</th>
          <th scope="col">غایب</th>
        </tr>
      </thead>

      <!-- 👉 table body -->
      <tbody class="table-content">
        <tr v-for="ticket in tickets" :key="ticket.id">
          <!-- 👉 User -->

          <td class="!w-60%">
            {{ ticket.name }}
          </td>

          <!-- 👉 Status -->
          <td>
            <div class="!grid place-content-center">
              <VCheckbox v-model="ticket.isActive" color="#fff" :value="true">
              </VCheckbox>
            </div>
          </td>
          <td>
            <div class="!grid place-content-center">
              <VCheckbox v-model="ticket.isActive" color="#fff" :value="false">
              </VCheckbox>
            </div>
          </td>
        </tr>
      </tbody>

      <!-- 👉 table footer  -->
      <tfoot v-show="!tickets.length">
        <tr>
          <td colspan="7" class="text-center">محتوایی برای نمایش وجود ندارد</td>
        </tr>
      </tfoot>
    </VTable>
  </VCard>
</template>

<style lang="scss" scoped>
i.v-icon.v-icon {
  color: red;
}

.grid {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
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

.text-capitalize {
  text-transform: capitalize;
}

.user-list-name:not(:hover) {
  color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
}
</style>
