import React from "react";
import DayBox from "./DayBox";

function RenderBox({ singleTeacherInfo }) {
  console.log("loveeeee", singleTeacherInfo.availableTime);

  const DayPerWeek = singleTeacherInfo.availableTime;
  let RenderCard;
  if (DayPerWeek) {
    RenderCard = DayPerWeek.map((item) => {
      return (
        <div className="col">
          <DayBox dayAndTime={item} />
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
    <div
      className="fs-3  px-5 text-center  py-5 "
      style={{ background: "rgb(248, 245, 238)" }}
    >
      <div className="py-2 fw-bolder  ">Chọn thời gian học cùng với gia sư</div>
      <div style={{ marginBottom: "10px" }}>
        <button
          className=" btn mt-auto"
          style={{ backgroundColor: "green", marginRight: "5px" }}
        >
          Giờ trống
        </button>
        <button className=" btn mt-auto" style={{ backgroundColor: "red" }}>
          Giờ bận
        </button>
      </div>

      <div className="card-group container" style={{ background: "white" }}>
        {RenderCard}
      </div>
    </div>
  );
}

export default RenderBox;
