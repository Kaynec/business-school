<script setup lang="ts">
import showSetDescriptionForStudent from "@/views/apps/SetDescriptionForStudent.vue";
const showDepartment = ref(false);
const showClass = ref(false);
const showDepartmentRef = ref();
const showClassRef = ref();

onClickOutside(showDepartmentRef, () => {
  showDepartment.value = false;
});
onClickOutside(showClassRef, () => {
  showClass.value = false;
});

const student = ref({
  title: "",
  course: "",
  Class: "",
  msg: "",
  file: "",
});

const students = ref([
  {
    id: 2656,
    name: "سارا سعیدی",
    plo1: "",
    plo2: "",
    description: "",
  },
  {
    id: 2656,
    name: "سارا سعیدی",
    plo1: "",
    plo2: "",
    description: "",
  },
  {
    id: 2656,
    name: "سارا سعیدی",
    plo1: "",
    plo2: "",
    description: "",
  },
  {
    id: 2656,
    name: "سارا سعیدی",
    plo1: "",
    plo2: "",
    description: "",
  },
  {
    id: 2656,
    name: "سارا سعیدی",
    plo1: "",
    plo2: "",
    description: "",
  },
  {
    id: 2656,
    name: "سارا سعیدی",
    plo1: "",
    plo2: "",
    description: "",
  },
  {
    id: 2656,
    name: "سارا سعیدی",
    plo1: "",
    plo2: "",
    description: "",
  },
  {
    id: 2656,
    name: "سارا سعیدی",
    plo1: "",
    plo2: "",
    description: "",
  },
  {
    id: 2656,
    name: "سارا سعیدی",
    plo1: "",
    plo2: "",
    description: "",
  },
  {
    id: 2656,
    name: "سارا سعیدی",
    plo1: "",
    plo2: "",
    description: "",
  },
  {
    id: 2656,
    name: "سارا سعیدی",
    plo1: "",
    plo2: "",
    description: "",
  },
  {
    id: 2656,
    name: "سارا سعیدی",
    plo1: "",
    plo2: "",
    description: "",
  },
  {
    id: 2656,
    name: "سارا سعیدی",
    plo1: "",
    plo2: "",
    description: "",
  },
  {
    id: 2656,
    name: "سارا سعیدی",
    plo1: "",
    plo2: "",
    description: "",
  },
  {
    id: 2656,
    name: "سارا سعیدی",
    plo1: "",
    plo2: "",
    description: "",
  },
  {
    id: 2656,
    name: "سارا سعیدی",
    plo1: "",
    plo2: "",
    description: "",
  },
  {
    id: 2656,
    name: "سارا سعیدی",
    plo1: "",
    plo2: "",
    description: "",
  },
  {
    id: 2656,
    name: "سارا سعیدی",
    plo1: "",
    plo2: "",
    description: "",
  },
]);

const currentData = ref();
const showSetDescription = ref(false);

const snackbar = reactive({
  value: false,
  status: "error",
  color() {
    return this?.status === "success" ? "#52AE32" : "error";
  },
});

const updateStudent = (newStudentDescription: string) => {
  currentData.value.description = newStudentDescription;

  const studentIndex = students.value.findIndex(
    (el) => el.id === currentData.value.id
  );

  snackbar.value = true;

  if (studentIndex < 0) {
    snackbar.status = "error";
    return (showSetDescription.value = false);
  }

  students.value[studentIndex] = currentData.value;
  snackbar.status = "success";

  return (showSetDescription.value = false);
};
</script>

<template>
  <VSnackbar
    v-model="snackbar.value"
    location="bottom center"
    variant="flat"
    :color="snackbar.color()"
    :timeout="2000"
  >
    <span text-white v-if="snackbar.status === 'success'">
      توضیحات با موفقیت ویرایش شد
    </span>
    <span text-white v-else> خطایی رخ داده است </span>
  </VSnackbar>
  <!-- Get Updated Data when change in text area -->
  <showSetDescriptionForStudent
    @return="showSetDescription = false"
    @update="updateStudent"
    v-if="showSetDescription"
    :data="currentData"
  />
  <VRow mx-auto>
    <VCol cols="12" md="6" min-h-18>
      <div
        class="w-full h-full rounded-15px relative bg-#323232 text-white placeholder-text-white flex items-center"
      >
        <span v-if="!student.course" class="absolute !text-white right-3 z-100">
          انتخاب دوره
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
          {{ student.course }}
          <div
            v-if="showDepartment"
            class="absolute top-4rem bg-#262732 gap-4 rounded-15px !flex flex-col z-100 w-full min-h-full left-0"
          >
            <span
              v-for="item in [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]"
              class="p-2 hover:bg-#262755 transition-350"
              @click.stop="
                () => {
                  student.course = item.toString();
                  showDepartment = false;
                }
              "
              >{{ item }}
            </span>
          </div>
        </div>
      </div>
    </VCol>
    <VCol cols="12" md="6" min-h-18>
      <div
        class="w-full h-full rounded-15px relative bg-#323232 text-white placeholder-text-white flex items-center"
        @click="showClass = !showClass"
        ref="showClassRef"
      >
        <span v-if="!student.Class" class="absolute !text-white right-3 z-100">
          انتخاب کلاس
        </span>
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          :class="{ 'rotate-180': showClass }"
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
          {{ student.Class }}
          <div
            v-if="showClass"
            class="absolute top-5rem bg-#262732 gap-4 rounded-15px !flex flex-col z-100 w-full min-h-full left-0"
          >
            <span
              v-for="item in [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]"
              class="p-2 hover:bg-#262755 transition-350"
              @click.stop="
                () => {
                  student.Class = item.toString();
                  showClass = false;
                }
              "
              >{{ item }}
            </span>
          </div>
        </div>
      </div>
    </VCol>
  </VRow>

  <VCard class="mt-4">
    <VTable class="text-no-wrap overflow-auto max-h-70vh mb-2">
      <!-- 👉 table head -->
      <thead>
        <tr>
          <th scope="col" class="text-center">نام دانشجو</th>
          <th scope="col" class="helvetica text-center">PLO1</th>
          <th scope="col" class="helvetica text-center">PLO2</th>
          <th scope="col" class="text-center">توضیحات</th>
        </tr>
      </thead>

      <!-- 👉 table body -->
      <tbody class="table-content">
        <tr v-for="student in students" :key="student.id">
          <!-- 👉 User -->

          <td class="text-center">
            {{ student.name }}
          </td>
          <td class="text-center">
            <input
              class="b-1 w-95px b-#D9D9D9 b-solid rounded-10px"
              min-h="!35px"
              v-model="student.plo2"
            />
          </td>
          <td class="text-center">
            <input
              class="b-1 w-95px b-#D9D9D9 b-solid rounded-10px"
              min-h="!35px"
              v-model="student.plo2"
            />
          </td>
          <td class="text-center">
            <VBtn
              style="background: rgba(227, 6, 19, 20%)"
              class="rounded-10px"
              variant="outlined"
              @click="(showSetDescription = true), (currentData = student)"
            >
              افزودن توضیحات
            </VBtn>
          </td>
        </tr>
      </tbody>

      <!-- 👉 table footer  -->
      <tfoot v-show="!students.length">
        <tr>
          <td colspan="7" class="text-center">محتوایی برای نمایش وجود ندارد</td>
        </tr>
      </tfoot>
    </VTable>
  </VCard>
  <div flex justify-end>
    <VBtn class="min-w-55 my-1"> ثبت نهایی </VBtn>
  </div>
</template>
