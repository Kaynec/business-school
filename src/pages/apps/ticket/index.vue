<script setup lang="ts">
// Table

const selectedOptions = ref(["Alabama"]);

const states = ["Alabama", "Alaska", "American Samoa"];

const resolveUserStatusVariant = (stat: string) => {
  if (stat === "pending") return "bg-#E30613";
  if (stat === "active") return "bg-#52AE32";
  if (stat === "inactive") return "bg-#F7A600";

  return "primary";
};

const tickets = ref([
  {
    id: 2656,
    title: "مشکل در ورود به لینک کلاس‌های آنلاین",
    date: "1401/09/01",
    status: "pending",
  },
  {
    id: 2656,
    title: "مشکل در ورود به لینک کلاس‌های آنلاین",
    date: "1401/09/01",
    status: "active",
  },
  {
    id: 2656,
    title: "مشکل در ورود به لینک کلاس‌های آنلاین",
    date: "1401/09/01",
    status: "inactive",
  },
]);
</script>

<template>
  <VRow mx-auto mt-5>
    <VCol cols="12" md="10">
      <VSelect
        v-model="selectedOptions"
        :items="states"
        label="همه تیکت‌ ها"
        class="rounded-xl mb-8 !w-full !h-16"
      />
    </VCol>
    <VCol cols="12" md="2">
      <!-- TODO Change This to dynamic -->
      <VBtn
        class="!h-16 w-full !rounded-20px"
        @click="
          $router.push({
            name: 'apps-ticket-id',
            params: {
              id: 0,
            },
          })
        "
      >
        ارسال تیکت
      </VBtn>
    </VCol>
  </VRow>
  <VCard>
    <VTable class="text-no-wrap max-h-70vh overflow-auto">
      <!-- 👉 table head -->
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">عنوان</th>
          <th scope="col">تاریخ</th>
          <th scope="col">وضعیت</th>
        </tr>
      </thead>

      <!-- 👉 table body -->
      <tbody class="table-content">
        <tr
          v-for="ticket in [
            ...tickets,
            ...tickets,
            ...tickets,
            ...tickets,
            ...tickets,
            ...tickets,
          ]"
          :key="ticket.id"
        >
          <!-- 👉 User -->
          <td>
            {{ ticket.id }}
          </td>

          <!-- 👉 Email -->
          <td>
            {{ ticket.title }}
          </td>

          <!-- 👉 Role -->
          <td>
            {{ ticket.date }}
          </td>

          <!-- 👉 Status -->
          <td>
            <VChip
              :class="resolveUserStatusVariant(ticket.status)"
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
      <tfoot v-show="!tickets.length">
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
