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
    class="rounded-18px shadow p-5 pb-8 my-5 relative"
    style="background: rgba(40, 40, 40, 80%)"
  >
    <span class="!text-gray-4"> 8127-اطلاع رسانی ماهان</span>
  </VCard>
  <VCard
    class="rounded-18px min-h-70 shadow p-5 pb-8 my-5 relative"
    style="background: rgba(40, 40, 40, 80%)"
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
</template>
