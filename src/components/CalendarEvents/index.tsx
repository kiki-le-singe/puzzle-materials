"use client";

import React, { useEffect, useState } from "react";

import { CalendarEventsData, sortCalendarEvents } from "@/data/CalendarEvent";
import { CalendarEvent } from "@/data/types";
import Event from "./components/Event";

export default function CalendarEvents() {
  const [events, setEvents] = useState<CalendarEvent[]>(CalendarEventsData);

  function layOutDay(events: CalendarEvent[]) {
    // we check if events is an array
    if (!Array.isArray(events)) {
      throw new Error("events must be an array");
    }

    // we check if it has a start and end property, and if both are numbers
    events.forEach((event) => {
      if (typeof event.start !== "number" || typeof event.end !== "number") {
        throw new Error(
          "Each event must be an object with 'start' and 'end' properties of type number"
        );
      }

      if (
        event.start < 0 ||
        event.start >= 720 ||
        event.end < 0 ||
        event.end > 720
      ) {
        throw new Error(
          "'start' and 'end' properties must be non-negative and within the range 0-720"
        );
      }

      if (event.end <= event.start) {
        throw new Error("'end' property must be greater than 'start' property");
      }
    });

    // NOTE: Some validations (above) might be overkill in a TypeScript project but `layoutDay` is globally accessible.

    setEvents(sortCalendarEvents(events));
  }

  // Allow to put layOutDay in the global namespace.
  // To change the state of the events, you can call the layOutDay function like that in the browser's console:
  // - layOutDay([]);
  // - layOutDay([{ start: 30, end: 150 }, { start: 540, end: 600 }]);
  useEffect(() => {
    globalThis.layOutDay = layOutDay;
  }, []);

  function renderEvents() {
    return events.map((event, index) => (
      <Event
        key={`Event_${index}`}
        events={events}
        event={event}
        index={index}
      />
    ));
  }

  return (
    <div className="events-container relative top-2 py-0 px-2.5 w-[37.5rem] h-[45rem] bg-light-grey">
      {renderEvents()}
    </div>
  );
}
