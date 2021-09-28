import moment from "moment";
import React from "react";

function DayInput({ day }) {
  const AllTimeOfDay = day;

  let RenderCard;
  if (AllTimeOfDay) {
    RenderCard = AllTimeOfDay.map((timeItem) => {
      return <div>KAKAK </div>;
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
          <th style={{ color: "grey", fontSize: "20px" }}>hggg</th>
        </thead>
        <tbody>
          <td class="table-primary"> {RenderCard}</td>
        </tbody>
      </table>
    </div>
  );
}
export default DayInput;
