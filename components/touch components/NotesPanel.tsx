"use client";

import { useState, useEffect } from "react";

export default function NotesPanel({ startDate, endDate }: any) {
  const [notes, setNotes] = useState("");
  const [allNotes, setAllNotes] = useState<any>({});

  const key = startDate && endDate
    ? `${startDate}-${endDate}`
    : "default";

  useEffect(() => {
    const saved = localStorage.getItem("notes");
    if (saved) setAllNotes(JSON.parse(saved));
  }, []);

  useEffect(() => {
    setNotes(allNotes[key] || "");
  }, [key]);

  const saveNote = () => {
    const updated = { ...allNotes, [key]: notes };
    setAllNotes(updated);
    localStorage.setItem("notes", JSON.stringify(updated));
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <textarea
        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows={4}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button
        onClick={saveNote}
        className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
      >
        Save Note
      </button>
    </div>
  );
}