import React from "react";
import DayBox from "./DayBox";

function RenderBox() {
  const DayPerWeek = [
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7",
    "Chủ nhật",
  ];
  let RenderCard;
  if (DayPerWeek) {
    RenderCard = DayPerWeek.map((item) => {
      return (
        <div className="col">
          <DayBox day={item} />
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
      <div className="card-group container" style={{ background: "white" }}>
        {RenderCard}
      </div>
    </div>
  );
}

export default RenderBox;
