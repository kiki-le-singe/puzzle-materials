import { CalendarEvent } from "@/data/types";

export function hasEventCollision(
  events: CalendarEvent[],
  event: CalendarEvent
): boolean {
  return (
    events.filter((e) => e.start < event.end && e.end > event.start).length > 1
  );
}
