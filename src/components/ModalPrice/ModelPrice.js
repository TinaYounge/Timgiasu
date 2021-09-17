import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ModalPrice({ priceInfo }) {
  const notify = () => toast("Chúc mừng bạn đăng kí thành công!");
  const notifyCart = () => toast("Đã thêm khóa học vào lớp học mơ ước");

  const [show, setShow] = useState(false);
  const [packet, setPacket] = useState({ priceOfClass: "" });
  const handleClose = () => {
    // notifyCart();
    setShow(false);
  };

  const handleCloseAndYes = () => {
    setShow(false);
    // notify();
  };

  const handleShow = (price) => () => {
    setShow(true);
    setPacket({ priceOfClass: price });
    console.log("huhuh", price);
  };

  const handleShow1 = () => {
    setShow(true);
    setPacket({ priceOfClass: priceInfo.price30 });
  };
  console.log("packet", packet);
  let a = packet.priceOfClass;
  return (
    <>
      <a className="btn-grad btn-lg" onClick={handleShow1}>
        {priceInfo.price30}VND/30phút
      </a>
      <a className="btn-grad btn-lg" onClick={handleShow(priceInfo.price50)}>
        {priceInfo.price50}VND/50phút
      </a>
      <a className="btn-grad btn-lg" onClick={handleShow}>
        {priceInfo.price5X50}VND/5buổi{" "}
      </a>
      <a className="btn-grad btn-lg" onClick={handleShow}>
        {priceInfo.price10x50}VND/10buổi
      </a>
      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-center">
            Đồng ý thanh toán với gia sư
          </Modal.Title>{" "}
        </Modal.Header>
        <Modal.Body>
          {" "}
          <p>bạn chắc chắn trị giá - {a}VND ?</p>
        </Modal.Body>
        <ToastContainer />

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Thêm vào lớp học mong ước
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
