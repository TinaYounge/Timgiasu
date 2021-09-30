import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  ClassIsBookedUpdateIsFinished,
  GetClassIsAccepted,
} from "../../redux/ClassIsBooked/ClassIsBookAction";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

function Example({ id }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [state, setstate] = useState({
    reviewFromStudent: "",
    teacherShow: "Yes",
  });
  const handleClose = () => setShow(false);
  const handleCloseAndTeacherNoShow = () => {
    setstate({ ...state, teacherShow: "No" });
    setShow(false);
    dispatch(
      ClassIsBookedUpdateIsFinished({
        id,
        state: { ...state, teacherShow: "No" },
      })
    );
  };

  const handleCloseAndYes = () => {
    setShow(false);
    dispatch(
      ClassIsBookedUpdateIsFinished({
        id,
        state,
      })
    );
  };
  const handleShow = () => {
    setShow(true);
  };
  console.log("studentnot", state);

  return (
    <>
      <Button className="btn-success" onClick={handleShow}>
        REVIEW
      </Button>

      <Modal show={show} onHide={handleClose} size="xxl">
        <Modal.Header closeButton>
          <Modal.Title>Review lớp học </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Review lớp học và click Đã học xong:
          <input
            onChange={(e) =>
              setstate({ ...state, reviewFromStudent: e.target.value })
            }
          ></input>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="warning" onClick={handleCloseAndTeacherNoShow}>
            Gia sư vắng mặt
          </Button>

          <Button variant="success" onClick={handleCloseAndYes}>
            Đã học xong
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function NotifyClassStudent() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetClassIsAccepted());
  }, [dispatch]);
  const classIsAccepted = useSelector((state) => state.classIsBooked);
  let RenderCard;
  if (classIsAccepted.classIsBooked[0]) {
    RenderCard = classIsAccepted.classIsBooked.map((item) => {
      if (item.finished === "No") {
        if (item.typeOfTeaching === "Tại nhà") {
          return (
            <div className="cartNotify row" style={{ color: "black" }}>
              <div className="col-lg-9">
                <div className="">
                  Lớp học: {item.subject}
                  <div>
                    Thời gian: {moment(item.time.day).format("ddd Do")}-
                    {item.time.timeId}
                  </div>
                </div>
                <div className="">Hình thức học: {item.typeOfTeaching}</div>
                {/* <div>Mã lớp học: {item._id}</div> */}
                {/* http://localhost:3000/TeacherDetailPage/ */}
                <div>
                  Gia sư:{" "}
                  <Link to={"/TeacherDetailPage/" + item.userId}>
                    Click vào đây
                  </Link>
                </div>
              </div>
              <div className="col-lg-3">
                <Example id={item._id} />
              </div>
            </div>
          );
        } else {
          return (
            <div className="cartNotify row" style={{ color: "black" }}>
              <div className="col-lg-9">
                <div className="">
                  Lớp học: {item.subject}
                  <div>
                    Thời gian: {moment(item.time.day).format("ddd Do")}-
                    {item.time.timeId}
                  </div>
                </div>
                <div className="">Hình thức học: {item.typeOfTeaching}</div>
                <div className="">
                  Link lớp học:
                  <a
                    href={item.linkStudy}
                    target="blank"
                    style={{ color: "blueviolet", cursor: "pointer" }}
                  >
                    Link
                  </a>
                </div>
                <div>
                  Gia sư:{" "}
                  <Link to={"/TeacherDetailPage/" + item.userId}>
                    Click vào đây
                  </Link>
                </div>
              </div>
              <div className="col-lg-3">
                <Example id={item._id} />
              </div>
            </div>
          );
        }
      }
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

export default NotifyClassStudent;
