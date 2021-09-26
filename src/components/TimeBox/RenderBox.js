import React, { useState } from "react";
import moment from "moment";

function TimeBox({ timeAll }) {
  const time = timeAll.timeItem;
  const classIsBookWithDate = timeAll.classIsBookWithDate;
  const [classIsBookWithDateAndTime, setClassIsBookWithDateAndTime] =
    useState(classIsBookWithDate);
  const getTime = (time) => {
    setClassIsBookWithDateAndTime({
      ...classIsBookWithDateAndTime,
      timeId: time,
    });
  };
  console.log("classIsBookWithDateAndTime", classIsBookWithDateAndTime);
  return time.value === "1" ? (
    <div>
      <button
        className=" btn mt-auto"
        style={{ backgroundColor: "green", color: "white" }}
        onClick={() => {
          getTime(time.timeId);
        }}
      >
        {time.timeId}
      </button>
    </div>
  ) : (
    <div>
      <button
        className=" btn mt-auto"
        style={{ backgroundColor: "red", color: "white" }}
      >
        {time.timeId}
      </button>
    </div>
  );
}

function DayBox({ dayAndTime }) {
  const classisBookCheck = dayAndTime.classIsBook;
  const [classIsBookWithDate, setClassIsBookWithDate] =
    useState(classisBookCheck);

  const onlyTime = dayAndTime.item.time;

  let RenderCard;
  if (onlyTime) {
    RenderCard = onlyTime.map((timeItem) => {
      return (
        <div>
          <TimeBox timeAll={{ timeItem, classIsBookWithDate }} />
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
  const getDate = (dateUpDate) => {
    setClassIsBookWithDate({ ...classIsBookWithDate, day: dateUpDate });
  };
  console.log("classIsBookWithDate", classIsBookWithDate);
  return (
    <div>
      <table className="table">
        <thead>
          <button
            style={{ color: "grey", fontSize: "20px" }}
            onClick={() => getDate(dayAndTime.item.day)}
          >
            {moment(dayAndTime.item.day).format("ddd Do")}
          </button>
        </thead>
        <tbody>
          <td class="table-primary"> {RenderCard}</td>
        </tbody>
      </table>
    </div>
  );
}

function RenderBox({ singleTeacherInfo }) {
  const [classIsBook, setClassIsBook] = useState({
    day: "",
    timeId: "",
    classId: "",
    userId: singleTeacherInfo._id,
    finished: "No",
    typeOfTeaching: "",
    billId: "",
    reviewFromTeacher: "",
    teacherAccept: "",
    teacherIsPay: "",
    linkStudy: "",
  });
  // console.log("singleTeacherInfoCHECK", singleTeacherInfo);
  const DayPerWeek = singleTeacherInfo.availableTime;
  let RenderCard;
  if (DayPerWeek) {
    RenderCard = DayPerWeek.map((item) => {
      return (
        <div className="col">
          <DayBox dayAndTime={{ item, classIsBook }} />
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
        <div className="col">
          <select id="inputState" className="form-control  ">
            <option selected>Chọn phương pháp học...</option>
            <option>Trực tuyến</option>
            <option>Tại nhà</option>
          </select>
        </div>
      </div>

      <div className="card-group container" style={{ background: "white" }}>
        {RenderCard}
      </div>
    </div>
  );
}

export default RenderBox;
