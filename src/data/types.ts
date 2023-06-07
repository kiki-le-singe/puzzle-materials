export type CalendarEvent = {
  start: number;
  end: number;
};

export type CalendarTimeSlot = {
  time: string;
  isHalfHour: boolean;
  label?: string | null;
};
