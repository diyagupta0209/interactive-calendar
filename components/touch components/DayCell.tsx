"use client";
import { isToday } from "date-fns";
import { format, isSameDay, isAfter, isBefore } from "date-fns";

export default function DayCell({
  day,
  startDate,
  endDate,
  onClick,
}: any) {
  const todayClass = isToday(day) ? "border border-blue-500" : "";
  // ✅ check if this day is selected
  const isSelected =
    (startDate && isSameDay(day, startDate)) ||
    (endDate && isSameDay(day, endDate));

  // ✅ check if this day is inside range
  const isInRange =
    startDate &&
    endDate &&
    isAfter(day, startDate) &&
    isBefore(day, endDate);

  return (
    <div
      onClick={onClick}
      className={`
        p-3 rounded-xl cursor-pointer text-center transition-all duration-200

        ${isSelected ? "bg-blue-600 text-white shadow-md scale-105" : ""}
        ${isInRange ? "bg-blue-100 text-blue-700" : ""}
        ${todayClass}

        hover:bg-blue-50 hover:scale-105
      `}
    >
      {format(day, "d")}
    </div>
  );
}