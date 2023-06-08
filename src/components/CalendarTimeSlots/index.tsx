"use client";

import React, { useEffect, useState } from "react";

import { CalendarTimeSlot } from "@/data/types";
import Slot from "./components/Slot";

export default function CalendarTimeSlots() {
  const [timeSlots, setTimeSlots] = useState<CalendarTimeSlot[]>([]);

  useEffect(() => {
    const slots = [];

    for (let i = 9; i <= 21; i++) {
      let hour = i;
      let ampm = "am";

      if (hour > 12) {
        hour -= 12;
        ampm = "pm";
      }

      slots.push({
        time: `${hour}:00`,
        isHalfHour: false,
        label: ampm,
      });

      if (i !== 21) {
        // Skip adding 9:30 PM
        slots.push({ time: `${hour}:30`, isHalfHour: true });
      }
    }

    setTimeSlots(slots);
  }, []);

  function renderTimeSlots() {
    return timeSlots.map((slot, index) => (
      <Slot key={`Slot_${index}`} slot={slot} index={index} />
    ));
  }

  return (
    <div className="relative w-14 mr-2.5 h-[45rem]">{renderTimeSlots()}</div>
  );
}
