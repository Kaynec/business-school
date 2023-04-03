import mock from "@/@fake-db/mock";
import type { CalendarEvent } from "@/@fake-db/types";
import { genId } from "@/@fake-db/utlis";

const date = new Date();
const nextDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
const nextMonth =
  date.getMonth() === 11
    ? new Date(date.getFullYear() + 1, 0, 1)
    : new Date(date.getFullYear(), date.getMonth() + 1, 1);
const prevMonth =
  date.getMonth() === 11
    ? new Date(date.getFullYear() - 1, 0, 1)
    : new Date(date.getFullYear(), date.getMonth() - 1, 1);

const data: { events: CalendarEvent[] } = {
  events: [
    {
      id: "1",
      url: "",
      title: "بررسی",
      start: date.toUTCString(),
      end: nextDay.toUTCString(),
      allDay: false,
      extendedProps: {
        calendar: "کار",
      },
    },
    {
      id: "2",
      url: "",
      title: "مشتری",
      start: new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        -11
      ).toUTCString(),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -10).toUTCString(),
      allDay: true,
      extendedProps: {
        calendar: "کار",
      },
    },
    {
      id: "3",
      url: "",
      title: "سفر خانوادگی",
      allDay: true,
      start: new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        -9
      ).toUTCString(),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -7).toUTCString(),
      extendedProps: {
        calendar: "تعطیلات",
      },
    },
    {
      id: "4",
      url: "",
      title: "ویزیت دکتر",
      start: new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        -11
      ).toUTCString(),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -10).toUTCString(),
      allDay: true,
      extendedProps: {
        calendar: "شخصی",
      },
    },
    {
      id: "5",
      url: "",
      title: "? بازی دارت",
      start: new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        -13
      ).toUTCString(),
      end: new Date(date.getFullYear(), date.getMonth() + 1, -12).toUTCString(),
      allDay: true,
      extendedProps: {
        calendar: "بقیه",
      },
    },
  ],
};

// ------------------------------------------------
// GET: Return calendar events
// ------------------------------------------------
mock.onGet("/apps/calendar/events").reply((config) => {
  // Get requested calendars as Array
  const calendars = config.params.calendars.split(",");

  return [
    200,
    data.events.filter((event) =>
      calendars.includes(event.extendedProps.calendar)
    ),
  ];
});

// ------------------------------------------------
// POST: Add new event
// ------------------------------------------------
mock.onPost("/apps/calendar/events").reply((config) => {
  // Get event from post data
  const { event } = JSON.parse(config.data);

  event.id = String(genId(data.events));

  data.events.push(event);

  return [201, { event }];
});

// ------------------------------------------------
// POST: Update Event
// ------------------------------------------------
mock.onPost(/\/apps\/calendar\/events\/\d+/).reply((config) => {
  const { event: eventData } = JSON.parse(config.data);

  const event = data.events.find((e) => e.id === eventData.id);
  if (event) {
    Object.assign(event, eventData);

    return [200, { event }];
  }

  return [400, { message: "Something went wrong" }];
});

// ------------------------------------------------
// DELETE: Remove Event
// ------------------------------------------------
mock.onDelete(/\/apps\/calendar\/events\/\d+/).reply((config) => {
  // Get event id from URL
  const eventId = config.url?.substring(config.url.lastIndexOf("/") + 1);

  const eventIndex = data.events.findIndex((e) => e.id === eventId);

  data.events.splice(eventIndex, 1);

  return [200];
});
