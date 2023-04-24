<script setup lang="ts">
import PaymentInfo from "@/views/apps/PaymentInfo.vue";

const resolveUserStatusVariant = (stat: string) => {
  if (stat === "pending") return "warning";
  if (stat === "active") return "success";
  if (stat === "inactive") return "secondary";

  return "primary";
};

const showCurrentItem = ref(false);
const currentItemData = ref({
  name: "دوره مدیریت",
  code: 1221,
  totalPrice: 15540000,
  paymentMethod: "قسطی",
  id: 2656,
  paidPrice: 7500000,
  date: "1401/09/01",
  status: "pending",
  radShode: true,
  items: [
    {
      name: "قسط یک",
      price: 5000000,
      date: "1401/09/01",
      status: "pending",
    },
  ],
});

const toggleCurrentItemVisivility = (currentItem: typeof tickets.value[0]) => {
  currentItemData.value = currentItem as any;
  showCurrentItem.value = true;
};

const tickets = ref([
  {
    id: 2656,
    name: "دوره مدیریت",

    totalPrice: 15450000,
    paidPrice: 7500000,
    paymentMethod: "اقساطی",
    code: 1263,
    date: "1401/09/01",
    status: "pending",
    items: [
      {
        name: "قسط یک",
        price: 5000000,
        date: "1401/09/01",
        status: "inactive",
      },
      {
        name: "قسط یک",
        price: 5000000,
        date: "1401/09/01",
        status: "inactive",
      },
      {
        name: "قسط یک",
        price: 5000000,
        date: "1401/09/01",
        status: "inactive",
      },
      {
        name: "قسط یک",
        price: 5000000,
        date: "1401/09/01",
        status: "inactive",
      },
      {
        name: "قسط یک",
        price: 5000000,
        date: "1401/09/01",
        status: "inactive",
      },
      {
        name: "قسط یک",
        price: 5000000,
        date: "1401/09/01",
        status: "inactive",
      },
      {
        name: "قسط یک",
        price: 5000000,
        date: "1401/09/01",
        status: "inactive",
      },
      {
        name: "قسط یک",
        price: 5000000,
        date: "1401/09/01",
        status: "inactive",
      },
      {
        name: "قسط یک",
        price: 5000000,
        date: "1401/09/01",
        status: "inactive",
      },
    ],
    radShode: true,
  },
  {
    id: 2656,
    name: "دوره مدیریت",
    totalPrice: 15450000,
    paidPrice: 7500000,
    paymentMethod: "اقساطی",
    code: 1263,
    date: "1401/09/01",
    status: "active",
    items: [
      {
        name: "قسط یک",
        price: 5000000,
        date: "1401/09/01",
        status: "inactive",
      },
    ],
  },
  {
    id: 2656,
    name: "دوره مدیریت",
    totalPrice: 15450000,
    paidPrice: 7500000,
    paymentMethod: "اقساطی",
    code: 1263,
    date: "1401/09/01",
    status: "inactive",
    items: [
      {
        name: "قسط یک",
        price: 5000000,
        date: "1401/09/01",
        status: "inactive",
      },
    ],
  },
  {
    id: 2656,
    name: "دوره مدیریت",
    totalPrice: 15450000,
    paidPrice: 7500000,
    paymentMethod: "اقساطی",
    code: 1263,
    date: "1401/09/01",
    status: "inactive",
    items: [
      {
        name: "قسط یک",
        price: 5000000,
        date: "1401/09/01",
        status: "inactive",
      },
    ],
  },
  {
    id: 2656,
    name: "دوره مدیریت",
    totalPrice: 15450000,
    paidPrice: 7500000,
    paymentMethod: "اقساطی",
    code: 1263,
    date: "1401/09/01",
    status: "inactive",
    items: [
      {
        name: "قسط یک",
        price: 5000000,
        date: "1401/09/01",
        status: "inactive",
      },
    ],
  },
  {
    id: 2656,
    name: "دوره مدیریت",
    totalPrice: 15450000,
    paidPrice: 7500000,
    paymentMethod: "اقساطی",
    code: 1263,
    date: "1401/09/01",
    status: "inactive",
    items: [
      {
        name: "قسط یک",
        price: 5000000,
        date: "1401/09/01",
        status: "inactive",
      },
    ],
  },
  {
    id: 2656,
    name: "دوره مدیریت",
    totalPrice: 15450000,
    paidPrice: 7500000,
    paymentMethod: "اقساطی",
    code: 1263,
    date: "1401/09/01",
    status: "inactive",
    items: [
      {
        name: "قسط یک",
        price: 5000000,
        date: "1401/09/01",
        status: "inactive",
      },
    ],
  },
  {
    id: 2656,
    name: "دوره مدیریت",
    totalPrice: 15450000,
    paidPrice: 7500000,
    paymentMethod: "اقساطی",
    code: 1263,
    date: "1401/09/01",
    status: "inactive",
    items: [
      {
        name: "قسط یک",
        price: 5000000,
        date: "1401/09/01",
        status: "inactive",
      },
    ],
  },
  {
    id: 2656,
    name: "دوره مدیریت",
    totalPrice: 15450000,
    paidPrice: 7500000,
    paymentMethod: "اقساطی",
    code: 1263,
    date: "1401/09/01",
    status: "inactive",
    items: [
      {
        name: "قسط یک",
        price: 5000000,
        date: "1401/09/01",
        status: "inactive",
      },
    ],
  },
  {
    id: 2656,
    name: "دوره مدیریت",
    totalPrice: 15450000,
    paidPrice: 7500000,
    paymentMethod: "اقساطی",
    code: 1263,
    date: "1401/09/01",
    status: "inactive",
    items: [
      {
        name: "قسط یک",
        price: 5000000,
        date: "1401/09/01",
        status: "inactive",
      },
    ],
  },
  {
    id: 2656,
    name: "دوره مدیریت",
    totalPrice: 15450000,
    paidPrice: 7500000,
    paymentMethod: "اقساطی",
    code: 1263,
    date: "1401/09/01",
    status: "inactive",
    items: [
      {
        name: "قسط یک",
        price: 5000000,
        date: "1401/09/01",
        status: "inactive",
      },
    ],
  },
  {
    id: 2656,
    name: "دوره مدیریت",
    totalPrice: 15450000,
    paidPrice: 7500000,
    paymentMethod: "اقساطی",
    code: 1263,
    date: "1401/09/01",
    status: "inactive",
    items: [
      {
        name: "قسط یک",
        price: 5000000,
        date: "1401/09/01",
        status: "inactive",
      },
    ],
  },
  {
    id: 2656,
    name: "دوره مدیریت",
    totalPrice: 15450000,
    paidPrice: 7500000,
    paymentMethod: "اقساطی",
    code: 1263,
    date: "1401/09/01",
    status: "inactive",
    items: [
      {
        name: "قسط یک",
        price: 5000000,
        date: "1401/09/01",
        status: "inactive",
      },
    ],
  },
  {
    id: 2656,
    name: "دوره مدیریت",
    totalPrice: 15450000,
    paidPrice: 7500000,
    paymentMethod: "اقساطی",
    code: 1263,
    date: "1401/09/01",
    status: "inactive",
    items: [
      {
        name: "قسط یک",
        price: 5000000,
        date: "1401/09/01",
        status: "inactive",
      },
    ],
  },
  {
    id: 2656,
    name: "دوره مدیریت",
    totalPrice: 15450000,
    paidPrice: 7500000,
    paymentMethod: "اقساطی",
    code: 1263,
    date: "1401/09/01",
    status: "inactive",
    items: [
      {
        name: "قسط یک",
        price: 5000000,
        date: "1401/09/01",
        status: "inactive",
      },
    ],
  },
  {
    id: 2656,
    name: "دوره مدیریت",
    totalPrice: 15450000,
    paidPrice: 7500000,
    paymentMethod: "اقساطی",
    code: 1263,
    date: "1401/09/01",
    status: "inactive",
    items: [
      {
        name: "قسط یک",
        price: 5000000,
        date: "1401/09/01",
        status: "inactive",
      },
    ],
  },
  {
    id: 2656,
    name: "دوره مدیریت",
    totalPrice: 15450000,
    paidPrice: 7500000,
    paymentMethod: "اقساطی",
    code: 1263,
    date: "1401/09/01",
    status: "inactive",
    items: [
      {
        name: "قسط یک",
        price: 5000000,
        date: "1401/09/01",
        status: "inactive",
      },
    ],
  },
  {
    id: 2656,
    name: "دوره مدیریت",
    totalPrice: 15450000,
    paidPrice: 7500000,
    paymentMethod: "اقساطی",
    code: 1263,
    date: "1401/09/01",
    status: "inactive",
    items: [
      {
        name: "قسط یک",
        price: 5000000,
        date: "1401/09/01",
        status: "inactive",
      },
    ],
  },
  {
    id: 2656,
    name: "دوره مدیریت",
    totalPrice: 15450000,
    paidPrice: 7500000,
    paymentMethod: "اقساطی",
    code: 1263,
    date: "1401/09/01",
    status: "inactive",
    items: [
      {
        name: "قسط یک",
        price: 5000000,
        date: "1401/09/01",
        status: "inactive",
      },
    ],
  },
  {
    id: 2656,
    name: "دوره مدیریت",
    totalPrice: 15450000,
    paidPrice: 7500000,
    paymentMethod: "اقساطی",
    code: 1263,
    date: "1401/09/01",
    status: "inactive",
    items: [
      {
        name: "قسط یک",
        price: 5000000,
        date: "1401/09/01",
        status: "inactive",
      },
    ],
  },
]);
</script>

<template>
  <div v-auto-animate>
    <PaymentInfo
      @return="showCurrentItem = false"
      v-if="showCurrentItem"
      :item="currentItemData"
    />
    <div class="flex gap-5 flex-nowrap overflow-auto pb-5 mb-10 scrollbar">
      <VCard
        v-for="ticket in tickets"
        class="rounded-30px min-w-80 min-h-45 flex flex-col gap-3 relative pt-3"
        :class="`${ticket.radShode ? 'bg-#111' : ''}`"
      >
        <span
          v-if="ticket.radShode"
          class="absolute -left-5 pr-8 -rotate-30deg w-40 top-1 bg-#E30613 text-xs flex justify-center"
        >
          موعد چک گذشته
        </span>
        <div>
          <span class="text-lg !text-#8D99AE pl-2 p-2 peyda"
            >{{ ticket.code }} _ {{ ticket.name }}</span
          >
          <VChip color="#F7A600" text-xs> قسط دوم </VChip>
        </div>
        <div class="flex flex-col gap-4 py-4 p-2">
          <div class="flex items-center gap-3">
            <span
              style="background: rgba(141, 153, 174, 20%)"
              rounded-xl
              aspect-1
              p-2
            >
              <VIcon color="#8d99ae" icon="mdi-calendar-clock-outline"></VIcon>
            </span>
            <span> مبلغ پرداختی : 5.350.000 تومان </span>
          </div>
          <div class="flex items-center gap-3">
            <span
              style="background: rgba(141, 153, 174, 20%)"
              rounded-xl
              aspect-1
              p-2
            >
              <VIcon color="#8d99ae" icon="mdi-wallet-outline"></VIcon>
            </span>
            <span> تاریخ سر رسید: 28 مهر 1401 </span>
          </div>
        </div>
        <div class="flex gap-2 justify-end p-2">
          <VBtn
            class="rounded-10px"
            variant="outlined"
            @click="toggleCurrentItemVisivility(ticket)"
          >
            جزئیات
          </VBtn>
          <VBtn class="rounded-10px"> پرداخت </VBtn>
        </div>
      </VCard>
    </div>
    <VCard class="table">
      <VTable class="text-no-wrap">
        <!-- 👉 table head -->
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">تاریخ</th>
            <th scope="col">نام دوره</th>
            <th scope="col">کد دوره</th>
            <th scope="col">مبلغ کل</th>
            <th scope="col">مبلغ پرداختی</th>
            <th scope="col">وضعیت</th>
          </tr>
        </thead>

        <!-- 👉 table body -->
        <tbody class="table-content">
          <tr v-for="ticket in tickets" :key="ticket.id">
            <!-- 👉 User -->
            <td>
              {{ ticket.id }}
            </td>

            <!-- 👉 Role -->
            <td>
              {{ ticket.date }}
            </td>

            <td>
              {{ ticket.name }}
            </td>
            <td>
              {{ ticket.code }}
            </td>
            <td>
              {{ ticket.totalPrice }}
            </td>
            <td>
              {{ ticket.paidPrice }}
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
        <tfoot v-show="!tickets.length">
          <tr>
            <td colspan="7" class="text-center">No data available</td>
          </tr>
        </tfoot>
      </VTable>
    </VCard>
  </div>
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
  border: 4px solid rgb(var(--v-theme-surface));
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

.scrollbar::-webkit-scrollbar-track {
  border-radius: 1rem;
  background-color: #282828;
  block-size: 5px;
  inline-size: 4px;
  scrollbar-width: thin !important;
}

.scrollbar::-webkit-scrollbar {
  border-radius: 1rem;
  background-color: #e30613;
  inline-size: 1px;
  inline-size: 4px;
  scrollbar-width: thin !important;
}

.scrollbar::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  background-color: #e30613;
  inline-size: 4px;
  scrollbar-width: thin !important;
}
</style>
