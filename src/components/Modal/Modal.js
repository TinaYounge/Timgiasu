import React from "react";
import { Modal, Button } from "react-bootstrap";
import RenderBox from "../TimeBox/RenderBox";

function MyVerticallyCenteredModal(props) {
  const singleTeacherInfo = props.singleTeacherInfo;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-center"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-center">
          Chọn lịch với gia sư
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <RenderBox singleTeacherInfo={singleTeacherInfo} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalTim({ singleTeacherInfo }) {
  let availableTime = singleTeacherInfo.availableTime;
  console.log("kekekeke", availableTime);
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Book lịch
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        singleTeacherInfo={singleTeacherInfo}
      />
    </>
  );
}
export default ModalTim;
