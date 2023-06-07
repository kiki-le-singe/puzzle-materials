"use client";

import React, { useEffect, useState } from "react";

import { CalendarTimeSlot } from "@/data/types";

export default function CalendarTimeSlots() {
  const [timeSlots, setTimeSlots] = useState<CalendarTimeSlot[]>([]);

  useEffect(() => {
    const slots = [];

    for (let i = 9; i <= 21; i++) {
      let hour = i;
      let ampm = "AM";

      if (hour > 12) {
        hour -= 12;
        ampm = "PM";
      }

      slots.push({ time: `${hour}:00${ampm}` });

      if (i !== 21) {
        // Skip adding 9:30 PM
        slots.push({ time: `${hour}:30` });
      }
    }

    setTimeSlots(slots);
  }, []);

  return (
    <div className="timeslots-container">
      {timeSlots.map((slot, index) => (
        <div
          key={index}
          className="time-slot"
          style={{ top: `${index * 30}px` }} // Adjust for half hour slots
        >
          <p>{slot.time}</p>
        </div>
      ))}
    </div>
  );
}
