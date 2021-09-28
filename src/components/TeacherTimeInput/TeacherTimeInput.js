import moment from "moment";
import React from "react";
import DayInput from "./DayInput";
function TeacherTimeInput({ singleUserInfo }) {
  const DayPerWeek = [
    moment().format("MMM Do YY"),
    moment().add(1, "days").format("MMM Do YY"),
    moment().add(2, "days").format("MMM Do YY"),
    moment().add(3, "days").format("MMM Do YY"),
    moment().add(4, "days").format("MMM Do YY"),
    moment().add(5, "days").format("MMM Do YY"),
    moment().add(6, "days").format("MMM Do YY"),
    // moment().add(7, "days").format("MMM Do YY"),
    // moment().add(8, "days").format("MMM Do YY"),
    // moment().add(9, "days").format("MMM Do YY"),
    // moment().add(10, "days").format("MMM Do YY"),
    // moment().add(11, "days").format("MMM Do YY"),
    // moment().add(12, "days").format("MMM Do YY"),
    // moment().add(13, "days").format("MMM Do YY"),
  ];
  console.log("JAJAA", moment().add(7, "days").toString());
  let RenderCard;
  if (DayPerWeek) {
    RenderCard = DayPerWeek.map((item) => {
      return <div className="col">{item}</div>;
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
      <h2>Thêm thời gian biểu</h2>

      <div
        className="fs-3  px-5 text-center  py-5 "
        style={{ background: "rgb(248, 245, 238)" }}
      >
        <div className="py-2 fw-bolder  ">Chọn thời gian dạy học</div>
        <div style={{ marginBottom: "10px" }} className="row">
          <div className=" col"></div>

          <button
            className=" btn mt-auto col-2"
            style={{
              backgroundColor: "green",
              marginRight: "5px",
              color: "white",
            }}
          >
            Giờ trống
          </button>
          <button
            className=" btn mt-auto col-2"
            style={{ backgroundColor: "red", color: "white" }}
          >
            Giờ bận
          </button>
        </div>
        <div className="card-group container" style={{ background: "white" }}>
          {RenderCard}
        </div>
      </div>
    </div>
  );
}

export default TeacherTimeInput;
