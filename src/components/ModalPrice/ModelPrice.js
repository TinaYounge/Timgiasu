import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddCartToStudent } from "../../redux/GetSingleStudent/GetSingleStudentAction";

function ModalPrice({ priceInfo }) {
  const dispatch = useDispatch();
  const notifyFollowing = () => toast("Bạn đẫ follow giáo viên!");
  const notifyAdded = () => toast("Bạn đẫ thêm lớp học thành công!");

  const [show, setShow] = useState(false);
  const [packet, setPacket] = useState({
    classId: priceInfo._id,
    userId: priceInfo.userId,
    idPrice: "",
    value: 0,
    paid: "No",
    subject: priceInfo.subject,
    classCanBook: 1,
  });
  const handleClose = () => {
    setShow(false);
  };
  const followingTeacher = () => {
    notifyFollowing();
  };
  const handleCloseAndYes = () => {
    setShow(false);
    dispatch(AddCartToStudent(packet));
    notifyAdded();
  };

  const handleShow = (price) => () => {
    let classCanBook = 0;
    switch (price.idPrice) {
      case "30":
        classCanBook = 1;
        break;
      case "50":
        classCanBook = 1;
        break;
      case "5x50":
        classCanBook = 5;
        break;
      case "10x50":
        classCanBook = 10;
        break;
      default:
        classCanBook = 0;
    }
    setShow(true);
    setPacket({
      ...packet,
      idPrice: price.idPrice,
      value: price.value,
      classCanBook,
    });
  };
  console.log("packet", packet);

  let RenderCard;
  if (priceInfo) {
    RenderCard = priceInfo.fullPackage.map((item) => {
      return (
        <div
          className="btn-grad btn-lg"
          onClick={handleShow({
            idPrice: item.idPice,
            value: item.value,
          })}
        >
          {item.value}VND/{item.idPice}
          phút
        </div>
      );
    });
  } else {
    RenderCard = (
      <div className="spinner-border text-primary " role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <div className="">{RenderCard}</div>
      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-center">
            Đồng ý thanh toán với gia sư
          </Modal.Title>{" "}
        </Modal.Header>
        <Modal.Body>
          <p>
            Bạn chắc chắn thêm gói trị giá {packet.value}VND cho{" "}
            {packet.idPrice} phút ?
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={followingTeacher}>
            Lưu giáo viên{" "}
          </Button>
          <Button variant="primary" onClick={handleCloseAndYes}>
            Đồng ý
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPrice;
