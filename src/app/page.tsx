import CalendarEvents from "@/components/CalendarEvents";
import CalendarTimeSlots from "@/components/CalendarTimeSlots";

export default function Home() {
  return (
    <div className="calendar">
      <CalendarTimeSlots />
      <CalendarEvents />
    </div>
  );
}
