import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ModalPrice({ priceInfo }) {
  const notify = () => toast("Chúc mừng bạn đăng kí thành công!");
  const notifyCart = () => toast("Đã thêm khóa học vào lớp học mơ ước");

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    notifyCart();
  };
  const handleCloseAndYes = () => {
    setShow(false);
    notify();
  };

  const handleShow = () => setShow(true);

  return (
    <>
      <a className="btn-grad btn-lg" onClick={handleShow}>
        {priceInfo}{" "}
      </a>

      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-center">
            Đồng ý thanh toán với gia sư
          </Modal.Title>{" "}
        </Modal.Header>
        <Modal.Body>
          {" "}
          <p>bạn chắc chắn ?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Thêm vào lớp học mong ước
          </Button>
          <Button variant="primary" onClick={handleCloseAndYes}>
            Đồng ý
          </Button>
          <ToastContainer />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPrice;
