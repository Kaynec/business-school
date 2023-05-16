<template>
  <div class="calendar w-full">
    <div class="flex items-center b-b-3px b-b-solid pb-2 b-b-#323232">
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="month--"
      >
        <rect
          x="-1"
          y="1"
          width="28"
          height="28"
          rx="6"
          transform="matrix(-1 0 0 1 28 0)"
          stroke="#323232"
          stroke-width="2"
        />
        <path
          d="M18.5 15.866C19.1667 15.4811 19.1667 14.5189 18.5 14.134L14 11.5359C13.3333 11.151 12.5 11.6321 12.5 12.4019V17.5981C12.5 18.3679 13.3333 18.849 14 18.4641L18.5 15.866Z"
          fill="#767676"
        />
      </svg>

      <div class="calendar-header">
        <h3>
          {{ templateDate[1] + " " + templateDate[2] }}
        </h3>
      </div>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="month++"
      >
        <rect
          x="1"
          y="1"
          width="28"
          height="28"
          rx="6"
          stroke="#323232"
          stroke-width="2"
        />
        <path
          d="M11.5 15.866C10.8333 15.4811 10.8333 14.5189 11.5 14.134L16 11.5359C16.6667 11.151 17.5 11.6321 17.5 12.4019V17.5981C17.5 18.3679 16.6667 18.849 16 18.4641L11.5 15.866Z"
          fill="#767676"
        />
      </svg>
    </div>
    <div class="days">
      <div ref="days" class="days-text font-600 !text-0.7rem">
        <span> ش </span>
        <span> ی </span>
        <span> د </span>
        <span> س</span>
        <span> چ </span>
        <span> پ </span>
        <span> ج </span>
      </div>
      <!-- Add Class blue For 'blue' Background And 'red' For a Red Background -->
      <div class="days-number" ref="daysNumber">
        <span v-for="(i, n) in numbersBeforeTheMonthStart" :key="i"> -- </span>
        <span
          v-for="(number, index) in numberDays"
          :key="number"
          :class="getClass(index)"
        >
          <!-- If Number Has  a class it means that it's a object  -->
          {{ number.class ? number["count"] : number }}
        </span>
      </div>
    </div>
    <div class="bg-#814997 rounded-5px mt-2 flex justify-between p-1">
      <span> استراتژی سرمایه گذاری </span>
      <span> 09:45 </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import shamsi_be_miladi, {
  isLeapJalaaliYear,
} from "@/@core/utils/date-converter";
import { ref } from "vue";
import { toEnglishNumbers } from "../utils/to-persian-number";
const days = ref();

// Function getClass
function getClass(index: number) {
  if (index === 4) {
    return "!bg-#814997 rounded-5px text-white  font-700";
  }
  if (index === 7 || index === 10) {
    return "!bg-#F7A600 rounded-5px text-white  font-700";
  }
  if (index === 19) {
    return "!bg-#E30613 rounded-5px text-white  font-700";
  }
}

const year = ref(new Date().getUTCFullYear());
const month = ref(new Date().getUTCMonth());
const day = ref(new Date().getDate());

const date = computed(() => new Date(year.value, month.value, day.value));

const faDate = computed(() =>
  new Intl.DateTimeFormat("fa", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date.value)
);

const dates = ref([]);
let templateDate = computed(() => faDate.value.split(" "));
let isCurrentYearLeapYear = computed(() =>
  isLeapJalaaliYear(toEnglishNumbers(`${templateDate.value[2]}`))
);
let numbersBeforeTheMonthStart = ref(0);

const weekDays = [
  { name: "شنبه" },
  { name: "یکشنبه" },
  { name: "دوشنبه" },
  { name: "سه شنبه" },
  { name: "چهارشنبه" },
  { name: "پنجشنبه" },
  { name: "جمعه" },
];

const faDateAllDigit = computed(() =>
  new Intl.DateTimeFormat("fa", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(date.value)
);

let m = computed(
  () =>
    new Date(
      shamsi_be_miladi(
        +toEnglishNumbers(faDateAllDigit.value.split("/")[0]),
        +toEnglishNumbers(faDateAllDigit.value.split("/")[1]),
        +toEnglishNumbers(faDateAllDigit.value.split("/")[2])
      ) as any
    )
);

let whatDayStartsTheDay = computed(
  () =>
    new Intl.DateTimeFormat("fa", {
      weekday: "long",
    }).format(m.value) as any
);

weekDays.forEach((el, idx) => {
  if (el.name === whatDayStartsTheDay.value)
    numbersBeforeTheMonthStart.value = idx;
});

const monthsOfYear = [
  {
    name: "فروردین",
    days: 31,
    monthNumber: "01",
    currentYear: templateDate.value[2],
  },
  {
    name: "اردیبهشت",
    days: 31,
    monthNumber: "02",
    currentYear: templateDate.value[2],
  },
  {
    name: "خرداد",
    days: 31,
    monthNumber: "03",
    currentYear: templateDate.value[2],
  },
  {
    name: "تیر",
    days: 31,
    monthNumber: "04",
    currentYear: templateDate.value[2],
  },
  {
    name: "مرداد",
    days: 31,
    monthNumber: "05",
    currentYear: templateDate.value[2],
  },
  {
    name: "شهریور",
    days: 31,
    monthNumber: "06",
    currentYear: templateDate.value[2],
  },
  {
    name: "مهر",
    days: 30,
    monthNumber: "07",
    currentYear: templateDate.value[2],
  },
  {
    name: "آبان",
    days: 30,
    monthNumber: "08",
    currentYear: templateDate.value[2],
  },
  {
    name: "آذر",
    days: 30,
    monthNumber: "09",
    currentYear: templateDate.value[2],
  },
  {
    name: "دی",
    days: 30,
    monthNumber: "10",
    currentYear: templateDate.value[2],
  },
  {
    name: "بهمن",
    days: 30,
    monthNumber: "11",
    currentYear: templateDate.value[2],
  },
  {
    name: "اسفند",
    days: isCurrentYearLeapYear.value ? 30 : 29,
    monthNumber: "12",
    currentYear: templateDate.value[2],
  },
];

const currentDaysOfMonth = computed(() => {
  console.log(
    monthsOfYear.find((el) => el.name === templateDate.value[1]) as any
  );
  return monthsOfYear.find((el) => el.name === templateDate.value[1]) as any;
});

// Get Data From Database
let data = ref([]);

let dateForDataBase = computed(
  () =>
    `${toEnglishNumbers(`${currentDaysOfMonth.value.currentYear}`)}/${
      currentDaysOfMonth.value.monthNumber
    }/${toEnglishNumbers(`${templateDate.value[0]}`)}`
);
// in case day is less than 1
let newDate = dateForDataBase.value.split("/") as any;
if (+newDate[1] < 9) newDate[1] = `0${dateForDataBase.value[1]}`;
if (+newDate[2] < 9) newDate[2] = `0${newDate[2]}`;
newDate = newDate.join("/");

// Loop Through Dates And if It's passed give it a red class else blue class

const numberDays = computed(() => [
  ...Array(currentDaysOfMonth.value.days + 1).keys(),
]);

// Make The Numbers Start From 1
numberDays.value.splice(0, 1);

const daysNumber = ref(null) as any;

const updateCalendarClasses = () => {
  //  Reset The Classes

  dates.value = [];
  daysNumber.value.querySelectorAll(".span").forEach((span) => {
    span.classList.remove("red");
    span.classList.remove("blue");
  });

  data.value.forEach((el: any) => {
    dates.value.push(+el.date.split("/")[2]);
  });

  dates.value.forEach((el) => {
    if (+toEnglishNumbers(templateDate[0]) > el)
      numberDays.value[el] = { class: "red", count: el };
    else numberDays.value[el] = { class: "blue", count: el };
  });
};

const formatCardDate = (date) => {
  // let m = moment(date, 'jYYYY/jM/jD');

  let m = new Date(
    shamsi_be_miladi(
      +date.split("/")[0],
      +date.split("/")[1],
      +date.split("/")[2]
    ) as any
  ) as any;

  m = new Date(m)
    .toLocaleDateString("fa-Fa", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    })
    .split(" ");

  let year = m[0],
    month = m[1],
    weekday = m[3],
    day = m[2].split(",")[0];

  return [year, month, weekday, day];
};
</script>
<style lang="scss" scoped>
.calendar {
  margin-inline: auto;
  padding-inline: 0.4rem;

  .calendar-header {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9.4px;
    color: #fff;
    font-size: 0.8rem;
    font-weight: bold;
    inline-size: 100%;
  }

  .days {
    justify-content: space-between;
    border-end-end-radius: 9.4px;
    border-end-start-radius: 9.4px;

    .days-text {
      display: grid;
      justify-content: space-between;
      color: #000;
      font-size: 9px;
      grid-template-columns: repeat(7, 1fr);
      inline-size: 100%;
      margin-block: 0;
      padding-block: 0.4rem;
      padding-block-end: 0.5rem;
      text-align: center;
    }

    .active {
      color: #171717;
    }

    .days-number {
      display: grid;
      align-items: center;
      justify-content: space-between;
      color: #000;
      grid-template-columns: repeat(7, 1fr);
      inline-size: 100%;
      margin-block: 0;
      padding-block-start: 0.4rem;
      row-gap: 0.38rem;
      text-align: center;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1;
        block-size: 1.6rem;
        color: #767676;
        font-size: 0.8rem;
        font-weight: 600;
        inline-size: 1.6rem;
        place-self: center;
      }
    }
  }
}
</style>
