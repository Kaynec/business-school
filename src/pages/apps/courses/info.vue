<script setup lang="ts">
// Table

const selectedOptions = ref(["Alabama"]);

const states = ["Alabama", "Alaska", "American Samoa"];

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
    date: "1401/09/10",
    startHour: "13:00",
    endHour: "13:15",
    link: "https://crm.mahan.com/class",
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
    date: "1401/09/10",
    startHour: "13:00",
    endHour: "13:15",
    link: "https://crm.mahan.com/class",
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
    date: "1401/09/10",
    startHour: "13:00",
    endHour: "13:15",
    link: "https://crm.mahan.com/class",
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
    date: "1401/09/10",
    startHour: "13:00",
    endHour: "13:15",
    link: "https://crm.mahan.com/class",
    startDay: ["شنبه ", "چهارشنبه"],
    status: "not_yet",
    id: 88,
    description: "رشد شما در این درس متوسط بوده است.",
  },
]);
</script>

<template>
  <span class="text-3xl peyda text-white pb-4 block font-700">
    مدیریت رفتار سازمانی
  </span>
  <div class="flex items-center w-full max-w-150 justify-between mb-5">
    <div class="flex items-center gap-3 text-white">
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.5 15.2625L19.875 18.6375C20.15 18.9125 20.2875 19.2565 20.2875 19.6695C20.2875 20.0815 20.15 20.4375 19.875 20.7375C19.575 21.0375 19.219 21.1875 18.807 21.1875C18.394 21.1875 18.0375 21.0375 17.7375 20.7375L14.55 17.55C14.2 17.2 13.9375 16.8125 13.7625 16.3875C13.5875 15.9625 13.5 15.5 13.5 15V10.5C13.5 10.075 13.644 9.7185 13.932 9.4305C14.219 9.1435 14.575 9 15 9C15.425 9 15.7815 9.1435 16.0695 9.4305C16.3565 9.7185 16.5 10.075 16.5 10.5V15.2625ZM15 3C15.425 3 15.7815 3.1435 16.0695 3.4305C16.3565 3.7185 16.5 4.075 16.5 4.5C16.5 4.925 16.3565 5.2815 16.0695 5.5695C15.7815 5.8565 15.425 6 15 6C14.575 6 14.219 5.8565 13.932 5.5695C13.644 5.2815 13.5 4.925 13.5 4.5C13.5 4.075 13.644 3.7185 13.932 3.4305C14.219 3.1435 14.575 3 15 3ZM27 15C27 15.425 26.856 15.781 26.568 16.068C26.281 16.356 25.925 16.5 25.5 16.5C25.075 16.5 24.719 16.356 24.432 16.068C24.144 15.781 24 15.425 24 15C24 14.575 24.144 14.2185 24.432 13.9305C24.719 13.6435 25.075 13.5 25.5 13.5C25.925 13.5 26.281 13.6435 26.568 13.9305C26.856 14.2185 27 14.575 27 15ZM15 24C15.425 24 15.7815 24.144 16.0695 24.432C16.3565 24.719 16.5 25.075 16.5 25.5C16.5 25.925 16.3565 26.281 16.0695 26.568C15.7815 26.856 15.425 27 15 27C14.575 27 14.219 26.856 13.932 26.568C13.644 26.281 13.5 25.925 13.5 25.5C13.5 25.075 13.644 24.719 13.932 24.432C14.219 24.144 14.575 24 15 24ZM6 15C6 15.425 5.8565 15.781 5.5695 16.068C5.2815 16.356 4.925 16.5 4.5 16.5C4.075 16.5 3.7185 16.356 3.4305 16.068C3.1435 15.781 3 15.425 3 15C3 14.575 3.1435 14.2185 3.4305 13.9305C3.7185 13.6435 4.075 13.5 4.5 13.5C4.925 13.5 5.2815 13.6435 5.5695 13.9305C5.8565 14.2185 6 14.575 6 15ZM15 30C12.925 30 10.975 29.606 9.15 28.818C7.325 28.031 5.7375 26.9625 4.3875 25.6125C3.0375 24.2625 1.969 22.675 1.182 20.85C0.394 19.025 0 17.075 0 15C0 12.925 0.394 10.975 1.182 9.15C1.969 7.325 3.0375 5.7375 4.3875 4.3875C5.7375 3.0375 7.325 1.9685 9.15 1.1805C10.975 0.3935 12.925 0 15 0C17.075 0 19.025 0.3935 20.85 1.1805C22.675 1.9685 24.2625 3.0375 25.6125 4.3875C26.9625 5.7375 28.031 7.325 28.818 9.15C29.606 10.975 30 12.925 30 15C30 17.075 29.606 19.025 28.818 20.85C28.031 22.675 26.9625 24.2625 25.6125 25.6125C24.2625 26.9625 22.675 28.031 20.85 28.818C19.025 29.606 17.075 30 15 30ZM15 27C18.35 27 21.1875 25.8375 23.5125 23.5125C25.8375 21.1875 27 18.35 27 15C27 11.65 25.8375 8.8125 23.5125 6.4875C21.1875 4.1625 18.35 3 15 3C11.65 3 8.8125 4.1625 6.4875 6.4875C4.1625 8.8125 3 11.65 3 15C3 18.35 4.1625 21.1875 6.4875 23.5125C8.8125 25.8375 11.65 27 15 27Z"
          fill="#E30613"
        />
      </svg>
      <span> تعداد ساعت: 20 ساعت</span>
    </div>
    <div class="flex items-center gap-3 text-white">
      <svg
        width="25"
        height="30"
        viewBox="0 0 25 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 6C4.5 5.60218 4.65804 5.22064 4.93934 4.93934C5.22064 4.65804 5.60217 4.5 6 4.5H18C18.3978 4.5 18.7794 4.65804 19.0607 4.93934C19.342 5.22064 19.5 5.60218 19.5 6V9C19.5 9.39782 19.342 9.77936 19.0607 10.0607C18.7794 10.342 18.3978 10.5 18 10.5H6C5.60217 10.5 5.22064 10.342 4.93934 10.0607C4.65804 9.77936 4.5 9.39782 4.5 9V6ZM6.75 8.25H17.25V6.75H6.75V8.25ZM0 3.75C0 2.75544 0.395088 1.80161 1.09835 1.09835C1.80161 0.395088 2.75544 0 3.75 0H21C21.4925 0 21.9801 0.0969966 22.4351 0.285452C22.89 0.473907 23.3034 0.75013 23.6516 1.09835C23.9999 1.44657 24.2761 1.85997 24.4645 2.31494C24.653 2.76991 24.75 3.25754 24.75 3.75V25.125C24.75 25.4234 24.6315 25.7095 24.4205 25.9205C24.2095 26.1315 23.9234 26.25 23.625 26.25H2.25C2.25 26.6478 2.40804 27.0294 2.68934 27.3107C2.97064 27.592 3.35217 27.75 3.75 27.75H23.625C23.9234 27.75 24.2095 27.8685 24.4205 28.0795C24.6315 28.2905 24.75 28.5766 24.75 28.875C24.75 29.1734 24.6315 29.4595 24.4205 29.6705C24.2095 29.8815 23.9234 30 23.625 30H3.75C2.75544 30 1.80161 29.6049 1.09835 28.9016C0.395088 28.1984 0 27.2446 0 26.25V3.75ZM2.25 24H22.5V3.75C22.5 3.35218 22.342 2.97064 22.0607 2.68934C21.7794 2.40804 21.3978 2.25 21 2.25H3.75C3.35217 2.25 2.97064 2.40804 2.68934 2.68934C2.40804 2.97064 2.25 3.35218 2.25 3.75V24Z"
          fill="#E30613"
        />
      </svg>

      <span> هم نیاز | پیش نیاز: مبانی سازمان و مدیریت</span>
    </div>
  </div>

  <VCard>
    <VTable class="text-no-wrap max-h-80vh overflow-auto">
      <!-- 👉 table head -->
      <thead>
        <tr>
          <th scope="col">ماژول</th>
          <th scope="col">تاریخ</th>
          <th scope="col">ساعت شروع</th>
          <th scope="col">ساعت پایان</th>
          <th scope="col">لینک کلاس</th>
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
            {{ ticket.date }}
          </td>
          <td>
            {{ ticket.startHour }}
          </td>
          <td>
            {{ ticket.endHour }}
          </td>
          <td>
            <span p-1 rounded-25px px-8 class="custom-border">
              {{ ticket.link }}
            </span>
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
.custom-border {
  border: 1px solid rgba(237, 242, 244, 30%);
}

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
