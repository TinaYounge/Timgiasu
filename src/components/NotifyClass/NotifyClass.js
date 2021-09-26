import moment from "moment";
import React from "react";

function NotifyClass({ singleStudentInfo }) {
  console.log("singleStudentInfo", singleStudentInfo);
  let RenderCard;
  if (singleStudentInfo.classIsBooked) {
    RenderCard = singleStudentInfo.classIsBooked.map((item) => {
      if (item.teacherAccept === "Yes") {
        return (
          <div className="cartNotify row ">
            <div className="">
              Lớp học: {item.subject}
              <div>
                Thời gian: {moment(item.time.day).format("ddd Do")}-
                {item.time.timeId}
              </div>
            </div>
            <div className="">Hình thức học: {item.typeOfTeaching}</div>
            <div className="">
              Link lớp học:{" "}
              <a
                href={item.linkStudy}
                target="blank"
                style={{ color: "blueviolet", cursor: "pointer" }}
              >
                Link
              </a>
            </div>

            <div></div>
          </div>
        );
      }
    });
  } else {
    RenderCard = (
      <div className="spinner-border text-primary " role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return <div className=""> {RenderCard}</div>;
}

export default NotifyClass;
