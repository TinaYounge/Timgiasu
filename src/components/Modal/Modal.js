import React, { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import RenderBox from "../TimeBox/RenderBox";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser } from "../../redux/SingleUser/GetSingleUserAction";

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
        <RenderBox singleTeacherInfoAll={singleTeacherInfo} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalTim({ eachCart }) {
  const singleTeacherInfo = eachCart.userId;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleUser(singleTeacherInfo));
  }, [dispatch, singleTeacherInfo]);
  const state = useSelector((state) => state.singleUserInfo);
  let singleTeacherInfoWithId = state.user[singleTeacherInfo];
  const [modalShow, setModalShow] = React.useState(false);
  return state.user[singleTeacherInfo] ? (
    <>
      <div
        className="btn-grad"
        style={{ padding: "5px" }}
        onClick={() => setModalShow(true)}
      >
        Book lịch
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        singleTeacherInfo={{ singleTeacherInfoWithId, eachCart }}
      />
    </>
  ) : (
    <div></div>
  );
}
export default ModalTim;
