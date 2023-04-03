import axios from "@axios";
import type { Event, NewEvent } from "./types";

export const useCalendarStore = defineStore("calendar", {
  // arrow function recommended for full type inference
  state: () => ({
    availableCalendars: [
      {
        color: "error",
        label: "شخصی",
      },
      {
        color: "primary",
        label: "کار",
      },
      {
        color: "warning",
        label: "خانوادگی",
      },
      {
        color: "success",
        label: "تفریحات",
      },
      {
        color: "info",
        label: "بقیه",
      },
    ],
    selectedCalendars: ["شخصی", "کار", "خانوادگی", "تفریحات", "بقیه"],
  }),
  actions: {
    async fetchEvents() {
      return axios.get("/apps/calendar/events", {
        params: { calendars: this.selectedCalendars.join(",") },
      });
    },
    async addEvent(event: NewEvent) {
      return axios.post("/apps/calendar/events", { event });
    },
    async updateEvent(event: Event) {
      return axios.post(`/apps/calendar/events/${event.id}`, { event });
    },
    async removeEvent(eventId: string) {
      return axios.delete(`/apps/calendar/events/${eventId}`);
    },
  },
});
