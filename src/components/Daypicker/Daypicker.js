import React, { useState } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

function Daypicker(props) {
  const [selectedDay, setSelectedDay] = useState(undefined);

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };
  console.log("day time here:", selectedDay);
  return (
    <div>
      {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>}
      {!selectedDay}
      <DayPickerInput onDayChange={handleDayChange} />
    </div>
  );
}
export default Daypicker;
