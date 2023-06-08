import { CalendarTimeSlot } from "@/data/types";

export function getCalendarTimeSlots(): CalendarTimeSlot[] {
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

  return slots;
}
