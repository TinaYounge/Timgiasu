import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getSingleOwnTeacherUser } from "../../redux/SingleUser/GetSingleUserAction";
import SmallPic from "../CardItems/SmallPic";
import moment from "moment";
import { Modal, Button } from "react-bootstrap";
import { ClassIsBookedUpdate } from "../../redux/ClassIsBooked/ClassIsBookAction";

function ExampleYes({ id }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [state, setstate] = useState({
    teacherAccept: "",
    linkStudy: "",
  });
  console.log("kakak", state);
  const handleClose = () => setShow(false);
  const handleCloseAndYes = () => {
    setShow(false);
    dispatch(ClassIsBookedUpdate({ id, state }));
  };
  const handleShow = () => {
    setShow(true);
    setstate({ ...state, teacherAccept: "Yes" });
  };

  return (
    <>
      <div
        className="btn-gradBlue"
        style={{ padding: "2px" }}
        onClick={handleShow}
      >
        Đồng ý
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Vui lòng điền thông tin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Link lớp học nếu online, Địa chỉ học nếu offline.
          <input
            onChange={(e) => setstate({ ...state, linkStudy: e.target.value })}
          ></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Quay lại
          </Button>
          <div
            className="btn-gradBlue"
            style={{ padding: "7px", paddingRight: "10px" }}
            onClick={handleCloseAndYes}
          >
            Đồng ý{" "}
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
function ExampleNo({ id }) {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [state, setstate] = useState({
    teacherAccept: "",
    reviewFromTeacher: "",
  });
  const handleClose = () => setShow(false);
  const handleCloseAndNo = () => {
    setShow(false);
    dispatch(ClassIsBookedUpdate({ id, state }));
  };

  const handleShow = () => {
    setShow(true);
    setstate({ ...state, teacherAccept: "Refuse" });
  };

  return (
    <>
      <div className="btn-grad" style={{ padding: "3px" }} onClick={handleShow}>
        Từ chối
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Vui lòng điền thông tin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lý do bạn từ chối :{" "}
          <input
            onChange={(e) =>
              setstate({
                ...state,
                reviewFromTeacher: e.target.value,
              })
            }
          ></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Quay lại
          </Button>
          <div
            className="btn-gradBlue"
            style={{
              padding: "7px",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
            onClick={handleCloseAndNo}
          >
            Gửi
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function TableFoAcceptClass() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleOwnTeacherUser());
  }, [dispatch]);
  const teacherState = useSelector((state) => state.singleUserInfo);
  console.log("teacherState", teacherState);
  let RenderCard;

  if (teacherState.user[id]) {
    let classArray = teacherState.user[id].classIsBooked;
    RenderCard = classArray.map((item) => {
      if (item.teacherAccept === "No") {
        if (item.typeOfTeaching === "Trực tuyến") {
          return (
            <div className="cartBox row ">
              <div className="col-lg-2">
                <img
                  className="rounded"
                  src={item.studentProfilePicture}
                  style={{ width: "90px" }}
                  alt="student"
                />
              </div>
              <div className="col-lg-7">
                Môn: {item.subject}
                <div>
                  Thời gian: {moment(item.time.day).format("ddd Do")}-
                  {item.time.timeId}{" "}
                </div>
                <div>Phương pháp học: {item.typeOfTeaching}</div>
                <div>Tên học sinh: {item.studentFullname}</div>
              </div>
              <div className="col-lg-3 row">
                <div className="col" style={{ marginBottom: "10px" }}>
                  <ExampleYes id={item._id} />
                </div>
                <div className="col">
                  <ExampleNo id={item._id} />
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="cartBox row ">
              <div className="col-lg-2">
                <img
                  className="rounded"
                  src={item.studentProfilePicture}
                  style={{ width: "90px" }}
                  alt="student"
                />
              </div>
              <div className="col-lg-7">
                Môn: {item.subject}
                <div>
                  Thời gian: {moment(item.time.day).format("ddd Do")}-
                  {item.time.timeId}
                </div>
                <div>Phương pháp học: {item.typeOfTeaching}</div>
                <div>Địa chỉ: {item.studentPlace}</div>
                <div>Điện thoại liên lạc: {item.studentPhone}</div>
                <div>Tên học sinh: {item.studentFullname}</div>
              </div>
              <div className="col-lg-3 row">
                <div className="col" style={{ marginBottom: "10px" }}>
                  <ExampleYes id={item._id} />
                </div>
                <div className="col">
                  <ExampleNo id={item._id} />
                </div>
              </div>
            </div>
          );
        }
      }
    });
  } else {
    RenderCard = (
      <div className="" role="status">
        <span className="sr-only">
          Bạn chưa có lớp, vui lòng chọn giáo viên
        </span>
      </div>
    );
  }

  return (
    <div style={{ marginBottom: "10px" }}>
      <div>{RenderCard}</div>
    </div>
  );
}

export default TableFoAcceptClass;
