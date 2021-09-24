import React from "react";
import "./Style.css";
function TimeBox({ time }) {
  return time.value === "1" ? (
    <div>
      <button className=" btn mt-auto" style={{ backgroundColor: "green" }}>
        {time.timeId}
      </button>
    </div>
  ) : (
    <div>
      <button className=" btn mt-auto" style={{ backgroundColor: "red" }}>
        {time.timeId}
      </button>
    </div>
  );
}

export default TimeBox;
