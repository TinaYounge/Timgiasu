import React, { useState } from "react";
import DayBox from "./DayBox";

function RenderBox({ singleTeacherInfoAll }) {
  const singleTeacherInfo = singleTeacherInfoAll.singleTeacherInfoWithId;
  const cartId = singleTeacherInfoAll.eachCart;
  const DayPerWeek = singleTeacherInfo.availableTime;

  const [classIsBook, setClassIsBook] = useState({
    typeOfTeaching: "Trực tuyến",
    day: "",
    timeId: "",
    classId: cartId.classId,
    userId: singleTeacherInfo._id,
    finished: "No",
    billId: cartId._id,
    reviewFromTeacher: "",
    teacherAccept: "",
    teacherIsPay: "",
    linkStudy: "",
    subject: cartId.subject,
  });
  console.log("JYHTGREFD", classIsBook);
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
        <div className="form-group col-md-4">
          {/* <label for="inputAddress" className=" col-form-label fw-bold">
            Chọn phương pháp học{" "}
          </label>{" "} */}
          <select id="inputState" className="form-control  ">
            <option
              selected
              onChange={(e) =>
                setClassIsBook({
                  ...classIsBook,
                  typeOfTeaching: e.target.value,
                })
              }
            >
              Chọn phương pháp...
            </option>
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
