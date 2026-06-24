import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const ApplicationCalendar = () => {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const todaysDate = new Date();
  const [currentDate, setCurrentDate] = useState(todaysDate);
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const firstDayIndex = new Date(year, month, 1).getDay();

  const emptySlots = Array(firstDayIndex).fill(null);

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const calendarCells = [...emptySlots, ...daysArray];

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  return (
    <div className="border-border h-full w-full rounded-xl border bg-(--card-background) p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-(--ink-text-dark)">
          {months[month]} {year}
        </h2>
        <div className="flex gap-2 text-(--ink-text-light)">
          <Button
            variant="ghost"
            className="flex items-center gap-1"
            onClick={handlePrevMonth}
          >
            <ChevronLeft className="mt-0.5 h-4 w-4" /> prev
          </Button>
          <Button
            variant="ghost"
            className="flex items-center gap-1"
            onClick={handleNextMonth}
          >
            next <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-7 gap-2">
        {weekdays.map((day) => (
          <div
            key={day}
            className="pb-2 text-center text-[10px] tracking-wider text-(--ink-text-light) uppercase"
          >
            {day}
          </div>
        ))}

        {calendarCells.map((day, index) => (
          <div
            key={index}
            className={`border-border min-h-21 rounded-lg border p-2 text-xs text-(--ink-text-dark) ${
              day ? "bg-(--accent-background)" : "bg-transparent"
            } ${
              day === new Date().getDate() &&
              month === new Date().getMonth() &&
              year === new Date().getFullYear()
                ? "text-(--accent-text-medium)"
                : ""
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationCalendar;
