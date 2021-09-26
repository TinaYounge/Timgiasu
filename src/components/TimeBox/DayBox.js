import moment from "moment";
import React from "react";
import TimeBox from "./TimeBox";

function DayBox({ dayAndTime }) {
  const classisBookCheck = dayAndTime.classIsBook;

  const AllTimeOfDay = dayAndTime.item.time;

  let RenderCard;
  if (AllTimeOfDay) {
    RenderCard = AllTimeOfDay.map((timeItem) => {
      timeItem.date = dayAndTime.item.day;
      return (
        <div>
          <TimeBox timeAll={{ timeItem, classisBookCheck }} />
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
          <th style={{ color: "grey", fontSize: "20px" }}>
            {moment(dayAndTime.item.day).format("ddd Do")}
          </th>
        </thead>
        <tbody>
          <td class="table-primary"> {RenderCard}</td>
        </tbody>
      </table>
    </div>
  );
}
export default DayBox;
