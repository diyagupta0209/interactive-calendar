"use client";

import { useState } from "react";
import CalendarGrid from "./CalendarGrid";
import NotesPanel from "./NotesPanel";
import Image from "next/image";

export default function Calendar() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      
      {/* 🖼 Image Section */}
      <div className="bg-amber-50 p-6 rounded-2xl shadow-xl">
        <div className="relative h-64 md:h-full rounded-2xl overflow-hidden shadow-lg">
  <Image
    src="/calendar.jpg"
    alt="calendar"
    fill
    className="object-cover"
  />
</div>
      </div>

      {/* 📅 Calendar + Notes */}
      <div className="flex flex-col gap-4">
        <CalendarGrid
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />

        <NotesPanel
          startDate={startDate}
          endDate={endDate}
        />
      </div>
    </div>
  );
}