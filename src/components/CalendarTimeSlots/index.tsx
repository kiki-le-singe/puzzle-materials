"use client";

import React, { useEffect, useState } from "react";

import { CalendarTimeSlot } from "@/data/types";
import Slot from "./components/Slot";
import { getCalendarTimeSlots } from "@/utils/slots";

export default function CalendarTimeSlots() {
  const [timeSlots, setTimeSlots] = useState<CalendarTimeSlot[]>([]);

  useEffect(() => {
    setTimeSlots(getCalendarTimeSlots());
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
