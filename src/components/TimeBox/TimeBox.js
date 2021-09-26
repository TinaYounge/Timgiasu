import React, { useState } from "react";
import moment from "moment";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AddClassIsBookToStudent } from "../../redux/GetSingleStudent/GetSingleStudentAction";

function MyVerticallyCenteredModal(props) {
  const dispatch = useDispatch();
  const classIsBooked = props.classIsBookedInfo;

  const YesAndClose = (e) => {
    dispatch(AddClassIsBookToStudent(e));
  };
  return (
    <Modal
      {...props}
      size=""
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ background: "hsla(160, 3%, 21%, 0.651)" }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Bạn chắc chắn chọn:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Lớp học vào ngày: {moment(classIsBooked.day).format("ddd Do")} -Vào
          lúc: {classIsBooked.timeId} giờ
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => YesAndClose(classIsBooked)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function TimeBox({ timeAll }) {
  const [modalShow, setModalShow] = React.useState(false);

  const notify = () => toast("Vui lòng chọn giờ khác");
  const time = timeAll.timeItem;
  const classIsBookWithDate = timeAll.classisBookCheck;
  const [classIsBookWithDateAndTime, setClassIsBookWithDateAndTime] =
    useState(classIsBookWithDate);
  const getTime = (time) => {
    setClassIsBookWithDateAndTime({
      ...classIsBookWithDateAndTime,
      timeId: time.timeId,
      day: time.date,
    });
    setModalShow(true);
  };
  return time.value === "1" ? (
    <div>
      <button
        className=" btn mt-auto"
        style={{ backgroundColor: "green", color: "white" }}
        onClick={() => {
          getTime(time);
        }}
      >
        {time.timeId}
      </button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        classIsBookedInfo={classIsBookWithDateAndTime}
      />
    </div>
  ) : (
    <div>
      <button
        className=" btn mt-auto"
        style={{ backgroundColor: "red", color: "white" }}
        onClick={() => notify()}
      >
        {time.timeId}
      </button>
    </div>
  );
}
export default TimeBox;
