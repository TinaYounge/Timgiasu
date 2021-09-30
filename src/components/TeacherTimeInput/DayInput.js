import moment from "moment";
import React from "react";
import { Button, Card } from "react-bootstrap";

function DayInput({ day }) {
  // const AllTimeOfDay = day;
  const AllTimeOfDay = [
    "7:00",
    "7:30",
    "8:00",
    "8:30",
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
  ];

  let RenderCard;
  if (AllTimeOfDay) {
    RenderCard = AllTimeOfDay.map((timeItem) => {
      return (
        <Card as="a" className="btn-gradRed">
          {timeItem}
        </Card>
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
          <td class="table-primary"> {RenderCard}</td>
        </tbody>
      </table>
    </div>
  );
}
export default DayInput;
