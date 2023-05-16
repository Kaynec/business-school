<script setup lang="ts">
const getClass = (stat: string) => {
  if (stat === "pending") return "!bg-#F7A600";
  if (stat === "active") return "!bg-#52AE32";
  if (stat === "passed") return "!bg-#E30613";
  if (stat === "not_yet") return "!bg-gradient-to-r from-#814997 to-#C464EA";

  return "primary";
};

const courses = ref([
  {
    title: "مدیریت رفتار سازمانی",
    teacher: "احمد نظری مهرابی",
    type: "عمومی",
    count: 45,
    date: ["1401/09/10", "1401/10/10"],
    startDay: ["شنبه ", "چهارشنبه"],
    status: "pending",
    id: 88,
    description: "رشد شما در این درس متوسط بوده است.",
  },
  {
    title: "مدیریت رفتار سازمانی",
    teacher: "احمد نظری مهرابی",
    type: "عمومی",
    count: 45,
    date: ["1401/09/10", "1401/10/10"],
    startDay: ["شنبه ", "چهارشنبه"],
    status: "active",
    id: 88,
    description: "رشد شما در این درس متوسط بوده است.",
  },
  {
    title: "مدیریت رفتار سازمانی",
    teacher: "احمد نظری مهرابی",
    type: "عمومی",
    count: 45,
    date: ["1401/09/10", "1401/10/10"],
    startDay: ["شنبه ", "چهارشنبه"],
    status: "passed",
    id: 88,
    description: "رشد شما در این درس متوسط بوده است.",
  },
  {
    title: "مدیریت رفتار سازمانی",
    teacher: "احمد نظری مهرابی",
    type: "عمومی",
    count: 45,
    date: ["1401/09/10", "1401/10/10"],
    startDay: ["شنبه ", "چهارشنبه"],
    status: "not_yet",
    id: 88,
    description: "رشد شما در این درس متوسط بوده است.",
  },
]);
</script>

<template>
  <VCard>
    <VTable class="text-no-wrap">
      <!-- 👉 table head -->
      <thead>
        <tr>
          <th scope="col">عنوان</th>
          <th scope="col">نوع</th>
          <th scope="col">مدرس</th>
          <th scope="col">طرح درس</th>
          <th scope="col">تاریخ</th>
          <th scope="col">تعداد جلسات</th>
          <th scope="col">روزهای تشکیل</th>
          <th scope="col">تقویم</th>
          <th scope="col">وضعیت</th>
        </tr>
      </thead>

      <!-- 👉 table body -->
      <tbody class="table-content">
        <tr v-for="ticket in courses" :key="ticket.id">
          <!-- 👉 User -->
          <td>
            {{ ticket.title }}
          </td>
          <td>
            {{ ticket.type }}
          </td>

          <!-- 👉 Email -->
          <td>
            {{ ticket.teacher }}
          </td>

          <td>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="30"
                height="30"
                rx="8"
                fill="url(#paint0_linear_1_4791)"
              />
              <path
                d="M11 7C9.89688 7 9 7.89687 9 9V21C9 22.1031 9.89688 23 11 23H19C20.1031 23 21 22.1031 21 21V12H17C16.4469 12 16 11.5531 16 11V7H11ZM17 7V11H21L17 7ZM11 14H11.75C12.7156 14 13.5 14.7844 13.5 15.75C13.5 16.7156 12.7156 17.5 11.75 17.5H11.5V18.5C11.5 18.775 11.275 19 11 19C10.725 19 10.5 18.775 10.5 18.5V14.5C10.5 14.225 10.725 14 11 14ZM11.75 16.5C12.1656 16.5 12.5 16.1656 12.5 15.75C12.5 15.3344 12.1656 15 11.75 15H11.5V16.5H11.75ZM14 14.5C14 14.225 14.225 14 14.5 14H15.25C16.0781 14 16.75 14.6719 16.75 15.5V17.5C16.75 18.3281 16.0781 19 15.25 19H14.5C14.225 19 14 18.775 14 18.5V14.5ZM15 18H15.25C15.525 18 15.75 17.775 15.75 17.5V15.5C15.75 15.225 15.525 15 15.25 15H15V18ZM18 14H19.5C19.775 14 20 14.225 20 14.5C20 14.775 19.775 15 19.5 15H18.5V16H19.5C19.775 16 20 16.225 20 16.5C20 16.775 19.775 17 19.5 17H18.5V18.5C18.5 18.775 18.275 19 18 19C17.725 19 17.5 18.775 17.5 18.5V14.5C17.5 14.225 17.725 14 18 14Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_4791"
                  x1="15"
                  y1="0"
                  x2="15"
                  y2="30"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#8D99AE" />
                  <stop offset="1" stop-color="#6F7E98" />
                </linearGradient>
              </defs>
            </svg>
          </td>

          <td>
            <span block v-for="i in ticket.date">
              {{ i }}
            </span>
          </td>
          <td>{{ ticket.count }} جلسه</td>
          <td>
            <span block v-for="i in ticket.startDay">
              {{ i }}
            </span>
          </td>
          <td>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="30"
                height="30"
                rx="8"
                fill="url(#paint0_linear_1_4794)"
              />
              <path
                d="M7 20.6C7 21.96 8.04 23 9.4 23H20.6C21.96 23 23 21.96 23 20.6V14.2H7V20.6ZM20.6 8.6H19V7.8C19 7.32 18.68 7 18.2 7C17.72 7 17.4 7.32 17.4 7.8V8.6H12.6V7.8C12.6 7.32 12.28 7 11.8 7C11.32 7 11 7.32 11 7.8V8.6H9.4C8.04 8.6 7 9.64 7 11V12.6H23V11C23 9.64 21.96 8.6 20.6 8.6Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_4794"
                  x1="15"
                  y1="0"
                  x2="15"
                  y2="30"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#8D99AE" />
                  <stop offset="1" stop-color="#6F7E98" />
                </linearGradient>
              </defs>
            </svg>
          </td>

          <td>
            <VChip
              :class="getClass(ticket.status)"
              size="small"
              class="text-capitalize"
            >
              <span v-if="ticket.status === 'pending'"> درحال اجرا </span>
              <span v-if="ticket.status === 'active'"> تمام شده </span>
              <span v-if="ticket.status === 'passed'"> حذف شده </span>
              <span v-if="ticket.status === 'not_yet'"> فرا نرسیده </span>
            </VChip>
          </td>
        </tr>
      </tbody>

      <!-- 👉 table footer  -->
      <tfoot v-show="!courses.length">
        <tr>
          <td colspan="7" class="text-center">No data available</td>
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
