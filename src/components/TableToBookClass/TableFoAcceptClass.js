import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getSingleOwnTeacherUser } from "../../redux/SingleUser/GetSingleUserAction";
import SmallPic from "../CardItems/SmallPic";
import moment from "moment";
import { Modal, Button } from "react-bootstrap";

function ExampleYes({ classIsBookId }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [acceptState, setAcceptState] = useState({
    teacherAccept: "",
    linkStudy: "",
  });
  console.log("kakak", acceptState);
  const handleClose = () => setShow(false);
  const handleCloseAndYes = () => {
    setShow(false);
    // dispatch();
  };
  const handleShow = () => {
    setShow(true);
    setAcceptState({ ...acceptState, teacherAccept: "Yes" });
  };

  return (
    <>
      <Button className="btn-success" onClick={handleShow}>
        Đồng ý
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Vui lòng điền thông tin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Link lớp học nếu online, Địa chỉ học nếu offline.
          <input
            onChange={(e) =>
              setAcceptState({ ...acceptState, linkStudy: e.target.value })
            }
          ></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Quay lại
          </Button>
          <Button variant="primary" onClick={handleCloseAndYes}>
            Đồng ý{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
function ExampleNo({ classIsBookId }) {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [refuseState, setRefuseState] = useState({
    teacherAccept: "",
    reviewFromTeacher: "",
  });
  const handleClose = () => setShow(false);
  const handleCloseAndNo = () => {
    setShow(false);
    // dispatch();
  };

  const handleShow = () => {
    setShow(true);
    setRefuseState({ ...refuseState, teacherAccept: "No" });
  };

  return (
    <>
      <Button className="btn-danger" onClick={handleShow}>
        Từ chối
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Vui lòng điền thông tin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lý do bạn từ chối :{" "}
          <input
            onChange={(e) =>
              setRefuseState({
                ...refuseState,
                reviewFromTeacher: e.target.value,
              })
            }
          ></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Quay lại
          </Button>
          <Button variant="primary" onClick={handleCloseAndNo}>
            Đồng ý{" "}
          </Button>
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
    let cartArray = teacherState.user[id].classIsBooked;
    RenderCard = cartArray.map((item) => {
      return (
        <div className="cartBox row ">
          <div className="col-lg-2">
            <SmallPic userInfo={item.studentId} />
          </div>
          <div className="col-lg-7">
            Môn: {item.subject}
            <div>
              Thời gian: {moment(item.time.day).format("ddd Do")}-
              {item.time.timeId}{" "}
            </div>
            <div>Phương pháp học: {item.typeOfTeaching}</div>
            <div>StudentId: {item.studentId}</div>
          </div>
          <div className="col-lg-3 row">
            <div className="col" style={{ marginBottom: "10px" }}>
              {" "}
              <ExampleYes classIsBookId={item._id} />
            </div>
            <div className="col">
              {" "}
              <ExampleNo classIsBookId={item._id} />
            </div>
          </div>
        </div>
      );
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
    <div>
      <div>{RenderCard}</div>
    </div>
  );
}

export default TableFoAcceptClass;
