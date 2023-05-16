<script setup lang="ts">
// Table

const selectedOptions = ref(["Alabama"]);

const states = ["Alabama", "Alaska", "American Samoa"];

const resolveUserStatusVariant = (stat: string) => {
  if (stat === "pending") return "warning";
  if (stat === "active") return "success";
  if (stat === "inactive") return "secondary";

  return "primary";
};

const courses = ref([
  {
    id: 2656,
    name: "دیجیتال مارکتینگ",
    plo: 45,

    status: "pending",
  },
  {
    id: 2656,
    name: "دیجیتال مارکتینگ",
    plo: 45,

    status: "active",
  },
  {
    id: 2656,
    name: "دیجیتال مارکتینگ",
    plo: 45,

    status: "inactive",
  },
]);
</script>

<template>
  <VRow mx-auto>
    <VCol cols="12" md="10">
      <VSelect
        v-model="selectedOptions"
        :items="states"
        label="همه تیکت‌ ها"
        class="rounded-xl mb-8 !w-full !h-16"
      />
    </VCol>
    <VCol cols="12" md="2">
      <VBtn class="!h-16 w-full !rounded-20px"> ارسال تیکت </VBtn>
    </VCol>
  </VRow>
  <VCard>
    <VTable class="text-no-wrap">
      <!-- 👉 table head -->
      <thead>
        <tr>
          <th scope="col">نام دوره</th>
          <th scope="col">کد دوره</th>
          <th scope="col">FINAL PLO</th>
          <th scope="col">وضعیت دوره</th>
        </tr>
      </thead>

      <!-- 👉 table body -->
      <tbody class="table-content">
        <tr v-for="ticket in courses" :key="ticket.id">
          <!-- 👉 User -->
          <td>
            {{ ticket.name }}
          </td>

          <!-- 👉 Email -->
          <td>
            {{ ticket.id }}
          </td>

          <!-- 👉 Role -->
          <td>
            {{ ticket.plo }}
          </td>

          <!-- 👉 Status -->
          <td>
            <VChip
              :color="resolveUserStatusVariant(ticket.status)"
              size="small"
              class="text-capitalize"
            >
              <span class="!text-inherit" v-if="ticket.status === 'pending'">
                در انتظار بررسی
              </span>
              <span class="!text-inherit" v-if="ticket.status === 'active'">
                پاسخ داده شده
              </span>
              <span class="!text-inherit" v-if="ticket.status === 'inactive'">
                درحال انجام
              </span>
            </VChip>
          </td>
        </tr>
      </tbody>

      <!-- 👉 table footer  -->
      <tfoot v-show="!courses.length">
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
