import { CalendarEvent } from "@/data/types";

declare global {
  function layOutDay(events: CalendarEvent[]): void;
}
