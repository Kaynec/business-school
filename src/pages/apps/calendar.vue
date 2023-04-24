<script setup lang="ts">
import { blankEvent, useCalendar } from "@/views/apps/calendar/useCalendar";
import { useCalendarStore } from "@/views/apps/calendar/useCalendarStore";
import { useResponsiveLeftSidebar } from "@core/composable/useResponsiveSidebar";
import FullCalendar from "@fullcalendar/vue3";

// Components
import CalendarEventHandler from "@/views/apps/calendar/CalendarEventHandler.vue";
import { Ref } from "vue";

// 👉 Store
const store = useCalendarStore();

// 👉 Event
const event = ref(structuredClone(blankEvent));
const isEventHandlerSidebarActive = ref(false);

watch(isEventHandlerSidebarActive, (val) => {
  if (!val) event.value = structuredClone(blankEvent);
});

const { isLeftSidebarOpen } = useResponsiveLeftSidebar();

// 👉 useCalendar
const { refCalendar, calendarOptions, addEvent, updateEvent, removeEvent } =
  useCalendar(event, isEventHandlerSidebarActive, isLeftSidebarOpen);

// SECTION Sidebar
// 👉 Check all
const checkAll = computed({
  /*
    GET: Return boolean `true` => if length of options matches length of selected filters => Length matches when all events are selected
    SET: If value is `true` => then add all available options in selected filters => Select All
          Else if => all filters are selected (by checking length of both array) => Empty Selected array  => Deselect All
  */
  get: () => store.selectedCalendars.length === store.availableCalendars.length,
  set: (val) => {
    if (val)
      store.selectedCalendars = store.availableCalendars.map((i) => i.label);
    else if (store.selectedCalendars.length === store.availableCalendars.length)
      store.selectedCalendars = [];
  },
});
//
const { updateBg } = inject("showBackgroundImage") as {
  showBackgroundImage: Ref<boolean>;
  updateBg: (boolean: boolean) => void;
};
onMounted(() => {
  updateBg(true);
});
onBeforeUnmount(() => {
  updateBg(false);
});
</script>

<template>
  <div>
    <VCard class="custom">
      <!-- `z-index: 0` Allows overlapping vertical nav on calendar -->
      <VLayout style="z-index: 0">
        <!-- 👉 Navigation drawer -->
        <VNavigationDrawer
          v-model="isLeftSidebarOpen"
          width="250"
          absolute
          touchless
          location="start"
          class="calendar-add-event-drawer"
          :temporary="$vuetify.display.mdAndDown"
          style="background: #282828; border-top-right-radius: 2.4rem"
        >
          <div class="pa-5 !flex flex-col gap-y-8 pt-8">
            <div>
              <p class="text-xl text-uppercase text-white text-bold mb-3 peyda">
                تقویم دوره‌ها
              </p>

              <div class="!flex flex-col calendars-checkbox">
                <VCheckbox
                  v-model="checkAll"
                  label="مشاهده همه"
                  density="default"
                  color="secondary"
                />
                <VCheckbox
                  v-for="calendar in store.availableCalendars"
                  :key="calendar.label"
                  v-model="store.selectedCalendars"
                  :value="calendar.label"
                  :color="calendar.color"
                  :label="calendar.label"
                  density="default"
                />
              </div>
            </div>
          </div>
        </VNavigationDrawer>
        <VMain>
          <FullCalendar ref="refCalendar" :options="calendarOptions" />
        </VMain>
      </VLayout>
    </VCard>
    <CalendarEventHandler
      v-model:isDrawerOpen="isEventHandlerSidebarActive"
      :event="event"
      @add-event="addEvent"
      @update-event="updateEvent"
      @remove-event="removeEvent"
    />
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/libs/full-calendar";

.calendars-checkbox {
  .v-label {
    color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
    opacity: var(--v-high-emphasis-opacity);
  }
}

.calendar-add-event-drawer {
  &.v-navigation-drawer:not(.v-navigation-drawer--temporary) {
    border-end-start-radius: 0.375rem;
    border-start-start-radius: 0.375rem;
  }
}

.v-card.custom {
  z-index: 10 !important;
  border-radius: 2.4rem;
  background-color: #282828 !important;
}

.v-layout {
  z-index: 10 !important;
  border-radius: 2.4rem;
  background-color: #282828 !important;
}

.fc-theme-standard .fc-scrollgrid {
  border-inline-end: none;
}
</style>

<style lang="scss" scoped>
.v-layout {
  overflow: visible !important;

  .v-card {
    overflow: visible;
  }
}

.fc.fc-toolbar {
  display: none !important;
}
</style>
