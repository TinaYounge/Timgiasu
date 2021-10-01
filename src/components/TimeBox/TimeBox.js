import React, { useEffect, useState } from "react";
import moment from "moment";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal, Button, Card } from "react-bootstrap";
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
        <Button onClick={() => YesAndClose(classIsBooked)}>Đồng ý</Button>
      </Modal.Footer>
    </Modal>
  );
}

function TimeBox({ timeAll }) {
  const [modalShow, setModalShow] = React.useState(false);
  const notify = () =>
    toast.warn("Vui lòng chọn giờ khác!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const time = timeAll.timeItem;
  useEffect(() => {
    setClassIsBookWithDateAndTime(timeAll.classisBookCheck);
  }, [timeAll]);
  const [classIsBookWithDateAndTime, setClassIsBookWithDateAndTime] = useState(
    timeAll.classisBookCheck
  );
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
      <Card
        as="a"
        className="btn-gradBlue"
        style={{ fontSize: "18px", margin: "0" }}
        onClick={() => {
          getTime(time);
        }}
      >
        {time.timeId}
      </Card>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        classIsBookedInfo={classIsBookWithDateAndTime}
      />
    </div>
  ) : (
    <div>
      <Card
        as="a"
        className="btn-gradRed"
        style={{ fontSize: "18px", margin: "0" }}
        onClick={() => notify()}
      >
        {time.timeId}
      </Card>
    </div>
  );
}
export default TimeBox;
