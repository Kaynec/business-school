<script setup lang="ts">
// Table

import { ref } from "vue";

const selectedOptions = ref(["Alabama"]);

const states = ["Alabama", "Alaska", "American Samoa"];

const resolveUserStatusVariant = (stat: string) => {
  if (stat === "pending") return "warning";
  if (stat === "active") return "success";
  if (stat === "inactive") return "secondary";

  return "primary";
};

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

const ticket = ref({
  title: "",
  departmant: "",
  howMuch: "",
  msg: "",
  file: "",
});

const fileInput = ref();
</script>

<template>
  <VCard
    class="rounded-30px min-h-70 shadow p-5 pb-8 my-5 relative"
    style="background: rgba(40, 40, 40, 0.8)"
  >
    <span> درخواست صدور گواهینامه </span>
    <span class="absolute left-5 bottom-2">
      تیکت شما دو ساعت پیش ارسال شده است.
    </span>
  </VCard>
  <VCard
    class="rounded-30px min-h-70 shadow p-5 pb-8 my-5 relative"
    style="background: rgba(40, 40, 40, 0.8)"
  >
    <span>
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
      طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
      که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
      هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
      حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
      شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
      پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
      دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
      نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
      موجود طراحی اساسا مورد استفاده قرار گیرد.</span
    >
    <span class="absolute left-5 bottom-2">
      تیکت شما دو ساعت پیش ارسال شده است.
    </span>
  </VCard>
  <VRow mx-auto>
    <VCol cols="12" md="8">
      <input
        type="file"
        hidden
        ref="fileInput"
        @change="
          (e) => {
            ticket.file = e.target?.files[0];
          }
        "
      />
      <div
        class="b-1px b-solid p4-4 min-h-15 rounded-15px b-#393939 w-full h-full flex flex-col justify-center pr-4"
        @click="fileInput.click()"
      >
        <span v-if="!ticket.file"> انتخاب فایل </span>
        <span v-else> {{ ticket.file?.name }} </span>
      </div>
    </VCol>
    <VCol cols="12" md="2">
      <VBtn class="w-full h-full min-h-15 rounded-15px" color="secondary">
        بارگذاری فایل
      </VBtn>
    </VCol>
    <VCol cols="12" md="2">
      <VBtn class="w-full h-full min-h-15 rounded-15px"> ارسال </VBtn>
    </VCol>
  </VRow>
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
