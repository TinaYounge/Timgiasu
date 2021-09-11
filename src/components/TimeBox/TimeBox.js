import React from "react";
import "./Style.css";
function TimeBox({ time }) {
  return (
    <div>
      <button className=" btn btn-warning mt-auto">{time}</button>
    </div>
  );
}

export default TimeBox;
