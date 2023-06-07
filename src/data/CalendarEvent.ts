import { CalendarEvent } from "./types";

export const CalendarEventsData: CalendarEvent[] = [
  { start: 30, end: 150 },
  { start: 540, end: 600 },
  { start: 560, end: 620 },
  { start: 610, end: 670 },
];

// [
//   { start: 30, end: 150 },
//   { start: 540, end: 600 },
//   { start: 560, end: 620 },
//   { start: 610, end: 670 },
//   { start: 610, end: 670 },
//   { start: 230, end: 500 },
//   { start: 700, end: 710 },
//   { start: 180, end: 690 },
// ]

export function sortCalendarEvents(events: CalendarEvent[]): CalendarEvent[] {
  return events.sort((a, b) => a.start - b.start);
}
