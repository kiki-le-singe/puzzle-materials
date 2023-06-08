import { SlotProps } from "./types";

export default function Slot({ slot, index }: SlotProps) {
  return (
    <div
      className="flex justify-end absolute text-xs font-bold w-full text-black"
      style={{ top: `${index * 30}px` }} // Adjust for half hour slots
    >
      <p className={`${slot.isHalfHour ? "text-dark-grey text-xxs" : ""}`}>
        {slot.time}{" "}
        <span className="uppercase text-dark-grey text-xxs">{slot.label}</span>
      </p>
    </div>
  );
}
