<script setup lang="ts">
//
defineProps<{
  item: {
    name: string;
    code: number;
    totalPrice: number;
    paymentMethod: string;
    items: [
      {
        name: string;
        price: number;
        date: string;
        status: "active" | "inactive";
      }
    ];
  };
}>();

const emit = defineEmits(["return"]);

const resolvePriceVariant = (stat: string) => {
  if (stat === "active") return "bg-#52AE32 ";
  if (stat === "inactive") return " bg-#E30613";

  return "primary";
};

const target = ref();

onClickOutside(target, () => {
  emit("return");
});
</script>

<template>
  <div
    class="fixed inset-0 bg-#000 z-10000 overflow-hidden bg-opacity-15 backdrop-blur flex items-center justify-center"
  >
    <VCard
      ref="target"
      class="rounded-30px flex flex-col gap-3 relative pt-3 w-90% max-w-150 mb-100"
    >
      <span class="text-lg !text-#8D99AE pr-5 pt-5 peyda"
        >{{ item.code }} _ {{ item.name }}</span
      >
      <div class="flex flex-col gap-4 py-4 pr-4">
        <div class="flex items-center gap-3">
          <span
            style="background: rgba(141, 153, 174, 20%)"
            rounded-xl
            aspect-1
            p-2
          >
            <VIcon color="#8d99ae" icon="mdi-calendar-clock-outline" />
          </span>
          <div class="flex justify-between grow pl-10">
            <span> مبلغ پرداختی : </span>
            <span> {{ item.totalPrice }} تومان </span>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <span
            style="background: rgba(141, 153, 174, 20%)"
            rounded-xl
            aspect-1
            p-2
          >
            <VIcon color="#8d99ae" icon="mdi-wallet-outline" />
          </span>
          <div class="flex justify-between grow pl-23">
            <span> نوع پرداخت: </span>
            <span> {{ item.paymentMethod }} </span>
          </div>
        </div>
      </div>

      <!--  -->
      <VTable class="bg-#323232 rounded-0 my-4">
        <!-- 👉 table head -->
        <thead>
          <tr>
            <th scope="col">شماره قسط</th>
            <th scope="col">مبلغ پرداختی</th>
            <th scope="col">تاریخ سر رسید</th>
            <th scope="col">وضعیت</th>
          </tr>
        </thead>

        <!-- 👉 table body -->
        <tbody class="table-content">
          <tr v-for="payment in item.items" :key="payment.date">
            <!-- 👉 User -->
            <td class="!b-#8d99ae2a b-0.1px b-solid">
              {{ payment.name }}
              {{ payment.name }}
            </td>
            <td class="!b-#8d99ae5d b-0.1px b-solid">
              {{ payment.price }}
            </td>
            <td class="!b-#8d99ae5d b-0.1px b-solid">
              {{ payment.date }}
            </td>

            <!-- 👉 Status -->
            <td class="!b-#8d99ae5d b-0.1px b-solid b-l-0">
              <VChip
                size="small"
                class="text-capitalize text-white"
                :class="resolvePriceVariant(payment.status)"
              >
                <span
                  v-if="payment.status === 'inactive'"
                  class="!text-inherit"
                >
                  پرداخت نشده
                </span>
                <span v-if="payment.status === 'active'" class="!text-inherit">
                  پرداخت شده
                </span>
              </VChip>
            </td>
          </tr>
        </tbody>

        <!-- 👉 table footer  -->
        <tfoot v-show="!item.items.length">
          <tr>
            <td colspan="7" class="text-center">No data available</td>
          </tr>
        </tfoot>
      </VTable>
      <div class="flex gap-2 justify-end pt-5 pl-10">
        <VBtn class="rounded-10px" variant="outlined"> فاکتور </VBtn>
        <VBtn class="rounded-10px"> پرداخت </VBtn>
      </div>
    </VCard>
  </div>
</template>

<style scoped lang="scss">
.v-card {
  position: relative;
}

.v-card::after {
  position: absolute;
  block-size: 50%;
  border-block-start: 1px solid rgba(255, 0, 0, 25%);
  border-inline-start: 1px solid rgba(255, 0, 0, 15.1%);
  border-start-start-radius: 30px;
  content: "";
  inline-size: 50%;
  inset-block-start: 0;
  inset-inline-start: 0;
}

.v-card::before {
  position: absolute;
  block-size: 50%;
  border-block-end: 1px solid rgba(255, 0, 0, 25%);
  border-end-end-radius: 30px;
  border-inline-end: 1px solid rgba(255, 0, 0, 15.1%);
  content: "";
  inline-size: 50%;
  inset-block-end: 0;
  inset-inline-end: 0;
}
</style>
