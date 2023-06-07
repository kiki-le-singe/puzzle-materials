"use client";

import React, { useEffect, useState } from "react";

import { CalendarEventsData, sortCalendarEvents } from "@/data/CalendarEvent";
import { CalendarEvent } from "@/data/types";

export default function CalendarEvents() {
  const [events, setEvents] = useState<CalendarEvent[]>(CalendarEventsData);

  // Allow to put layOutDay in the global namespace.
  // To change the state of the events, you can call the layOutDay function like that in the browser's console:
  // - layOutDay.call(null, []);
  // - layOutDay.call(null, [{ start: 30, end: 150 }, { start: 540, end: 600 }]);
  // ...
  // or with Function.prototype.apply()
  // - layOutDay.apply(null, [[]]);
  // - layOutDay.apply(null, [[{ start: 30, end: 150 }, { start: 540, end: 600 }]]);
  // ...
  useEffect(() => {
    globalThis.layOutDay = function (events: CalendarEvent[]) {
      setEvents(sortCalendarEvents(events));
    };
  }, []);

  return (
    <div className="events-container">
      {events.map((event, index) => {
        return (
          <div key={index} className="event-container">
            <div
              className="event"
              style={{
                top: `${event.start}px`,
                height: `${event.end - event.start}px`,
                width: `${
                  events.filter(
                    (e) => e.start < event.end && e.end > event.start
                  ).length > 1
                    ? "50%"
                    : "100%"
                }`,
                left: `${
                  events.filter(
                    (e) => e.start < event.end && e.end > event.start
                  ).length > 1 && index % 2 === 0
                    ? "50%"
                    : 0
                }`,
                zIndex: index,
              }}
            >
              <p className="event-item">Sample item</p>
              <p className="event-location">Sample location</p>
              <p className="event-event">Event {index + 1}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
