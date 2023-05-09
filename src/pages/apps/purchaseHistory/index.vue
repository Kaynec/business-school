<script setup lang="ts">
// Table

const selectedOptions = ref(["Alabama"]);

const states = ["Alabama", "Alaska", "American Samoa"];

const getClass = (stat: string) => {
  if (stat === "active") return "bg-#52AE32";
  if (stat === "passed") return "bg-#E30613";

  return "primary";
};

const courses = ref([
  {
    name: "مدیریت رفتار سازمانی",
    price: "15.450.000",
    status: "active",
    total_hours: 45,
    id: 88,
  },
  {
    name: "مدیریت رفتار سازمانی",
    price: "15.450.000",
    status: "active",
    total_hours: 45,
    id: 88,
  },
  {
    name: "مدیریت رفتار سازمانی",
    price: "15.450.000",
    status: "active",
    total_hours: 45,
    id: 88,
  },
  {
    name: "مدیریت رفتار سازمانی",
    price: "15.450.000",
    status: "active",
    total_hours: 45,
    id: 88,
  },
  {
    name: "مدیریت رفتار سازمانی",
    price: "15.450.000",
    status: "active",
    total_hours: 45,
    id: 88,
  },
  {
    name: "مدیریت رفتار سازمانی",
    price: "15.450.000",
    status: "active",
    total_hours: 45,
    id: 88,
  },
  {
    name: "مدیریت رفتار سازمانی",
    price: "15.450.000",
    status: "active",
    total_hours: 45,
    id: 88,
  },
  {
    name: "مدیریت رفتار سازمانی",
    price: "15.450.000",
    status: "active",
    total_hours: 45,
    id: 88,
  },
  {
    name: "مدیریت رفتار سازمانی",
    price: "15.450.000",
    status: "active",
    total_hours: 45,
    id: 88,
  },
  {
    name: "مدیریت رفتار سازمانی",
    price: "15.450.000",
    status: "active",
    total_hours: 45,
    id: 88,
  },
  {
    name: "مدیریت رفتار سازمانی",
    price: "15.450.000",
    status: "active",
    total_hours: 45,
    id: 88,
  },
  {
    name: "مدیریت رفتار سازمانی",
    price: "15.450.000",
    status: "active",
    total_hours: 45,
    id: 88,
  },
  {
    name: "مدیریت رفتار سازمانی",
    price: "15.450.000",
    status: "passed",
    total_hours: 45,
    id: 88,
  },
  {
    name: "مدیریت رفتار سازمانی",
    price: "15.450.000",
    status: "passed",
    total_hours: 45,
    id: 88,
  },
  {
    name: "مدیریت رفتار سازمانی",
    price: "15.450.000",
    status: "passed",
    total_hours: 45,
    id: 88,
  },
  {
    name: "مدیریت رفتار سازمانی",
    price: "15.450.000",
    status: "passed",
    total_hours: 45,
    id: 88,
  },
]);
</script>

<template>
  <VCard>
    <VTable class="text-no-wrap">
      <!-- 👉 table head -->
      <thead>
        <tr>
          <th scope="col">نام دوره</th>
          <th scope="col">مجموع ساعت کارکرد</th>
          <th scope="col">مبلغ دریافتی</th>
          <th scope="col">وضعیت</th>
        </tr>
      </thead>

      <!-- 👉 table body -->
      <tbody class="table-content">
        <tr v-for="data in courses" :key="data.id">
          <!-- 👉 User -->
          <td>
            {{ data.name }}
          </td>
          <td>
            {{ data.total_hours }}
          </td>
          <td>
            {{ data.price }}
          </td>

          <td>
            <VChip
              :class="getClass(data.status)"
              size="small"
              class="text-capitalize"
            >
              <span v-if="data.status === 'active'"> پرداخت شده </span>
              <span v-if="data.status === 'passed'"> پرداخت نشده </span>
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

<style lang="scss">
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
