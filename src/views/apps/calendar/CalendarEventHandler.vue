<script setup lang="ts">
import type { Options } from "flatpickr";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { VForm } from "vuetify/components";

import avatar1 from "@images/avatars/avatar-1.png";
import avatar2 from "@images/avatars/avatar-2.png";
import avatar3 from "@images/avatars/avatar-3.png";
import avatar5 from "@images/avatars/avatar-5.png";
import avatar6 from "@images/avatars/avatar-6.png";
import avatar7 from "@images/avatars/avatar-7.png";
import type { Event, NewEvent } from "./types";
import { useCalendarStore } from "./useCalendarStore";

import { requiredValidator, urlValidator } from "@validators";

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "update:isDrawerOpen", val: boolean): void;
  (e: "addEvent", val: NewEvent): void;
  (e: "updateEvent", val: Event): void;
  (e: "removeEvent", eventId: string): void;
}>();

interface Props {
  isDrawerOpen: boolean;
  event: Event | NewEvent;
}

// 👉 store
const store = useCalendarStore();
const refForm = ref<VForm>();

// 👉 Event
const event = ref<Event | NewEvent>(JSON.parse(JSON.stringify(props.event)));

const resetEvent = () => {
  event.value = JSON.parse(JSON.stringify(props.event));
  nextTick(() => {
    refForm.value?.resetValidation();
  });
};

watch(() => props.isDrawerOpen, resetEvent);

const removeEvent = () => {
  emit("removeEvent", event.value.id);

  // Close drawer
  emit("update:isDrawerOpen", false);
};

const handleSubmit = () => {
  refForm.value?.validate().then(({ valid }) => {
    if (valid) {
      // If id exist on id => Update event
      if ("id" in event.value) emit("updateEvent", event.value);
      // Else => add new event
      else emit("addEvent", event.value);

      // Close drawer
      emit("update:isDrawerOpen", false);
    }
  });
};

const guestsOptions = [
  { avatar: avatar1, name: "Jane Foster" },
  { avatar: avatar3, name: "Donna Frank" },
  { avatar: avatar5, name: "Gabrielle Robertson" },
  { avatar: avatar7, name: "Lori Spears" },
  { avatar: avatar6, name: "Sandy Vega" },
  { avatar: avatar2, name: "Cheryl May" },
];

// 👉 Form

const onCancel = () => {
  emit("update:isDrawerOpen", false);

  nextTick(() => {
    refForm.value?.reset();
    resetEvent();
    refForm.value?.resetValidation();
  });
};

const startDateTimePickerConfig = computed(() => {
  const config: Options = { enableTime: true, dateFormat: "Y-m-d H:i" };

  if (event.value.end) config.maxDate = event.value.end;

  return config;
});

const endDateTimePickerConfig = computed(() => {
  const config: Options = { enableTime: true, dateFormat: "Y-m-d H:i" };

  if (event.value.start) config.minDate = event.value.start;

  return config;
});
</script>

<template>
  <div
    @click.self="$emit('update:isDrawerOpen', false)"
    :class="`${
      props.isDrawerOpen ? 'absolute inset-0 backdrop-blur z-1000' : ''
    }`"
    class="peyda"
  >
    <VNavigationDrawer
      temporary
      location="end"
      :model-value="props.isDrawerOpen"
      width="420"
      class="bg-#282828"
      @click.stop="() => null"
    >
      <!-- 👉 Header -->
      <AppDrawerHeaderSection
        :title="event.id ? 'آپدیت کردن رویداد' : 'اضافه کردن رویداد'"
        class="!bg-#333333 !text-3xl !text-center"
      >
      </AppDrawerHeaderSection>

      <PerfectScrollbar :options="{ wheelPropagation: false }">
        <VCardText>
          <!-- SECTION Form -->
          <VForm ref="refForm" @submit.prevent="handleSubmit">
            <VRow>
              <VCol cols="12">
                <AppDateTimePicker
                  :key="JSON.stringify(startDateTimePickerConfig)"
                  v-model="event.start"
                  :rules="[requiredValidator]"
                  label="تاریخ "
                  :config="startDateTimePickerConfig"
                />
              </VCol>

              <!-- 👉 Title -->
              <VCol cols="12">
                <VTextField
                  v-model="event.title"
                  label="ساعت شروع"
                  :rules="[requiredValidator]"
                />
              </VCol>

              <VCol cols="12">
                <VTextField
                  v-model="event.title"
                  label="ساعت پایان"
                  :rules="[requiredValidator]"
                />
              </VCol>

              <!-- 👉 Calendar -->
              <VCol cols="12">
                <VSelect
                  v-model="event.extendedProps.calendar"
                  label="تقویم"
                  :rules="[requiredValidator]"
                  :items="store.availableCalendars"
                  :item-title="(item) => item.label"
                  :item-value="(item) => item.label"
                >
                </VSelect>
              </VCol>

              <VCol cols="12">
                <VSelect
                  v-model="event.extendedProps.calendar"
                  label="دوره"
                  :rules="[requiredValidator]"
                  :items="store.availableCalendars"
                  :item-title="(item) => item.label"
                  :item-value="(item) => item.label"
                >
                </VSelect>
              </VCol>
              <VCol cols="12">
                <VSelect
                  v-model="event.extendedProps.calendar"
                  label="سر فصل"
                  :rules="[requiredValidator]"
                  :items="store.availableCalendars"
                  :item-title="(item) => item.label"
                  :item-value="(item) => item.label"
                >
                </VSelect>
              </VCol>

              <!-- 👉 Location -->
              <VCol cols="12">
                <VTextField
                  v-model="event.extendedProps.location"
                  label="نام مدرس"
                />
              </VCol>
              <!-- 👉 Event URL -->
              <VCol cols="12">
                <VTextField
                  v-model="event.url"
                  label="لینک کلاس"
                  :rules="[urlValidator]"
                  type="url"
                />
              </VCol>

              <!-- 👉 Form buttons -->
              <VCol cols="12" class="flex gap-1">
                <VBtn
                  class="basis-50% rounded-10px"
                  variant="outlined"
                  color="primary"
                >
                  جزوات درس
                </VBtn>
                <VBtn type="submit" class="me-3 basis-50% rounded-10px">
                  ویدیو کلاس
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
          <!-- !SECTION -->
        </VCardText>
      </PerfectScrollbar>
    </VNavigationDrawer>
  </div>
</template>
