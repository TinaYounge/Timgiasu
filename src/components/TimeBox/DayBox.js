import React from "react";
import TimeBox from "./TimeBox";

function DayBox({ day }) {
  const TimePerDay = [
    "7h00",
    "7h30",
    "8h00",
    "8h30",
    "9h00",
    "9h30",
    "10h00",
    "10h30",
    "11h00",
    "11h30",
    "12h00",
    "12h30",
    "13h00",
    "13h30",
    "14h00",
    "14h30",
    "15h00",
    "15h30",
    "16h00",
    "16h30",
    "17h00",
    "17h30",
    "18h00",
    "18h30",
    "19h00",
    "19h30",
    "20h00",
    "20h30",
    "21h00",
    "21h30",
  ];
  let RenderCard;
  if (TimePerDay) {
    RenderCard = TimePerDay.map((item) => {
      return (
        <div>
          <TimeBox time={item} />
        </div>
      );
    });
  } else {
    RenderCard = (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div>
      <table className="table">
        <thead>
          <th style={{ color: "grey", fontSize: "20px" }}>{day}</th>
        </thead>
        <tbody>
          <td class="table-primary" > {RenderCard}</td>
        </tbody>
      </table>
    </div>
  );
}

export default DayBox;
