import moment from "moment";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { GetClassIsAccepted } from "../../redux/ClassIsBooked/ClassIsBookAction";

function NotifyClass() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetClassIsAccepted());
  }, [dispatch]);
  const classIsAccepted = useSelector((state) => state.classIsBooked);
  console.log("classIsAccepted", classIsAccepted.classIsBooked);
  let RenderCard;
  if (classIsAccepted.classIsBooked[0]) {
    RenderCard = classIsAccepted.classIsBooked.map((item) => {
      return (
        <div className="cartNotify row" style={{ color: "black" }}>
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

          <div>Học xong? và review</div>
        </div>
      );
    });
  } else {
    RenderCard = (
      <div className=" text-primary " role="status">
        <span className="sr-only">Bạn chưa có lớp học nào</span>
      </div>
    );
  }

  return (
    <div className="box " style={{ padding: "20px" }}>
      <h4 className="py-2   ">Lớp học và link học sắp tới</h4>
      <div>{RenderCard}</div>
    </div>
  );
}

export default NotifyClass;
