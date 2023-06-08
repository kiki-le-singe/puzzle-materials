import { hasEventCollision } from "@/utils/events";
import { EventProps } from "./types";

export default function Event({ events, event, index }: EventProps) {
  const _hasEventCollision = hasEventCollision(events, event);

  return (
    <div className="relative">
      <div
        className="flex flex-col absolute box-border border-l-4 border-l-blue p-1 font-medium bg-white border border-solid	border-grey"
        style={{
          top: `${event.start}px`,
          height: `${event.end - event.start}px`,
          width: `${_hasEventCollision ? "50%" : "100%"}`,
          left: `${_hasEventCollision && index % 2 === 0 ? "50%" : 0}`,
          zIndex: index,
        }}
      >
        <p className="text-blue text-xs">Sample item</p>
        <p className="text-grey text-xxs">Sample location</p>
      </div>
    </div>
  );
}
