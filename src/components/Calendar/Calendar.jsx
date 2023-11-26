import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { Calendar } from "react-date-range";
import { useState } from "react";
import { useMemo } from "react";
import { addDays, format } from "date-fns";
import { enUS } from "date-fns/locale";

import { utcToZonedTime, zonedTimeToUtc } from "date-fns-tz";

const CalendarBooking = ({ onChangeDate, initalDate }) => {
  const [state, setState] = useState(initalDate);

  const vietnamTimeZone = "Asia/Ho_Chi_Minh";

  const handleDateChange = (newValue) => {
    setState(newValue);
    // Gọi callback function để thông báo giá trị mới về component cha
    onChangeDate(newValue);
  };

  const minDate = useMemo(() => addDays(new Date(), 6), []);

  return (
    <Calendar
      date={state}
      onChange={(newValue) => {
        handleDateChange(newValue);
      }}
      minDate={minDate}
      locale={enUS}
      s
    />
  );
};

export default CalendarBooking;
