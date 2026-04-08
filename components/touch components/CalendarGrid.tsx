"use client";

import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
} from "date-fns";

import DayCell from "./DayCell";

export default function CalendarGrid({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: any) {
  const today = new Date();

  const days = eachDayOfInterval({
    start: startOfMonth(today),
    end: endOfMonth(today),
  });

  const handleClick = (day: Date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(day);
      setEndDate(null);
    } else if (day < startDate) {
      setStartDate(day);
    } else {
      setEndDate(day);
    }
  };

  return (
    <>
      {/* Month Header */}
      <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
        {format(today, "MMMM yyyy")}
      </h2>

      {/* Days of Week */}
      <div className="grid grid-cols-7 text-center text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
        {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-3 p-5 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100">
        {days.map((day) => (
          <DayCell
            key={day.toString()}
            day={day}
            startDate={startDate}
            endDate={endDate}
            onClick={() => handleClick(day)}
          />
        ))}
      </div>
    </>
  );
}