<script setup lang="ts">
const courses = ref([
  {
    title: "مدیریت رفتار سازمانی",
    teacher: "احمد نظری مهرابی",
    plo1: 45,
    plo2: 55,
    description: "رشد شما در این درس متوسط بوده است.",
  },
  {
    title: "مدیریت رفتار سازمانی",
    teacher: "احمد نظری مهرابی",
    plo1: 45,
    plo2: 55,
    description: "رشد شما در این درس متوسط بوده است.",
  },
  {
    title: "مدیریت رفتار سازمانی",
    teacher: "احمد نظری مهرابی",
    plo1: 45,
    plo2: 55,
    description: "رشد شما در این درس متوسط بوده است.",
  },
]);
</script>

<template>
  <VCard class="table">
    <VTable class="text-no-wrap">
      <!-- 👉 table head -->
      <thead>
        <tr>
          <th scope="col">نام دوره</th>
          <th scope="col">مدرس</th>
          <th scope="col">PLO1</th>
          <th scope="col">PLO2</th>
          <th scope="col">توضیحات</th>
        </tr>
      </thead>

      <!-- 👉 table body -->
      <tbody class="table-content">
        <tr v-for="ticket in courses" :key="ticket.id">
          <!-- 👉 User -->
          <td>
            {{ ticket.title }}
          </td>

          <!-- 👉 Email -->
          <td>
            {{ ticket.teacher }}
          </td>

          <!-- 👉 Role -->
          <td>
            {{ ticket.plo1 }}
          </td>
          <td>
            {{ ticket.plo2 }}
          </td>
          <td>
            {{ ticket.description }}
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

<style lang="scss">
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
