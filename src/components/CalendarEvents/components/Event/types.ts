import { CalendarEvent } from "@/data/types";

export type EventProps = {
  events: CalendarEvent[];
  event: CalendarEvent;
  index: number;
};
